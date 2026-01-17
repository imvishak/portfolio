/* eslint-disable @next/next/inline-script-id */
import Script from "next/script";
export default function Structured({ data }) {    
  return (   
      <Script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />    
  );
}