import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactImageFallback from 'react-image-fallback'
import Modal from '../../common/components/Modal'
import styles from './Profile.module.scss'
import icon from '../../common/assets/images/icon.svg'
import chat from '../../common/assets/images/chat.svg'
import { Redirect } from 'react-router-dom'

const DesktopScreen = props => {
  return <Modal visible={props.visible}>{props.children}</Modal>
}

const MobileScreen = props => {
  return (
    <>
      {props.router.location.state &&
      props.router.location.state.name === props.profile.dapp.name ? (
        props.children
      ) : (
        <Redirect to={'/'} />
      )}
    </>
  )
}

const ProfileContent = ({
  name,
  url,
  description,
  image,
  isRanked,
  position,
  category,
}) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.banner}>
          <ReactImageFallback
            className={styles.image}
            src={image}
            fallbackImage={icon}
            alt="App icon"
          />
        </div>
        <div className={styles.information}>
          <h4 className={styles.header}>{name}</h4>
          <span className={styles.category}>{category}</span>
          <a href="#" target="_blank" className={styles.button}>
            Open
          </a>
        </div>
        <div className={styles.description}>
          <span className={styles.heading}>Description</span>
          <p>{description}</p>
        </div>
        <div className={styles.chat}>
          <ReactImageFallback
            className={styles.chat_image}
            src={image}
            fallbackImage={icon}
            alt="App icon"
          />
          <img src={chat} className={styles.chat_icon} alt="Chat" />
          <a
            href="#"
            target="_blank"
            className={styles.chat_link}
          >{`Open ${name} chat`}</a>
        </div>
        <div className={styles.url}>
          <span className={styles.heading}>URL</span>
          <p>
            <a href={url}>
              {url}
              &nbsp;&rarr;
            </a>
          </p>
        </div>
        <div className={styles.ranking}>
          <span className={styles.heading}>Ranking</span>
          <div className={styles.rank}>
            <div className={styles.rank_position_1}>
              <span className={styles.rank_position_span}>{position}</span>
            </div>
            <span className={styles.rank_position_text}>
              <span>№</span>
              {position} in {category}
            </span>
          </div>
          <div className={styles.rank}>
            <span className={styles.rank_position_2}>
              <span className={styles.rank_position_span}>{position}</span>
            </span>
            <span className={styles.rank_position_text}>
              <span>№</span>
              {position} in highest ranked DApps
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

const Profile = props => {
  const { innerWidth } = window
  return innerWidth >= 1024 ? (
    <DesktopScreen {...props.profile}>
      <ProfileContent {...props.profile.dapp} />
    </DesktopScreen>
  ) : (
    <MobileScreen {...props}>
      <ProfileContent {...props.profile.dapp} />
    </MobileScreen>
  )
}

Profile.propTypes = {
  visible: PropTypes.bool.isRequired,
  dapp: PropTypes.object,
}

Profile.defaultProps = {
  visible: false,
}

export default Profile
