import { useState, useEffect } from "react"
import "../styles/DeviceInfo.scss"
const DeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState({})

  const getDeviceInfo = async () => {
    const res = await fetch(
      "https://my-json-server.typicode.com/darinapairel/biocad-test/deviceInfo"
    )
    const json = await res.json()
    const data = await json[0]
    setDeviceInfo(data)
    console.log(data)
  }
  useEffect(() => {
    getDeviceInfo()
  }, [])

  return (
    <div className="device-info">
      {Object.keys(deviceInfo).map(key => (
        <div className="info-row">
          <span className="key">{key}:</span>
          <span
            className={`val ${
              key === "GUID" || key === "Bims ID" || key === "Tam" ? "link" : ""
            }`}
          >
            {deviceInfo[key]}
          </span>
        </div>
      ))}
    </div>
  )
}

export default DeviceInfo
