# 📲 create-eth-mobile

CLI to create mobile decentralized applications (dApps) using [ETH Mobile](https://github.com/eth-mobile/eth-mobile).

<h4 align="center">
  <a href="https://docs.ethmobile.io">ETH Mobile Documentation</a> |
  <a href="https://www.ethmobile.io">ETH Mobile Website</a>
</h4>

An open-source toolkit for building mobile dApps on Ethereum and other EVM-compatible blockchains. It simplifies mobile dApp development with fast, secure, and customizable pre-built components.

⚙️ **Tech Stack**: React Native, Expo, Hardhat or Foundry, Ethers, TypeScript, and Thirdweb.

### Key features

- 🧑‍💻 **Contract Debugger**: Inspect smart contract details and interact with contracts in real time.
- 💳 **In-Built Wallet**: Secure mobile crypto wallet powered by [Thirdweb](https://thirdweb.com/).
- ✅ **Contract Hot Reload**: Frontend updates automatically as you change smart contracts.
- 🪝 **Custom Hooks**: React hooks with TypeScript autocompletion for contract interaction.
- 🧱 **Web3 Components**: Pre-built components for building mobile dApp frontends.

## Requirements

Before you begin, install:

- [Node (>= v20.18.3)](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/getting-started/install)
- [Git](https://git-scm.com/downloads)
- [React Native](https://reactnative.dev/docs/set-up-your-environment)

## Quickstart

1. **Create a new ETH Mobile app**

```bash
npx eth-mobile@latest
```

Choose a project name and solidity framework (Hardhat or Foundry). The CLI clones [ETH Mobile](https://github.com/eth-mobile/eth-mobile) and sets up your project.

2. **Install dependencies** (if not done by the CLI)

```bash
cd <your-project-name>
yarn
```

3. **Start a local network** (first terminal)

```bash
yarn chain
```

4. **Deploy contracts** (second terminal)

```bash
yarn deploy
```

5. **Configure network + prebuild**

These steps now run automatically during project setup.

6. **Run the app**

```bash
yarn start
```

Then in another terminal:

```bash
yarn android
# or
yarn ios
```

## Documentation

- [ETH Mobile docs](https://docs.ethmobile.io)
- [ETH Mobile website](https://www.ethmobile.io)

## Contributing

Built by DewDrip. We welcome contributions to eth-mobile!

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## Community

<h4 align="center">
  <a href="https://github.com/dewdrip">DewDrip on GitHub</a> |
  <a href="https://github.com/eth-mobile/eth-mobile">ETH Mobile repo</a>
</h4>
