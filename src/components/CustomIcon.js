import React from 'react'
const CustomIcon = ({ type, className = '', size = 'md', ...restProps }) => {
  return (
    <svg
      className={`am-icon am-icon-${type.id} am-icon-${size} ${className}`}
      {...restProps}
    >
      <use xlinkHref={`#${type.id}`} />
    </svg>
  )
}

export default CustomIcon