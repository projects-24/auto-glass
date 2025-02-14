import React from 'react'
import Circle from 'funuicss/ui/specials/Circle'

export default function CircleUi({children , bg, color,   ...rest}) {
  return (
    <Circle bg={bg || 'dark200'} color={color || 'dark700'} {...rest}>{ children || '' }</Circle>
  )
}
