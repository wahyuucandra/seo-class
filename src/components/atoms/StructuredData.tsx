import Script from 'next/script'
import React from 'react'

type Props = {
  id: string
  data: any
}

const StructuredData = ({ id, data }: Props) => {
  return (
    <Script id={id} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data, null, 2) }} />
  )
}

export default StructuredData
