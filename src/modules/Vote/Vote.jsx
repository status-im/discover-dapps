import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import ReactImageFallback from 'react-image-fallback'
import styles from './Vote.module.scss'
import sntIcon from '../../common/assets/images/SNT.svg'
import CategoriesUtils from '../Categories/Categories.utils'
import Categories from '../../common/utils/categories'
import icon from '../../common/assets/images/icon.svg'

const getCategoryName = category =>
  Categories.find(x => x.key === category).value

class Vote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isUpvote: true,
      sntValue: 0,
    }
    this.onClickTab = this.onClickTab.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  onClickTab(showUpvote) {
    return () => {
      this.setState({ isUpvote: showUpvote })
    }
  }

  handleChange(e) {
    this.setState({ sntValue: e.target.value })
  }

  render() {
    const { isUpvote, sntValue } = this.state

    // TODO: extract these to props

    const dapp = {
      name: 'Kyber',
      url: 'https://web3.kyber.network',
      description:
        'On-chain, instant and liquid platform for exchange and payment service',
      image: '/images/dapps/kyber.png',
      category: 'EXCHANGES',
      dateAdded: null,
    }

    const currentSNTamount = 23456
    const categoryPosition = 2
    const upvoteSNTcost = 12422
    const downvoteSNTcost = 3244

    return (
      <div>
        <div className={styles.tabs}>
          <button
            className={isUpvote ? styles.active : ''}
            type="button"
            onClick={this.onClickTab(true)}
          >
            ↑ UPVOTE
          </button>
          <button
            className={!isUpvote ? styles.active : ''}
            type="button"
            onClick={this.onClickTab(false)}
          >
            ↓ DOWNVOTE
          </button>
        </div>
        <div className={styles.dapp}>
          <ReactImageFallback
            className={styles.image}
            src={dapp.image}
            fallbackImage={icon}
            alt="App icon"
            width={24}
            height={24}
          />
          {dapp.name}
        </div>
        <div className={styles.items}>
          {isUpvote && upvoteSNTcost > 0 && (
            <span className={styles.greenBadge}>
              {`${upvoteSNTcost.toLocaleString()} ↑`}
            </span>
          )}
          {!isUpvote && downvoteSNTcost > 0 && (
            <span className={styles.redBadge}>
              {`${downvoteSNTcost.toLocaleString()} ↓`}
            </span>
          )}
          <span className={styles.item}>
            <img src={sntIcon} alt="SNT" width="24" height="24" />
            {currentSNTamount.toLocaleString()}
          </span>
          {isUpvote && upvoteSNTcost > 0 && (
            <span className={styles.greenBadge}>
              {`№${categoryPosition - 1} ↑`}
            </span>
          )}
          <span className={styles.item}>
            <img
              src={CategoriesUtils(dapp.category)}
              alt={getCategoryName(dapp.category)}
              width="24"
              height="24"
            />
            {`${getCategoryName(dapp.category)} №${categoryPosition}`}
          </span>
        </div>
        {!isUpvote && (
          <div className={styles.inputArea}>
            <span>{downvoteSNTcost}</span>
          </div>
        )}
        {isUpvote && (
          <div className={styles.inputArea}>
            <input type="text" value={sntValue} onChange={this.handleChange} />
          </div>
        )}

        <div className={styles.footer}>
          {isUpvote && (
            <p className={styles.disclaimer}>
              SNT you spend to upvote is locked in the contract and contributes
              directly to {dapp.name}'s ranking.{' '}
              <a href="#" target="_blank">
                Learn more↗
              </a>
            </p>
          )}
          {!isUpvote && (
            <p className={styles.disclaimer}>
              SNT you spend to downvote goes directly back to {dapp.name}.
              Downvoting moves their DApp down by 1% of the current ranking. The
              cost is fixed by our unique bonded curve.{' '}
              <a href="#" target="_blank">
                Learn more↗
              </a>
            </p>
          )}
          <button type="submit" disabled={!sntValue}>
            {isUpvote ? 'Upvote' : 'Downvote'}
          </button>
        </div>
      </div>
    )
  }
}

Vote.propTypes = {}

export default Vote
