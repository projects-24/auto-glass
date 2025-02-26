'use client'
import React from 'react'
import Button from 'funuicss/ui/button/Button'

export default function UiButton({primary, secondary, text , ...rest}) {
  return primary ? <Button 
  flat
  bg='primary' 
  text={text || ''} 
  {...rest}
  /> : secondary ? <Button 
  bg='bg-s'
  color='white'
  text={text || ''} 
  {...rest} 
  flat
  /> : <Button 

  text={text || ''}
  {...rest} 
  />
  
}
