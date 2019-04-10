import React from 'react'
import PropTypes from 'prop-types'
import styles from './Vote.module.scss'

const Vote = props => {
  //const { select } = props
  return (
    <div>
      <div className={styles.tabs}>
        <button className={styles.active} type="button">
          ↑ UPVOTE
        </button>
        <button type="button">↓ DOWNVOTE</button>
      </div>
      Kyber SNT 12345 12345 Exchange №2 №1 5000 SNT
      <div className={styles.footer}>
        <p className={styles.disclaimer}>
          SNT you spend to upvote is locked in the contract and contributes
          directly to Kyber's ranking.{' '}
          <a href="#" target="_blank">
            Learn more↗
          </a>
        </p>
        <button type="submit">Upvote</button>
      </div>
    </div>
  )
}

Vote.propTypes = {}

export default Vote
