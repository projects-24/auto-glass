import React from 'react'
import Table from 'funuicss/ui/table/Table'

export default function TableUI({children , ...rest}) {
  return (
    <Table {...rest}>{ children || '' }</Table>
  )
}
