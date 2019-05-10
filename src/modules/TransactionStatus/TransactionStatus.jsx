import React from 'react'
import PropTypes from 'prop-types'
import ReactImageFallback from 'react-image-fallback'
import styles from './TransactionStatus.module.scss'
import icon from '../../common/assets/images/icon.svg'
import loadingSpinner from '../../common/assets/images/loading-spinner.svg'

class TransactionStatus extends React.Component {
  componentDidMount() {
    // this.checkPublished()
    this.checkTransactionHash()
  }

  // componentDidUpdate() {
  //   this.checkPublished()
  // }

  // checkPublished() {
  //   const { published, hide } = this.props
  //   if (published) {
  //     setTimeout(() => {
  //       hide()
  //     }, 1000)
  //   }
  // }

  checkTransactionHash() {
    const { dappTransactionHash, statusCheck } = this.props
    if (dappTransactionHash === '') return
    statusCheck(dappTransactionHash)
  }

  render() {
    const { dappName, dappImg, published, progress, failed, hide } = this.props

    return (
      <div className={`${styles.cnt} ${dappName !== '' ? styles.active : ''}`}>
        <ReactImageFallback
          className={styles.image}
          src={dappImg}
          fallbackImage={icon}
          alt="App icon"
        />
        <div className={styles.data}>
          <div className={styles.name}>
            <div className={styles.nameItself}>{dappName}</div>
            {!progress && (
              <div className={styles.close} onClick={hide}>
                +
              </div>
            )}
          </div>
          <div className={styles.info}>
            Status is an open source mobile DApp browser and messenger build for
            #Etherium
          </div>
          {published && <div className={styles.status}>✓ Published</div>}
          {progress && (
            <div className={styles.status}>
              <img src={loadingSpinner} />
              Waiting for confirmation of the network...
            </div>
          )}
          {failed && (
            <div className={`${styles.status} ${styles.red}`}>
              Transaction failed. Please submit your dapp again.
            </div>
          )}
        </div>
      </div>
    )
  }
}

TransactionStatus.propTypes = {
  dappTransactionHash: PropTypes.string.isRequired,
  dappName: PropTypes.string.isRequired,
  dappImg: PropTypes.string.isRequired,
  progress: PropTypes.bool.isRequired,
  published: PropTypes.bool.isRequired,
  failed: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  statusCheck: PropTypes.func.isRequired,
}

export default TransactionStatus
