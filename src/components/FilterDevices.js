import { Form, InputGroup, Button } from "react-bootstrap"
import "../styles/FilterDevices.scss"

const FilterDevices = () => {
  return (
    <Form className="device-filter">
      <Form.Label htmlFor="search" className="label">
        Enter inventory number, guid or bims id
      </Form.Label>
      <InputGroup>
        <Form.Control type="text" placeholder="A-001234" />
        <Button variant="dark" id="search-button">
          Search
        </Button>
      </InputGroup>
    </Form>
  )
}

export default FilterDevices
