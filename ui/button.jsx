'use client'
import React from 'react'
import Button from 'funuicss/ui/button/Button'

export default function UiButton({primary, secondary, text , qoute, ...rest}) {
  return primary ? <Button 
  flat
  bg='p' 
  text={text || ''} 
  {...rest}
  /> : secondary ? <Button 
  bg='bg-s'
  color='white'
  text={text || ''} 
  {...rest} 
  flat
  /> : <Button 
  funcss={qoute ? 'quote-btn' : ''}
  text={text || ''}
  {...rest} 
  />
  
}
