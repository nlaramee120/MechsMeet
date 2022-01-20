import * as React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { genCheckup, brakeService, headlights, oilChange, paintJob, tireRotation, emishTest } from "../Stripe/script";

const Dropbox = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Pay for:
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={genCheckup}>General Checkup</Dropdown.Item>
        <Dropdown.Item onClick={brakeService}>Brake Service</Dropdown.Item>
        <Dropdown.Item onClick={headlights}>Headlights</Dropdown.Item>
        <Dropdown.Item onClick={oilChange}>Oil Change</Dropdown.Item>
        <Dropdown.Item onClick={paintJob}>Paint Job</Dropdown.Item>
        <Dropdown.Item onClick={tireRotation}>Tire Rotation</Dropdown.Item>
        <Dropdown.Item onClick={emishTest}>Emissions Test</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Dropbox;
