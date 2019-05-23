# Discover

A repo for Dapp Discovery through Status, and any other browser. Viewing curated information does not require any special tools, though effecting the way information is ranked will require a web3 wallet, whether that is Status, MetaMask, Trust, Brave or whichever one you prefer.

## Available Scripts

This project is based on Embark v4.0.1, with a few things customised for React. Currently, you'll need to run the app and Embark separately, in different tabs in your terminal.

### `npm run build`

Builds the app into the `build` directory.

### `npm run start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `embark run testnet --noserver`

Will connect to the ropsten blockchain and IPFS through Infura

**Ropsten contracts:**
1. SNT - 0x2764b5da3696E3613Ef9864E9B4613f9fA478E75
2. Discover - 0x9591a20b9B601651eDF1072A1Dda994C0B1a5bBf

**Important !** Don't touch `src/embarkArtifacts` folder and don't change `generationDir` from embark.config. In embarkjs.js there is an error, because Infura's IPFS has deprecated `id` endpoint. This is fixed now, but if you change embarkArtifacts folder, the error is goint to appear again because of the recreation of `embarkArtifacts` folder on each `embark run`


### `embark test`

Will compile your contracts, with hot-reloading, and let you test them locally to your heart's content.

### slither . --exclude naming-convention --filter-paths token

Make sure you get TrailofBits' [latest static analysis tool](https://securityonline.info/slither/), and do your own static analysis on the relevant contracts that will be deployed for Discover.
