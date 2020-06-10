import { LocalService } from '@makerdao/services-core';
import DcentHookedWalletSubprovider from '../provider/DcentHookedWalletSubprovider';

export default class DcentService extends LocalService {
  constructor(name = 'dcent') {
    super(name, ['accounts', 'web3']);
  }

  // eslint-disable-next-line no-unused-vars
  initialize(settings) {
    const dService = this;
    this.get('accounts').addAccountType('dcent', async settings => {
      console.log('dcent addAccountType Settings', settings);
      const subProvider = new DcentHookedWalletSubprovider({
        networkId: dService.get('web3').networkId()
      });

      let address;
      if (settings.accountsLength && settings.accountsLength > 1) {
        if (!settings.choose) {
          throw new Error(
            'If accountsLength > 1, "choose" must be defined in account options.'
          );
        }
        const addresses = await subProvider.getAccounts();
        console.log('dcent factory addresses: ', addresses);

        address = await new Promise((resolve, reject) => {
          // this chooser function allows the app using the plugin to display the
          // list of addresses to a human user and let them make a choice.
          settings.choose(addresses, (err, address) => {
            err ? reject(err) : resolve(address);
          });
        });
        console.log('dcent factory address: ', address);
        // subProvider.setChosenAddress(address);
      } else {
        address = await subProvider.getAccounts()[0];
      }

      return { subprovider: subProvider, address };
    });
  }
}
