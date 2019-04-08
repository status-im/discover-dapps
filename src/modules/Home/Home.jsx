import React from 'react'
import RecentlyAdded from '../RecentlyAdded'
import Categories from '../Categories'
import Footer from '../Footer'
import LoadingHome from '../LoadingHome'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.startLoadingAnimation = this.startLoadingAnimation.bind(this)
    this.state = { loaded: false }
  }

  componentDidMount() {
    // TODO: This is just a demo implementation. The real one would be using a flag in redux
    // that changes when the data has loaded from the smart contract/s
    setTimeout(this.startLoadingAnimation, 1000)
  }

  startLoadingAnimation() {
    this.setState({ loaded: true })
  }

  render() {
    const { loaded } = this.state

    return (
      <>
        {loaded && (
          <>
            <Categories />
            <RecentlyAdded />
            <Footer />
          </>
        )}

        {!loaded && <LoadingHome />}
      </>
    )
  }
}

export default Home
