import React from 'react'

export default function Content({children}) {
  return (
    <div className='_body'>
        <div className="_content">
        {children || ''}
        </div>
    </div>
  )
}
