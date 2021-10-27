import { Container, Row, Col } from "react-bootstrap"
import Report from "./components/Report"
import ReportFilters from "./components/ReportFilters"
import FilterDevices from "./components/FilterDevices"
import DeviceInfo from "./components/DeviceInfo"
import UnitName from "./components/UnitName"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/base.scss"
import "./styles/App.scss"

function App() {
  return (

      <Container className="App">
        <Row>
          <Col md="5"> <FilterDevices /> </Col>
        </Row>
        <Row>
        <Col md="5">
          <UnitName />
          <ReportFilters />
        </Col>
        <Col md="7">  
          <DeviceInfo />
        </Col>
        </Row>
        <Row>       
          <Report />
        </Row>
    </Container>
  )
}

export default App
