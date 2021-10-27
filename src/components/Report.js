import { useState, useEffect } from "react"
import { Table } from "react-bootstrap"
import { ReactComponent as Success } from "../img/success.svg"
import { ReactComponent as Error } from "../img/error.svg"
import "../styles/Report.scss"

const Report = () => {
  const [data, setData] = useState([])

  const getTableData = async () => {
    const res = await fetch(
      "https://my-json-server.typicode.com/darinapairel/biocad-test/dataSource"
    )
    const json = await res.json()
    const data = await json
    setData(data)
  }

  useEffect(() => {
    getTableData()
  }, [])

  return (
    <div className="table-container">
      <Table className="custom-table table-borderless" hover>
        <thead>
          <tr>
            {[
              "Data",
              "Used buffer solutions",
              "Slope, % Norm 95-10",
              "Offset, mV Norm ±(0-20",
              "User"
            ].map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((d, index) => {
            const keys = Object.keys(d)
            return (
              <tr key={index}>
                {keys.map(key => {
                  switch (key) {
                    case "bufferSolutions":
                      return (
                        <td className="buffer" key="buffer">
                          {d[key].map(buffer => [buffer, <br />])}
                        </td>
                      )

                    case "slope":
                      return (
                        <td key="slope">
                          {d[key]}
                          {d[key] >= 95 && d[key] <= 105 ? (
                            <Success />
                          ) : (
                            <Error />
                          )}
                        </td>
                      )
                    case "offset":
                      return (
                        <td key="offset">
                          {d[key]}
                          {Math.abs(d[key]) >= 0 && Math.abs(d[key]) <= 20 ? (
                            <Success />
                          ) : (
                            <Error />
                          )}
                        </td>
                      )

                    default:
                      return (
                        <td key={key === "user" ? "user" : "data"}>{d[key]}</td>
                      )
                  }
                })}
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}
export default Report
