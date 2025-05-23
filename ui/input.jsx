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
    color='dark200'
    funcss='margin-bottom-10'
    bold
    />
    <Input label={hint || ''} funcss={` ${funcss}`} bordered {...rest} fullWidth />
</div>
}
