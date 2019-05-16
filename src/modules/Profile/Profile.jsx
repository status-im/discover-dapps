import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactImageFallback from 'react-image-fallback'
import Modal from '../../common/components/Modal'
import styles from './Profile.module.scss'
import icon from '../../common/assets/images/icon.svg'
import chat from '../../common/assets/images/chat.svg'
import { push } from 'connected-react-router'

const DesktopScreen = props => {
  return <Modal visible={props.visible}>{props.children}</Modal>
}

const MobileScreen = props => {
  return <>{props.children}</>
}

const ProfileContent = ({
  name,
  url,
  description,
  image,
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

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      screenSize: 0,
      visible: true,
      dapp: {},
    }
  }

  componentDidMount() {
    const { innerWidth } = window
    const { dapp_name } = this.props.match.params

    this.props.dapps.find(dapp => {
      if (dapp.name.toLowerCase() === dapp_name.toLowerCase()) {
        if (innerWidth >= 1024) {
          this.props.openModal(dapp.name)
        }
        this.setState({
          screenSize: innerWidth,
          visible: true,
          dapp,
        })
      }
    })
  }

  render() {
    return this.state.screenSize >= 1024 ? (
      <DesktopScreen visible={this.state.visible}>
        <ProfileContent {...this.state.dapp} />
      </DesktopScreen>
    ) : (
      <MobileScreen {...this.props}>
        <ProfileContent {...this.state.dapp} />
      </MobileScreen>
    )
  }
}
Profile.propTypes = {
  visible: PropTypes.bool,
  dapp: PropTypes.object,
}

Profile.defaultProps = {
  // visible: false,
}

export default Profile
