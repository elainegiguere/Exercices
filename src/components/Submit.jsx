import React from 'react'

const Submit = ({children}) => {
    const classnames =`btn`;
  return (
    <button className={classnames}>{children}</button>
  )
}

export default Submit