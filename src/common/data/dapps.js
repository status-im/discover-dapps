import * as Categories from './categories'

const Dapps = [
  {
    metadata: {
      name: 'Airswap',
      url: 'https://instant.airswap.io/',
      image: '/images/dapps/airswap.png',
      description: 'Meet the future of trading',
      category: Categories.EXCHANGES,
      dateAdded: '2019-05-05',
      categoryPosition: 13,
    },
    rate: 45,
  },
  {
    metadata: {
      name: 'Bancor',
      url: 'https://www.bancor.network/',
      image: '/images/dapps/bancor.png',
      description: 'Bancor is a decentralized liquidity network',
      category: Categories.EXCHANGES,
      dateAdded: '2019-03-05',
      categoryPosition: 12,
    },
    rate: 345,
  },
  {
    metadata: {
      name: 'Kyber',
      url: 'https://web3.kyber.network',
      description:
        'On-chain, instant and liquid platform for exchange and payment',
      image: '/images/dapps/kyber.png',
      category: Categories.EXCHANGES,
      dateAdded: '2019-04-05',
      categoryPosition: 11,
    },
    rate: 2345,
  },
  {
    metadata: {
      name: 'Uniswap',
      url: 'https://uniswap.exchange/',
      description:
        'Seamlessly exchange ERC20 tokens, or use a formalized model to pool liquidity reserves',
      image: '/images/dapps/uniswap.png',
      category: Categories.EXCHANGES,
      dateAdded: '2019-04-23',
      categoryPosition: 10,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'DAI by MakerDao',
      url: 'https://dai.makerdao.com',
      description: 'Stability for the blockchain',
      image: '/images/dapps/dai.png',
      category: Categories.EXCHANGES,
      dateAdded: '2019-04-05',
      categoryPosition: 9,
    },
    rate: 22345,
  },
  {
    metadata: {
      name: 'Augur',
      url: 'https://augur.net',
      description:
        'A prediction market protocol owned and operated by the people that use it',
      image: '/images/dapps/augur.svg',
      category: Categories.EXCHANGES,
      dateAdded: '2019-04-11',
      categoryPosition: 8,
    },
    rate: 32345,
  },
  {
    metadata: {
      name: 'LocalEthereum',
      url: 'https://localethereum.com/',
      description: 'The smartest way to buy and sell Ether',
      image: '/images/dapps/local-ethereum.png',
      category: Categories.EXCHANGES,
      dateAdded: '2019-04-05',
      categoryPosition: 7,
    },
    rate: 42345,
  },
  {
    metadata: {
      name: 'Eth2phone',
      url: 'https://eth2.io',
      description: 'Send Ether by phone number',
      image: '/images/dapps/eth2phone.png',
      category: Categories.EXCHANGES,
      dateAdded: '2019-04-05',
      categoryPosition: 6,
    },
    rate: 52345,
  },
  {
    metadata: {
      name: 'DDEX',
      url: 'https://ddex.io/',
      description:
        'Instant, real-time order matching with secure on-chain settlement',
      image: '/images/dapps/ddex.png',
      category: Categories.EXCHANGES,
      dateAdded: '2019-04-05',
      categoryPosition: 5,
    },
    rate: 62345,
  },
  {
    metadata: {
      name: 'Nuo',
      url: 'https://app.nuo.network/lend/',
      description:
        'The non-custodial way to lend, borrow or margin trade cryptocurrency',
      image: '/images/dapps/nuo.png',
      category: Categories.EXCHANGES,
      dateAdded: '2019-04-05',
      categoryPosition: 4,
    },
    rate: 72345,
  },
  {
    metadata: {
      name: 'EasyTrade',
      url: 'https://easytrade.io',
      description: 'One exchange for every token',
      image: '/images/dapps/easytrade.png',
      category: Categories.EXCHANGES,
      dateAdded: '2019-04-05',
      categoryPosition: 3,
    },
    rate: 82345,
  },
  {
    metadata: {
      name: 'slow.trade',
      url: 'https://slow.trade/',
      description:
        'Trade fairly priced crypto assets on the first platform built with the DutchX protocol',
      image: '/images/dapps/slowtrade.png',
      category: Categories.EXCHANGES,
      dateAdded: '2019-04-05',
      categoryPosition: 2,
    },
    rate: 92345,
  },
  {
    metadata: {
      name: 'Expo Trading',
      url: 'https://expotrading.com/trade/',
      description: 'The simplest way to margin trade cryptocurrency',
      image: '/images/dapps/expotrading.png',
      category: Categories.EXCHANGES,
      dateAdded: '2019-04-11',
      categoryPosition: 1,
    },
    rate: 102345,
  },
  {
    metadata: {
      name: 'Bidali',
      url: 'https://commerce.bidali.com/dapp',
      description: 'Buy from top brands with crypto',
      image: '/images/dapps/bidali.png',
      category: Categories.MARKETPLACES,
      dateAdded: '2019-05-01',
    },
    rate: 10246,
  },
  {
    metadata: {
      name: 'blockimmo',
      url: 'https://blockimmo.ch',
      description:
        'blockimmo is a blockchain powered, regulated platform enabling shared property investments and ownership',
      image: '/images/dapps/blockimmo.png',
      category: Categories.MARKETPLACES,
      dateAdded: '2019-04-05',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'CryptoCribs',
      url: 'https://cryptocribs.com',
      description: 'Travel the globe. Pay in crypto',
      image: '/images/dapps/cryptocribs.png',
      category: Categories.MARKETPLACES,
      dateAdded: '2019-04-05',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'Ethlance',
      url: 'https://ethlance.com',
      description:
        'The future of work is now. Hire people or work yourself in return for ETH',
      image: '/images/dapps/ethlance.png',
      category: Categories.MARKETPLACES,
      dateAdded: '2019-04-05',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'OpenSea',
      url: 'https://opensea.io',
      description: 'The largest decentralized marketplace for cryptogoods',
      image: '/images/dapps/opensea.png',
      category: Categories.MARKETPLACES,
      dateAdded: '2019-04-05',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'KnownOrigin',
      url: 'https://dapp.knownorigin.io/gallery',
      description: 'Discover, buy and collect digital artwork',
      image: '/images/dapps/knownorigin.png',
      category: Categories.MARKETPLACES,
      dateAdded: '2019-04-11',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'dBay',
      url: 'https://dbay.ai',
      description: 'Buy from all your favorite DApps in one place',
      image: '/images/dapps/dBay.png',
      category: Categories.MARKETPLACES,
      dateAdded: '2019-04-23',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'Name Bazaar',
      url: 'https://namebazaar.io',
      description: 'ENS name marketplace',
      image: '/images/dapps/name-bazaar.png',
      category: Categories.MARKETPLACES,
      dateAdded: '2019-04-05',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'The Bounties Network',
      url: 'https://bounties.network/',
      description: 'Bounties on any task, paid in any token',
      image: '/images/dapps/bounties-network.png',
      category: Categories.MARKETPLACES,
      dateAdded: '2019-04-05',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'Emoon',
      url: 'https://www.emoon.io/',
      description:
        'A decentralized marketplace for buying & selling crypto assets',
      image: '/images/dapps/emoon.png',
      category: Categories.MARKETPLACES,
      dateAdded: '2019-04-05',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'Astro Ledger',
      url: 'https://www.astroledger.org/#/onSale',
      description: 'Funding space grants with blockchain star naming',
      image: '/images/dapps/astroledger.svg',
      category: Categories.MARKETPLACES,
      dateAdded: '2019-04-11',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'SuperRare',
      url: 'https://superrare.co/market',
      description:
        'Buy, sell and collect unique digital creations by artists around the world',
      image: '/images/dapps/superrare.png',
      category: Categories.MARKETPLACES,
      dateAdded: '2019-04-05',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'CryptoCare',
      url: 'https://cryptocare.tech',
      description:
        'Give your Ether some heart! Collectibles that make the world a better place',
      image: '/images/dapps/cryptocare.jpg',
      category: Categories.COLLECTIBLES,
      dateAdded: '2019-04-11',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'CryptoKitties',
      url: 'https://www.cryptokitties.co',
      description: 'Collect and breed adorable digital cats',
      image: '/images/dapps/cryptokitties.png',
      category: Categories.COLLECTIBLES,
      dateAdded: '2019-04-05',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'Cryptographics',
      url: 'https://cryptographics.app/',
      description:
        'A digital art hub for creation, trading, and collecting unique items',
      image: '/images/dapps/cryptographics.png',
      category: Categories.COLLECTIBLES,
      dateAdded: '2019-04-05',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'CryptoPunks',
      url: 'https://www.larvalabs.com/cryptopunks',
      description: '10,000 unique collectible punks',
      image: '/images/dapps/cryptopunks.png',
      category: Categories.COLLECTIBLES,
      dateAdded: '2019-04-05',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'Crypto Takeovers',
      url: 'https://cryptotakeovers.com/',
      description: 'Predict and conquer the world. Make a crypto fortune',
      image: '/images/dapps/cryptotakeovers.png',
      category: Categories.GAMES,
      dateAdded: '2019-04-05',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'CryptoFighters',
      url: 'https://cryptofighters.io',
      description: 'Collect train and fight digital fighters',
      image: '/images/dapps/cryptofighters.png',
      category: Categories.GAMES,
      dateAdded: '2019-04-11',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'Decentraland',
      url: 'https://market.decentraland.org/',
      description:
        'A virtual reality platform powered by the Ethereum blockchain',
      image: '/images/dapps/decentraland.png',
      category: Categories.GAMES,
      dateAdded: '2019-04-05',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'Dragonereum',
      url: 'https://dapp.dragonereum.io',
      description: 'Own and trade dragons, fight with other players',
      image: '/images/dapps/dragonereum.png',
      category: Categories.GAMES,
      dateAdded: '2019-04-05',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'Etherbots',
      url: 'https://etherbots.io/',
      description: 'Robot wars on Ethereum',
      image: '/images/dapps/etherbots.png',
      category: Categories.GAMES,
      dateAdded: '2019-04-05',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'Etheremon',
      url: 'https://www.etheremon.com/',
      description: 'Decentralized World of Ether Monsters',
      image: '/images/dapps/etheremon.png',
      category: Categories.GAMES,
      dateAdded: '2019-04-05',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'CryptoStrikers',
      url: 'https://www.cryptostrikers.com/',
      description: 'The Beautiful (card) Game',
      image: '/images/dapps/cryptostrikers.png',
      category: Categories.GAMES,
      dateAdded: '2019-04-05',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  // {
  // metadata: {
  //   name: 'FairHouse',
  //   url: 'https://fairhouse.io',
  //   description: 'Fair and transparent entertainment games.',
  //   image: '/images/dapps/fairhouse.png',
  //   category: Categories.GAMES,
  //   dateAdded: '2019-04-11',
  //   categoryPosition: 2,
  // },
  //   rate: 12345,
  // },
  {
    metadata: {
      name: 'Cent',
      url: 'https://beta.cent.co/',
      description: 'Get wisdom, get money',
      image: '/images/dapps/cent.png',
      category: Categories.SOCIAL_NETWORKS,
      dateAdded: '2019-04-05',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'Kickback',
      url: 'https://kickback.events/',
      description:
        'Event no shows? No problem. Kickback asks event attendees to put skin in the game with Ethereum',
      image: '/images/dapps/kickback.png',
      category: Categories.SOCIAL_NETWORKS,
      dateAdded: '2019-04-05',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'Peepeth',
      url: 'https://peepeth.com/',
      description: 'Blockchain-powered microblogging',
      image: '/images/dapps/peepeth.png',
      category: Categories.SOCIAL_NETWORKS,
      dateAdded: '2019-04-05',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'livepeer.tv',
      url: 'http://livepeer.tv/',
      description: 'Decentralized video broadcasting',
      image: '/images/dapps/livepeer.png',
      category: Categories.OTHER,
      dateAdded: '2019-04-05',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'Aragon',
      url: 'https://mainnet.aragon.org/',
      description: 'Build unstoppable organizations on Ethereum',
      image: '/images/dapps/aragon.png',
      category: Categories.UTILITIES,
      dateAdded: '2019-04-05',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'Compound Finance',
      url: 'https://app.compound.finance/',
      description:
        'An open-source protocol for algorithmic, efficient Money Markets on Ethereum',
      image: '/images/dapps/compoundfinance.png',
      category: Categories.UTILITIES,
      dateAdded: '2019-04-11',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'InstaDApp',
      url: 'https://instadapp.io/',
      description: 'Decentralized Banking',
      image: '/images/dapps/instadapp.jpg',
      category: Categories.UTILITIES,
      dateAdded: '2019-04-11',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'Livepeer',
      url: 'https://explorer.livepeer.org/',
      description: 'Decentralized video broadcasting',
      image: '/images/dapps/livepeer.png',
      category: Categories.UTILITIES,
      dateAdded: '2019-04-11',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'ETHLend',
      url: 'https://app.ethlend.io',
      description: 'Decentralized lending on Ethereum',
      image: '/images/dapps/ethlend.png',
      category: Categories.UTILITIES,
      dateAdded: '2019-04-05',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'Civitas',
      url: 'https://communities.colu.com/',
      description: 'Blockchain-powered local communities',
      image: '/images/dapps/civitas.png',
      category: Categories.UTILITIES,
      dateAdded: '2019-04-11',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: '3Box',
      url: 'https://3box.io/',
      description: 'Create and manage your Ethereum Profile',
      image: '/images/dapps/3Box.png',
      category: Categories.UTILITIES,
      dateAdded: '2019-04-11',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'Hexel',
      url: 'https://www.onhexel.com/',
      description: 'Create your own cryptocurrency',
      image: '/images/dapps/hexel.png',
      category: Categories.UTILITIES,
      dateAdded: '2019-04-11',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'Smartz',
      url: 'https://smartz.io',
      description: 'Easy smart contract management',
      image: '/images/dapps/smartz.png',
      category: Categories.UTILITIES,
      dateAdded: '2019-04-05',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'SNT Voting DApp',
      url: 'https://vote.status.im',
      description:
        'Let your SNT be heard! Vote on decisions exclusive to SNT holders, or create a poll of your own.',
      image: '/images/dapps/snt-voting.png',
      category: Categories.UTILITIES,
      dateAdded: '2019-04-05',
      categoryPosition: 2,
    },
    rate: 12345,
  },
  {
    metadata: {
      name: 'BTU Hotel',
      url: 'https://btu-hotel.com',
      description:
        'Two million hotels available for booking at the best prices and with reward in crypto',
      image: '/images/dapps/btu-hotel.png',
      category: Categories.MARKETPLACES,
      dateAdded: '2019-05-07',
      categoryPosition: 2,
    },
    rate: 12345,
  }
]

export default Dapps
