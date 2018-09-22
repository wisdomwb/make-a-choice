import React from 'react'
const CustomIcon = ({ type, className = '', size = 'md', ...restProps }) => {
  console.log(type, 'type')
  return (
    <svg
      className={`am-icon am-icon-${type.default.id} am-icon-${size} ${className}`}
      {...restProps}
    >
      {/* <use xlink:href=`#${type.default.id}` /> */}
      <use xlinkHref={`#${type.default.id}`} />
    </svg>
  )
}

export default CustomIcon