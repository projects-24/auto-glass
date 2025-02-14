import React from 'react'
import Input from 'funuicss/ui/input/Input'
import Text from 'funuicss/ui/text/Text'


export default function cls
({label, standard, hint, required, funcss, ...rest }) {
  return <div>
    <Text 
    text={`${label} ${required ? '*' : ''}` || ''} 
    block 
    size='small' 
    uppercase 
    color='dark800'
    funcss='margin-bottom-10'
    />
    <Input label={hint || ''} funcss={`dark _input roundEdgeSmall ${funcss}`} borderless {...rest} fullWidth />
</div>
}
