import React from 'react'

const Star = ({src, alt, loading="lazy"}) => {
  return (
    <img className='star' src={src} alt={alt} />
  )
}

export default Star