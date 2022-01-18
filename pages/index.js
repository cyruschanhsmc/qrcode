import { useState } from "react";
import dynamic from "next/dynamic";

const QrReader = dynamic(() => import("react-qr-reader"), { ssr: false });
export default function Home() {
  const [result, setResult] = useState('No result')
  const handleScan = data => {
    if (data) {
      alert(data)
     setResult(data)
    }
  }
  const handleError = err => {
    console.error(err)
  }

  return (
    <div>
    <QrReader
      delay={300}
      onError={handleError}
      onScan={handleScan}
      style={{ width: '30%' }}
    />
    <p>{result}</p>
  </div>
  )
}
