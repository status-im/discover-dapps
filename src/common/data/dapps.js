import * as Categories from './categories'

const Dapps = [
  {
    name: 'Airswap',
    url: 'https://instant.airswap.io/',
    image: '/discover-dapps/images/dapps/airswap.png',
    description: 'Meet the future of trading.',
    category: Categories.EXCHANGES,
    dateAdded: '2019-04-05',
  },
  {
    name: 'Bancor',
    url: 'https://www.bancor.network/',
    image: '/discover-dapps/images/dapps/bancor.png',
    description: 'Bancor is a decentralized liquidity network',
    category: Categories.EXCHANGES,
    dateAdded: '2019-04-05',
  },
  {
    name: 'Kyber',
    url: 'https://web3.kyber.network',
    description:
      'On-chain, instant and liquid platform for exchange and payment service',
    image: '/discover-dapps/images/dapps/kyber.png',
    category: Categories.EXCHANGES,
    dateAdded: '2019-04-05',
  },
  {
    name: 'DAI by MakerDao',
    url: 'https://dai.makerdao.com',
    description: 'Stability for the blockchain',
    image: '/discover-dapps/images/dapps/dai.png',
    category: Categories.EXCHANGES,
    dateAdded: '2019-04-05',
  },
  {
    name: 'Augur',
    url: 'https://augur.net',
    description:
      'A prediction market protocol owned and operated by the people that use it.',
    image: '/discover-dapps/images/dapps/augur.svg',
    category: Categories.EXCHANGES,
    dateAdded: '2019-04-11',
  },
  {
    name: 'LocalEthereum',
    url: 'https://localethereum.com/',
    description: 'The smartest way to buy and sell Ether',
    image: '/discover-dapps/images/dapps/local-ethereum.png',
    category: Categories.EXCHANGES,
    dateAdded: '2019-04-05',
  },
  {
    name: 'Eth2phone',
    url: 'https://eth2.io',
    description: 'Send Ether by phone number',
    image: '/discover-dapps/images/dapps/eth2phone.png',
    category: Categories.EXCHANGES,
    dateAdded: '2019-04-05',
  },
  {
    name: 'DDEX',
    url: 'https://ddex.io/',
    description:
      'Instant, real-time order matching with secure on-chain settlement',
    image: '/discover-dapps/images/dapps/ddex.png',
    category: Categories.EXCHANGES,
    dateAdded: '2019-04-05',
  },
  {
    name: 'Nuo',
    url: 'https://app.nuo.network/lend/',
    description:
      'The non-custodial way to lend, borrow or margin trade cryptocurrency.',
    image: '/discover-dapps/images/dapps/nuo.png',
    category: Categories.EXCHANGES,
    dateAdded: '2019-04-05',
  },
  {
    name: 'EasyTrade',
    url: 'https://easytrade.io',
    description: 'One exchange for every token',
    image: '/discover-dapps/images/dapps/easytrade.png',
    category: Categories.EXCHANGES,
    dateAdded: '2019-04-05',
  },
  {
    name: 'slow.trade',
    url: 'https://slow.trade/',
    description:
      'Trade fairly priced crypto assets on the first platform built with the DutchX protocol.',
    image: '/discover-dapps/images/dapps/slowtrade.png',
    category: Categories.EXCHANGES,
    dateAdded: '2019-04-05',
  },
  {
    name: 'Expo Trading',
    url: 'https://expotrading.com/trade/',
    description: 'The simplest way to margin trade cryptocurrency.',
    image: '/discover-dapps/images/dapps/expotrading.png',
    category: Categories.EXCHANGES,
    dateAdded: '2019-04-11',
  },
  {
    name: 'blockimmo',
    url: 'https://blockimmo.ch',
    description:
      'blockimmo is a blockchain powered, regulated platform enabling shared property investments and ownership.',
    image: '/discover-dapps/images/dapps/blockimmo.png',
    category: Categories.MARKETPLACES,
    dateAdded: '2019-04-05',
  },
  {
    name: 'CryptoCribs',
    url: 'https://cryptocribs.com',
    description: 'Travel the globe. Pay in crypto.',
    image: '/discover-dapps/images/dapps/cryptocribs.png',
    category: Categories.MARKETPLACES,
    dateAdded: '2019-04-05',
  },
  {
    name: 'Ethlance',
    url: 'https://ethlance.com',
    description:
      'The future of work is now. Hire people or work yourself in return for ETH.',
    image: '/discover-dapps/images/dapps/ethlance.png',
    category: Categories.MARKETPLACES,
    dateAdded: '2019-04-05',
  },
  {
    name: 'OpenSea',
    url: 'https://opensea.io',
    description: 'The largest decentralized marketplace for cryptogoods',
    image: '/discover-dapps/images/dapps/opensea.png',
    category: Categories.MARKETPLACES,
    dateAdded: '2019-04-05',
  },
  {
    name: 'KnownOrigin',
    url: 'https://dapp.knownorigin.io/gallery',
    description: 'Discover, buy and collect digital artwork.',
    image: '/discover-dapps/images/dapps/knownorigin.png',
    category: Categories.MARKETPLACES,
    dateAdded: '2019-04-11',
  },
  {
    name: 'Name Bazaar',
    url: 'https://namebazaar.io',
    description: 'ENS name marketplace',
    image: '/discover-dapps/images/dapps/name-bazaar.png',
    category: Categories.MARKETPLACES,
    dateAdded: '2019-04-05',
  },
  {
    name: 'The Bounties Network',
    url: 'https://bounties.network/',
    description: 'Bounties on any task, paid in any token',
    image: '/discover-dapps/images/dapps/bounties-network.png',
    category: Categories.MARKETPLACES,
    dateAdded: '2019-04-05',
  },
  {
    name: 'Emoon',
    url: 'https://www.emoon.io/',
    description:
      'A decentralized marketplace for buying & selling crypto assets',
    image: '/discover-dapps/images/dapps/emoon.png',
    category: Categories.MARKETPLACES,
    dateAdded: '2019-04-05',
  },
  {
    name: 'Astro Ledger',
    url: 'https://www.astroledger.org/#/onSale',
    description: 'Funding space grants with blockchain star naming.',
    image: '/discover-dapps/images/dapps/astroledger.svg',
    category: Categories.MARKETPLACES,
    dateAdded: '2019-04-11',
  },
  {
    name: 'SuperRare',
    url: 'https://superrare.co/market',
    description:
      'Buy, sell and collect unique digital creations by artists around the world',
    image: '/discover-dapps/images/dapps/superrare.png',
    category: Categories.MARKETPLACES,
    dateAdded: '2019-04-05',
  },
  {
    name: 'CryptoCare',
    url: 'https://cryptocare.tech',
    description:
      'Give your Ether some heart! Collectibles that make the world a better place.',
    image: '/discover-dapps/images/dapps/cryptocare.jpg',
    category: Categories.COLLECTIBLES,
    dateAdded: '2019-04-11',
  },
  {
    name: 'CryptoKitties',
    url: 'https://www.cryptokitties.co',
    description: 'Collect and breed adorable digital cats.',
    image: '/discover-dapps/images/dapps/cryptokitties.png',
    category: Categories.COLLECTIBLES,
    dateAdded: '2019-04-05',
  },
  {
    name: 'Cryptographics',
    url: 'https://cryptographics.app/',
    description:
      'Cryptographics is a digital art hub where artists, creators and collectors can submit asset packs, create unique cryptographics and trade them.',
    image: '/discover-dapps/images/dapps/cryptographics.png',
    category: Categories.COLLECTIBLES,
    dateAdded: '2019-04-05',
  },
  {
    name: 'CryptoPunks',
    url: 'https://www.larvalabs.com/cryptopunks',
    description: '10,000 unique collectible punks',
    image: '/discover-dapps/images/dapps/cryptopunks.png',
    category: Categories.COLLECTIBLES,
    dateAdded: '2019-04-05',
  },
  {
    name: 'Crypto Takeovers',
    url: 'https://cryptotakeovers.com/',
    description: 'Predict and conquer the world. Make a crypto fortune.',
    image: '/discover-dapps/images/dapps/cryptotakeovers.png',
    category: Categories.GAMES,
    dateAdded: '2019-04-05',
  },
  {
    name: 'CryptoFighters',
    url: 'https://cryptofighters.io',
    description: 'Collect train and fight digital fighters.',
    image: '/discover-dapps/images/dapps/cryptofighters.png',
    category: Categories.GAMES,
    dateAdded: '2019-04-11',
  },
  {
    name: 'Decentraland',
    url: 'https://market.decentraland.org/',
    description:
      'Decentraland is a virtual reality platform powered by the Ethereum blockchain.',
    image: '/discover-dapps/images/dapps/decentraland.png',
    category: Categories.GAMES,
    dateAdded: '2019-04-05',
  },
  {
    name: 'Dragonereum',
    url: 'https://dapp.dragonereum.io',
    description: 'Own and trade dragons, fight with other players.',
    image: '/discover-dapps/images/dapps/dragonereum.png',
    category: Categories.GAMES,
    dateAdded: '2019-04-05',
  },
  {
    name: 'Etherbots',
    url: 'https://etherbots.io/',
    description: 'Robot wars on the Ethereum Platform',
    image: '/discover-dapps/images/dapps/etherbots.png',
    category: Categories.GAMES,
    dateAdded: '2019-04-05',
  },
  {
    name: 'Etheremon',
    url: 'https://www.etheremon.com/',
    description: 'Decentralized World of Ether Monsters',
    image: '/discover-dapps/images/dapps/etheremon.png',
    category: Categories.GAMES,
    dateAdded: '2019-04-05',
  },
  {
    name: 'CryptoStrikers',
    url: 'https://www.cryptostrikers.com/',
    description: 'The Beautiful (card) Game',
    image: '/discover-dapps/images/dapps/cryptostrikers.png',
    category: Categories.GAMES,
    dateAdded: '2019-04-05',
  },
  // {
  //   name: 'FairHouse',
  //   url: 'https://fairhouse.io',
  //   description: 'Fair and transparent entertainment games.',
  //   image: '/discover-dapps/images/dapps/fairhouse.png',
  //   category: Categories.GAMES,
  //   dateAdded: '2019-04-11',
  // },
  {
    name: 'Cent',
    url: 'https://beta.cent.co/',
    description: 'Get wisdom, get money',
    image: '/discover-dapps/images/dapps/cent.png',
    category: Categories.SOCIAL_NETWORKS,
    dateAdded: '2019-04-05',
  },
  {
    name: 'Kickback',
    url: 'https://kickback.events/',
    description:
      'Event no shows? No problem. Kickback asks event attendees to put skin in the game with Ethereum.',
    image: '/discover-dapps/images/dapps/kickback.png',
    category: Categories.SOCIAL_NETWORKS,
    dateAdded: '2019-04-05',
  },
  {
    name: 'Peepeth',
    url: 'https://peepeth.com/',
    description: 'Blockchain-powered microblogging',
    image: '/discover-dapps/images/dapps/peepeth.png',
    category: Categories.SOCIAL_NETWORKS,
    dateAdded: '2019-04-05',
  },
  {
    name: 'livepeer.tv',
    url: 'http://livepeer.tv/',
    description: 'Decentralized video broadcasting',
    image: '/discover-dapps/images/dapps/livepeer.png',
    category: Categories.OTHER,
    dateAdded: '2019-04-05',
  },
  {
    name: 'Aragon',
    url: 'https://mainnet.aragon.org/',
    description: 'Build unstoppable organizations on Ethereum.',
    image: '/discover-dapps/images/dapps/aragon.png',
    category: Categories.UTILITIES,
    dateAdded: '2019-04-05',
  },
  {
    name: 'Compound Finance',
    url: 'https://app.compound.finance/',
    description: 'Decentralized Bank.',
    image: '/discover-dapps/images/dapps/compoundfinance.png',
    category: Categories.UTILITIES,
    dateAdded: '2019-04-11',
  },
  {
    name: 'InstaDApp',
    url: 'https://instadapp.io/',
    description: 'Decentralized Bank.',
    image: '/discover-dapps/images/dapps/instadapp.jpg',
    category: Categories.UTILITIES,
    dateAdded: '2019-04-11',
  },
  {
    name: 'Livepeer',
    url: 'https://explorer.livepeer.org/',
    description: 'Decentralized video broadcasting',
    image: '/discover-dapps/images/dapps/livepeer.png',
    category: Categories.UTILITIES,
    dateAdded: '2019-04-11',
  },
  {
    name: 'ETHLend',
    url: 'https://app.ethlend.io',
    description: 'Decentralized lending on Ethereum',
    image: '/discover-dapps/images/dapps/ethlend.png',
    category: Categories.UTILITIES,
    dateAdded: '2019-04-05',
  },
  {
    name: 'Civitas',
    url: 'https://communities.colu.com/',
    description: 'Blockchain-powered local communities',
    image: '/discover-dapps/images/dapps/civitas.png',
    category: Categories.UTILITIES,
    dateAdded: '2019-04-11',
  },
  {
    name: '3Box',
    url: 'https://3box.io/',
    description: 'Create and manage your Ethereum Profile.',
    image: '/discover-dapps/images/dapps/3Box.png',
    category: Categories.UTILITIES,
    dateAdded: '2019-04-11',
  },
  {
    name: 'Hexel',
    url: 'https://www.onhexel.com/',
    description: 'Create your own cryptocurrency',
    image: '/discover-dapps/images/dapps/hexel.png',
    category: Categories.UTILITIES,
    dateAdded: '2019-04-11',
  },
  {
    name: 'Smartz',
    url: 'https://smartz.io',
    description: 'Easy smart contract management',
    image: '/discover-dapps/images/dapps/smartz.png',
    category: Categories.UTILITIES,
    dateAdded: '2019-04-05',
  },
  {
    name: 'SNT Voting DApp',
    url: 'https://vote.status.im',
    description:
      'Let your SNT be heard! Vote on decisions exclusive to SNT holders, or create a poll of your own.',
    image: '/discover-dapps/images/dapps/snt-voting.png',
    category: Categories.UTILITIES,
    dateAdded: '2019-04-05',
  },
]

export default Dapps
