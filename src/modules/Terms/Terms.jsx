import React from 'react'
import styles from './Terms.module.scss'

const DEFAULT_HEIGHT = '108px'

class Terms extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      termsAndConditionsHeight: DEFAULT_HEIGHT,
      responsibilitiesHeight: DEFAULT_HEIGHT,
    }
    this.nodes = {
      termsAndCoditions: React.createRef(),
      responsibilities: React.createRef(),
    }
    this.onReadMoreTermsAndConditions = this.onReadMore.bind(
      this,
      this.nodes.termsAndCoditions,
      'termsAndConditionsHeight',
    )
    this.onReadMoreResponsibilities = this.onReadMore.bind(
      this,
      this.nodes.responsibilities,
      'responsibilitiesHeight',
    )
  }

  onReadMore(ref, propName) {
    const state = {}
    state[propName] = `${ref.current.offsetHeight + 16}px`

    this.setState(state, () => {
      setTimeout(() => {
        state[propName] = 'none'
        this.setState(state)
      }, 400)
    })
  }

  render() {
    const { termsAndConditionsHeight, responsibilitiesHeight } = this.state

    return (
      <div className={styles.cnt}>
        <div className={styles.title}>Terms and conditions</div>
        <div className={styles.frame}>
          <div className={styles.frameTitle}>Terms and conditions</div>
          <div className={styles.frameImportant}>
            You must be over 13, agree that using our service is legal in your
            jurisdiction, and that you won't do anything illegal with what we
            provide.
            <br />
            <br />
            We are not lawyers or financial advisors, and you use this software
            at your own risk.
          </div>

          <div
            className={styles.frameContent}
            style={{ maxHeight: termsAndConditionsHeight }}
          >
            <div ref={this.nodes.termsAndCoditions}>
              {'lorem ipsum '.repeat(30)}
            </div>
            {termsAndConditionsHeight === DEFAULT_HEIGHT && (
              <div className={styles.readMoreCnt}>
                <div
                  className={styles.readMore}
                  onClick={this.onReadMoreTermsAndConditions}
                >
                  Read more
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.frame}>
          <div className={styles.frameTitle}>Terms and conditions</div>
          <div className={styles.frameImportant}>
            You must be over 13, agree that using our service is legal in your
            jurisdiction, and that you won't do anything illegal with what we
            provide.
            <br />
            <br />
            We are not lawyers or financial advisors, and you use this software
            at your own risk.
          </div>

          <div
            className={styles.frameContent}
            style={{ maxHeight: responsibilitiesHeight }}
          >
            <div ref={this.nodes.responsibilities}>
              {'lorem ipsum '.repeat(30)}
            </div>
            {responsibilitiesHeight === DEFAULT_HEIGHT && (
              <div className={styles.readMoreCnt}>
                <div
                  className={styles.readMore}
                  onClick={this.onReadMoreResponsibilities}
                >
                  Read more
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Terms
