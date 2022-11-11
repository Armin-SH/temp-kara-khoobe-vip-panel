import React, {useEffect, useRef} from 'react'
import {InfiniteScrollProps} from './infinite-scroll.props'
import {Div, LoadingIndicator} from '@elements'
import styles from './infinite-scroll.module.css'
import {useIntersection} from '@hooks'

const InfiniteScroll = (props: InfiniteScrollProps) => {

  const {hasMore, next, children, loading, className, reverse} = props;
  const ref = useRef<HTMLDivElement>(null)
  const inViewPort = useIntersection(ref, '0px')

  useEffect(() => {
    if (inViewPort && hasMore) {
      next()
    }
  }, [hasMore, inViewPort])

  return (
    <Div className={styles.container} mobile={reverse ? 'column-reverse' : 'column'}>
      {children}
      <Div ref={ref}/>
      {loading ? (
        <LoadingIndicator className={styles.loading} size={"30px"} color={'primary'}/>
      ) : null}
    </Div>
  )

}

InfiniteScroll.defaultProps = {
  reverse: false
}

export default InfiniteScroll;