import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactImageFallback from 'react-image-fallback'
import styles from './Vote.module.scss'
import sntIcon from '../../common/assets/images/SNT.svg'
import CategoriesUtils from '../Categories/Categories.utils'
import Categories from '../../common/utils/categories'
import icon from '../../common/assets/images/icon.svg'
import Modal from '../../common/components/Modal'

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
    const { value } = e.target
    if (value !== '' && /^[1-9][0-9]*$/.test(value) === false) return
    if (parseInt(value, 10) > 1571296) return

    this.setState({ sntValue: value })
  }

  render() {
    const { isUpvote, sntValue } = this.state
    const { visible, onClickClose } = this.props

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
    const upvoteSNTcost = currentSNTamount + parseInt(sntValue, 10)
    const downvoteSNTcost = 3244

    return (
      <Modal
        visible={visible}
        onClickClose={onClickClose}
        windowClassName={styles.modalWindow}
        contentClassName={styles.modalContent}
      >
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
          <div className={styles.itemRow}>
            <span className={styles.item}>
              <img src={sntIcon} alt="SNT" width="24" height="24" />
              {currentSNTamount.toLocaleString()}
            </span>
            {isUpvote && upvoteSNTcost > currentSNTamount && (
              <span className={styles.greenBadge}>
                {`${upvoteSNTcost.toLocaleString()} ↑`}
              </span>
            )}
            {!isUpvote && downvoteSNTcost > 0 && (
              <span className={styles.redBadge}>
                {`${downvoteSNTcost.toLocaleString()} ↓`}
              </span>
            )}
          </div>
          <div className={styles.itemRow}>
            <span className={styles.item}>
              <img
                src={CategoriesUtils(dapp.category)}
                alt={getCategoryName(dapp.category)}
                width="24"
                height="24"
              />
              {`${getCategoryName(dapp.category)} №${categoryPosition}`}
            </span>
            {isUpvote && upvoteSNTcost > currentSNTamount && (
              <span className={styles.greenBadge}>
                {`№${categoryPosition - 1} ↑`}
              </span>
            )}
          </div>
        </div>
        {!isUpvote && (
          <div className={styles.inputArea}>
            <span>{downvoteSNTcost}</span>
          </div>
        )}
        {isUpvote && (
          <div className={`${styles.inputArea} ${styles.inputAreaBorder}`}>
            <input
              type="text"
              value={sntValue}
              onChange={this.handleChange}
              style={{ width: `${19 * sntValue.length}px` }}
            />
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
      </Modal>
    )
  }
}

Vote.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClickClose: PropTypes.func.isRequired,
}

export default Vote
