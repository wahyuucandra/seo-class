import Script from 'next/script'
import React from 'react'

type Props = {
  containerId: string
}

const CustomGA = ({ containerId }: Props) => {
  return (
    <Script id="google-analytics" strategy="afterInteractive">
      {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${containerId}');
  `}
    </Script>
  )
}

export default CustomGA
