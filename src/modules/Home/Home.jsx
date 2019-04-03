import React from 'react'
import RecentlyAdded from '../RecentlyAdded'
import Categories from '../Categories'
import Footer from '../Footer'
import styles from './Home.module.scss'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.startLoadingAnimation = this.startLoadingAnimation.bind(this)
    this.state = { didMount: false }
  }

  componentDidMount() {
    setTimeout(this.startLoadingAnimation, 0)
  }

  startLoadingAnimation() {
    this.setState({ didMount: true })
  }

  render() {
    const { didMount } = this.state

    return (
      <div
        className={
          didMount ? [styles.fade, styles.loaded].join(' ') : styles.fade
        }
      >
        <Categories />
        <RecentlyAdded />
        <Footer />
      </div>
    )
  }
}

export default Home
