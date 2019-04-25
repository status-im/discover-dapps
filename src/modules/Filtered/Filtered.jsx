import React from 'react'
import PropTypes from 'prop-types'
import { DappListModel } from '../../common/utils/models'
import CategorySelector from '../CategorySelector'
import DappList from '../../common/components/DappList'
import styles from './Filtered.module.scss'

const Filtered = props => {
  const { dapps, match } = props
  const result =
    match !== undefined
      ? dapps.filter(dapp => dapp.category === match.params.id)
      : dapps

  return (
    <>
      <CategorySelector
        category={match !== undefined ? match.params.id : undefined}
      />
      <div className={styles.list}>
        <DappList dapps={result} />
      </div>
    </>
  )
}

Filtered.defaultProps = {
  match: undefined,
}

Filtered.propTypes = {
  dapps: DappListModel.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }),
}

export default Filtered
