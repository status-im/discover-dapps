import React from 'react'
import styles from './Footer.module.scss'
import icon from '../../common/assets/images/icon.svg'

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.footerItem}>
      <img src={icon} />
      <div>
        <h2>Join the DApp community chat</h2>
        <p>
          Status is a community of people all over the world connected by a set
          of values and principles.
        </p>
      </div>
    </div>
    <div className={styles.footerItem}>
      <img src={icon} />
      <div>
        <h2>Submit a DApp</h2>
        <p>
          Status is a community of people all over the world connected by a set
          of values and principles.
        </p>
      </div>
    </div>
    <div className={styles.footerItem}>
      <img src={icon} />
      <div>
        <h2>Support</h2>
        <p>
          Status is a community of people all over the world connected by a set
          of values and principles.
        </p>
      </div>
    </div>
  </div>
)

export default Footer
