import { Form, Button } from "react-bootstrap"
import "../styles/ReportFilters.scss"

const ReportFilters = () => {
  return (
    <Form className="report-filter">
      <Form.Select>
        <option value="day">1 day</option>
        <option value="week">1 week</option>
        <option value="month">1 month</option>
      </Form.Select>
      {["Calibration", "Measuring", "Using"].map((label, index) => (
        <Form.Check
          type="radio"
          name="filter-radio"
          label={label}
          key={index}
        />
      ))}
      <Button variant="primary">Generate report</Button>
    </Form>
  )
}
export default ReportFilters
