'use client'

import React, { useEffect } from 'react'

const AdBanner = () => {
  useEffect(() => {
    try {
      ;((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {}
      )
    } catch (error: any) {
      console.log('ERROR PUSHING P', error.message)
    }
  }, [])

  return (
    <ins
      className='adsbygoogle'
      style={{ display: 'block' }}
      data-ad-client='ca-pub-4678300682198759'
      data-ad-slot='1230667407'
      data-adtest='on'
      data-ad-format='auto'
      data-full-width-responsive='true'
    ></ins>
  )
}

export default AdBanner
