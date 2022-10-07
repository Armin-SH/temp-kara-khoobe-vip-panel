import React from 'react'
import {default as NextImage} from 'next/image'
import {ImageProps} from './image.props'

const Image = (props: ImageProps) => {

  const {className, layout, src, alt, objectFit, width, height, ...rest} = props

  if (!src) {
    return null
  }

  return (
    <NextImage height={height} width={width} alt={alt} src={src} className={className} layout={layout} objectFit={objectFit} {...rest}/>
  )
}

Image.defaultProps = {
  objectFit: 'contain',
  layout: 'fill',
  alt: 'icon'
}

export default Image;
