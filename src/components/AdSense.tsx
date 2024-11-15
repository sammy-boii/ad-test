'use client'

import Script from 'next/script'
import React from 'react'

const AdSense = () => {
  return (
    <Script
      onError={(err) => {
        console.log('ERROR LOADING ADSENSE', err)
      }}
      onLoad={(s) => {
        console.log('LOADED ADSENSE', s)
      }}
      src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2749560806237727'
      crossOrigin='anonymous'
      strategy='afterInteractive'
    />
  )
}

export default AdSense
