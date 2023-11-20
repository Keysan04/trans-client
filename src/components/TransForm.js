import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import { CustomInput } from "./CustomInput";
import { postTrans } from "../heper/axiosHelper.js";

const TransForm = () => {
  const [form, setForm] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [resp, setResp] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    const result = await postTrans(form);
    console.log(result);
  };

  const inputs = [
    {
      label: "Type",
      type: "text",
      name: "type",
      required: true,
      placeholder: "....",
    },
    {
      label: "Date",
      type: "Date",
      name: "Date",
      required: true,
    },
    {
      label: "Titel",
      type: "Text",
      name: "Title",
      required: true,
    },
    {
      label: "Amount",
      type: "Number",
      name: "amount",
      required: true,
    },
  ];

  return (
    <div className="mt-5">
      {/* {resp.message && <Alert variant={resp.status == "success" ? "success"}>{resp.message}</Alert>} */}
      <Form className="shadow-lg border rounded p-3" onSubmit={handleOnSubmit}>
        <Row>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Type</Form.Label>
              <Form.Select name="type" onChange={handleOnChange} required>
                <option value=""> Select Option</option>
                <option value="income"> Income</option>
                <option value="expenses"> Expenses</option>
              </Form.Select>
            </Form.Group>
          </Col>
          {inputs.map((item, i) => (
            <Col md={2} key={i}>
              <CustomInput
                key={i}
                {...item}
                onChange={handleOnChange}
                required
              />
            </Col>
          ))}
          <Col md={4}>
            <Form.Group>
              <div className="d-grid mt-3">
                <Button type="submit">Add </Button>
              </div>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default TransForm;
