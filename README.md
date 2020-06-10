<h1 align="center">
Dai Plugin Template
</h1>

## Usage
```
$ npm i dai-plugin-dcent-web
```

```javascript
import DcentPlugin from 'dai-plugin-dcent-web'
//or
const DcentPlugin = require('dai-plugin-dcent-web')

maker.create('browser|http', {
    plugins: [ DcentPlugin ]
    ...
})

maker.addAccount('name', {
    type: 'dcent',
    ...
})
```

# For Contributor
## Init project on ubuntu 19.10 server
### Install node 11.10.x using nvm
```
# wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
```
Running either of the above commands downloads a script and runs it. The script clones the nvm repository to `~/.nvm`, and adds the source lines from the snippet below to your profile (`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or ~/.bashrc).
```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```
Verify nvm Installation After Shell Restart
```
# command -v nvm
nvm
```
Install node 11.10.1
```
# nvm install 11.10.1
```
Verify node, npm Installation
```
# node -v
v11.10.1
# npm -v
6.7.0
```
### Install Python
```
# sudo apt-get install python
```
### Install yarn
```
# npm install -g yarn
```
Verify Installation yarn
```
# yarn -v
1.19.1
```
## description

This project makes D.CENT Biometric Wallet available in Dai.js.

___

## Get started developing with

* `yarn` to install dependencies

* `yarn testchain` will launch a ganache testchain with all relevant Maker contracts deployed

* Build the code for production with `yarn build`