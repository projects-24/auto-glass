'use client'
import React from 'react'
import Button from 'funuicss/ui/button/Button'

export default function UiButton({primary, dark, text , ...rest}) {
  return primary ? <Button 
  rounded 
  bg='primary' 
  text={text || ''} 
  {...rest}
  /> : dark ? <Button 
  bg='dark200'
  color='white'
  rounded 
  text={text || ''} 
  {...rest} 
  /> : <Button 

  text={text || ''}
  {...rest} 
  />
  
}
