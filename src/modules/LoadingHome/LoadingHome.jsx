import React from 'react'
import ContentLoader from 'react-content-loader'
import styles from './LoadingHome.module.scss'

const MobileLoader = () => (
  <ContentLoader width={320} height={635}>
    <rect x="15" y="15" rx="5" ry="5" width="90" height="110" />
    <rect x="113" y="15" rx="5" ry="5" width="90" height="110" />
    <rect x="211" y="15" rx="5" ry="5" width="90" height="110" />

    <rect x="15" y="132" rx="5" ry="5" width="90" height="110" />
    <rect x="113" y="132" rx="5" ry="5" width="90" height="110" />
    <rect x="211" y="132" rx="5" ry="5" width="90" height="110" />

    <rect x="15" y="250" rx="5" ry="5" width="90" height="110" />

    <circle cx="35" cy="456" r="20" />
    <rect x="70" y="436" rx="5" ry="5" width="235" height="88" />

    <circle cx="35" cy="556" r="20" />
    <rect x="70" y="532" rx="5" ry="5" width="235" height="88" />
  </ContentLoader>
)

const DesktopLoader = () => (
  <ContentLoader width={320} height={635}>
    <rect x="15" y="15" rx="5" ry="5" width="90" height="110" />
  </ContentLoader>
)

const LoadingHome = () => (
  <>
    <div className={styles.mobile}>
      <MobileLoader />
    </div>
    <div className={styles.desktop}>
      <DesktopLoader />
    </div>
  </>
)

export default LoadingHome
