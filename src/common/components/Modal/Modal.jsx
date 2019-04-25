import React from 'react'
import PropTypes from 'prop-types'
import styles from './Modal.module.scss'

const Modal = props => {
  const { visible, children, modalClassName, contentClassName } = props

  return (
    <div
      className={`${modalClassName} ${styles.wrapper} ${
        visible ? styles.active : ''
      }`}
    >
      <div className={styles.window}>
        <div className={styles.close}>+</div>
        <div className={contentClassName}>{visible && children}</div>
      </div>
    </div>
  )
}

Modal.defaultProps = {
  modalClassName: '',
  contentClassName: '',
}

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  modalClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Modal
