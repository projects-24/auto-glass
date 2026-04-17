'use client'
import { useEffect } from 'react'
import Aos from 'aos'

export default function AosInit() {
  useEffect(() => {
    Aos.init()
  }, [])
  return null
}
