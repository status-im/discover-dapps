import React from 'react'
import PropTypes from 'prop-types'
import styles from './Submit.module.scss'
import Modal from '../../common/components/Modal'
import CategorySelector from '../CategorySelector/CategorySelector.picker'

class Submit extends React.Component {
  constructor(props) {
    super(props)
    this.onInputName = this.onInputName.bind(this)
    this.onInputDesc = this.onInputDesc.bind(this)
    this.onInputUrl = this.onInputUrl.bind(this)
  }

  onSelectCategory(category) {
    this.setState({ category: category })
  }

  onInputName(e) {
    const { onInputName } = this.props
    onInputName(e.target.value)
  }

  onInputDesc(e) {
    const { onInputDesc } = this.props
    onInputDesc(e.target.value)
  }

  onInputUrl(e) {
    const { onInputUrl } = this.props
    onInputUrl(e.target.value)
  }

  render() {
    const { visible, onClickClose, name, desc, url, img, category } = this.props

    return (
      <Modal
        visible={visible && window.location.hash === '#submit'}
        onClickClose={onClickClose}
        windowClassName={styles.modalWindow}
      >
        <div className={styles.title}>Submit a Ðapp</div>
        <div className={styles.cnt}>
          <div>
            <div className={styles.block}>
              <div className={styles.labelRow}>
                <span>Name of your Ðapp</span>
              </div>
              <input
                className={styles.input}
                placeholder="Name"
                value={name}
                onChange={this.onInputName}
              />
            </div>
            <div className={styles.block}>
              <div className={styles.labelRow}>
                <span>A short description</span>
                <span>{desc.length}/140</span>
              </div>
              <textarea
                className={styles.input}
                placeholder="Max 140 characters"
                value={desc}
                onChange={this.onInputDesc}
              />
            </div>
            <div className={styles.block}>
              <div className={styles.labelRow}>
                <span>URL</span>
              </div>
              <input
                className={styles.input}
                placeholder="https://your.dapp.cool"
                value={url}
                onChange={this.onInputUrl}
              />
            </div>
            <div className={styles.block}>
              <div className={styles.labelRow}>
                <span>Upload the logo or icon of your Ðapp</span>
              </div>
              <div className={styles.imgCnt}>
                <span>Choose image</span>
                <div
                  className={styles.imgHolder}
                  style={{ backgroundImage: img }}
                />
              </div>
              <div className={styles.imgInfo}>
                The image should be a square 1:1 ratio JPG or PNG file, minimum
                size is 160 × 160 pixels. The image will be placed in a circle
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.labelRow}>
                <span>Category</span>
              </div>
              <CategorySelector
                category={category === '' ? null : category}
                className={`${styles.categorySelector} ${
                  category === '' ? styles.categorySelectorEmpty : ''
                }`}
              />
            </div>
            <div className={`${styles.block} ${styles.blockSubmit}`}>
              <div className={styles.terms}>
                By continuing you agree to our{' '}
                <a href="#">Terms and Conditions.</a>{' '}
              </div>
              <button
                className={styles.submitButton}
                type="submit"
                disabled={true}
              >
                Continue
              </button>
            </div>
          </div>
          <div className={styles.imgResizer} />
        </div>
      </Modal>
    )
  }
}

Submit.propTypes = {
  visible: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onClickClose: PropTypes.func.isRequired,
  onInputName: PropTypes.func.isRequired,
  onInputDesc: PropTypes.func.isRequired,
  onInputUrl: PropTypes.func.isRequired,
}

export default Submit
