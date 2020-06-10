import HookedWallet from 'web3-provider-engine/subproviders/hooked-wallet';
import DcentConnector from 'dcent-web-connector';

const pathMap = {};
let networkId;

/**
 *
 * @param {string} address
 */
const getPath = async address => {
  for (const key in pathMap) {
    if (key.toLowerCase() === address.toLowerCase()) return pathMap[key];
  }
};

const openPopup = async () => {
  const popupResult = await DcentConnector.dcentPopupWindow();
  if (popupResult != null && popupResult.header.status === 'error') {
    throw new Error(popupResult.body.error.message);
  }
  return popupResult;
};

// SDK Bridge 팝업창에서 wallet이 정상적으로 연결될때까지 대기합니다.
const waitConnectWallet = async () => {
  if (!DcentConnector.popupWindow || DcentConnector.popupWindow.closed) {
    throw new Error('popup_closed');
  }
  const infoResult = await DcentConnector.info();
  if (!infoResult.body.parameter.isUsbAttached) {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        waitConnectWallet()
          .then(() => {
            resolve();
          })
          .catch(err => {
            reject(err);
          });
      }, 500);
    });
  }
};

const getAccountsAsync = async () => {
  if (Object.keys(pathMap).length > 0) {
    // pathMap 을 가지고 있다면
    return Object.keys(pathMap);
  }

  await openPopup();
  await waitConnectWallet();

  // 계정 목록 가져옴
  const accountResult = await DcentConnector.getAccountInfo();
  console.log('dcent accountInfo result: ', accountResult);
  const accounts = accountResult.body.parameter.account;
  console.log('dcent accounts: ', accounts);

  // ethereum 계정들의 path 가져옴
  const etherAccounts = accounts.filter(
    accountInfo => accountInfo.coin_name === DcentConnector.coinGroup.ETHEREUM
  );
  const paths = [];
  etherAccounts.forEach(accountInfo => {
    paths.push(accountInfo.address_path);
  });
  console.log('dcent ethereum path: ', paths);
  if (paths.length === 0) {
    paths.push("m/44'/60'/0'/0/0");
    console.warn(
      "[D'CENT] cannot find exists ethereum accounts. use default path"
    );
  }

  // path 를 통해 계정 주소를 가져옴
  const addresses = [];
  for (const path of paths) {
    const addressResult = await DcentConnector.getAddress(
      DcentConnector.coinType.ETHEREUM,
      path
    );
    pathMap[addressResult.body.parameter.address] = path;
    addresses.push(addressResult.body.parameter.address);
  }
  console.log('dcent addresses: ', addresses);

  DcentConnector.popupWindowClose();

  return addresses;
};

const signTransaction = (txData, callback) => {
  if (typeof callback === 'undefined') {
    return signTransactionAsync(txData);
  } else {
    signTransactionAsync(txData)
      .then(transaction => {
        callback(null, transaction);
      })
      .catch(err => {
        callback(err, null);
      });
  }
};

/**
 *
 * @param {Object} txData
 * @param {string} txData.from
 * @param {string} txData.gas
 * @param {string} txData.gasPrice
 * @param {string} txData.nonce
 * @param {string} txData.to
 * @param {string} txData.value
 * @param {string} txData.data
 */
const signTransactionAsync = async txData => {
  await openPopup();
  await waitConnectWallet();

  console.log('dcent signTransactionAsync txData: ', txData);
  console.log('dcent signTransactionAsync pathMap: ', pathMap);
  const path = await getPath(txData.from);
  if (!path) throw new Error(`address unknown '${txData.from}'`);
  console.log('dcent signTransactionAsync path: ', path);
  console.log('dcent signTransactionAsync networkId: ', networkId);
  let txResult;
  try {
    txResult = await DcentConnector.getEthereumSignedTransaction(
      DcentConnector.coinType.ETHEREUM,
      txData.nonce,
      txData.gasPrice,
      txData.gas,
      txData.to,
      txData.value || '0',
      txData.data || '0x',
      path,
      networkId
    );
  } catch (err) {
    if (err.header.response_from === 'wam') {
      throw new Error('no_device');
    }
    if (err.body.error.code) {
      throw new Error(err.body.error.code);
      // throw new Error('Action cancelled by user')
    }
    throw err;
  } finally {
    DcentConnector.popupWindowClose();
  }

  console.log('dcent signTransaction tx: ', txResult);
  return '0x' + txResult.body.parameter.signed;
};

const signPersonalMessage = (msgData, callback) => {
  if (typeof callback === 'undefined') {
    return signPersonalMessageAsync(msgData);
  } else {
    signPersonalMessageAsync(msgData)
      .then(transaction => {
        callback(null, transaction);
      })
      .catch(err => {
        callback(err, null);
      });
  }
};
/**
 *
 * @param {Object} msgData
 * @param {string} msgData.data
 * @param {string} msgData.from
 */
const signPersonalMessageAsync = async msgData => {
  await openPopup();
  await waitConnectWallet();

  console.log('dcent signPersonalMessageAsync msgData= ', msgData);
  const path = await getPath(msgData.from);
  if (!path) throw new Error(`address unknown '${msgData.from}'`);
  let txResult;
  try {
    txResult = await DcentConnector.getEthereumSignedMessage(
      msgData.data,
      path
    );
  } catch (err) {
    if (err.header.response_from === 'wam') {
      throw new Error('no_device');
    }
    if (err.body.error.code) {
      throw new Error(err.body.error.code);
    }
    throw err;
  } finally {
    DcentConnector.popupWindowClose();
  }

  console.log('dcent signPersonalMessageAsync result: ', txResult);
  return '0x' + txResult.body.parameter.sign;
};

export default class DcentHookedWalletSubprovider extends HookedWallet {
  constructor(opts = {}) {
    const extOpts = {
      signTransaction,
      signPersonalMessage
    };
    const options = Object.assign(opts, extOpts);
    console.log(
      'dcent DcentHookedWalletSubprovider constructor options: ',
      options
    );

    networkId = opts.networkId;
    super(options);
  }

  /**
   * @param {function(Error, string[])} callback
   * @return {Promise|undefined}
   */
  getAccounts(callback) {
    if (!callback) {
      return getAccountsAsync();
    } else {
      getAccountsAsync()
        .then(accounts => {
          callback(null, accounts);
        })
        .catch(e => {
          callback(e, null);
        });
    }
  }
}
