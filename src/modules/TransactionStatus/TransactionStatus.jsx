import React from 'react'
import PropTypes from 'prop-types'
import ReactImageFallback from 'react-image-fallback'
import styles from './TransactionStatus.module.scss'
import icon from '../../common/assets/images/icon.svg'
import loadingSpinner from '../../common/assets/images/loading-spinner.svg'

class TransactionStatus extends React.Component {
  componentDidMount() {
    this.checkPublished()
  }

  componentDidUpdate() {
    this.checkPublished()
  }

  checkPublished() {
    const { published, hide } = this.props
    if (published) {
      setTimeout(() => {
        hide()
      }, 1000)
    }
  }

  render() {
    const { dappName, dappUrl, published, progress } = this.props

    return (
      <div className={`${styles.cnt} ${dappName !== '' ? styles.active : ''}`}>
        <ReactImageFallback
          className={styles.image}
          src={dappUrl}
          fallbackImage={icon}
          alt="App icon"
        />
        <div className={styles.data}>
          <div className={styles.name}>{dappName}</div>
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
        </div>
      </div>
    )
  }
}

TransactionStatus.defaultProps = {
  dapp: null,
}

TransactionStatus.propTypes = {
  dappName: PropTypes.string.isRequired,
  dappUrl: PropTypes.string.isRequired,
  progress: PropTypes.bool.isRequired,
  published: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
}

export default TransactionStatus
