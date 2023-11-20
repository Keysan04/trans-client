import React, { useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { CustomInput } from "./CustomInput";
import { loginUser } from "../heper/axiosHelper";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [form, setForm] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [resp, setResp] = useState({});

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setResp({});
    setIsLoading(true);
    console.log(form);
    const result = await loginUser(form);
    setIsLoading(false);
    console.log(result);
    if (result?.status == "success") {
      sessionStorage.setItem("user", JSON.stringify(result.user));

      navigate("/dashboard");
    } else {
      setResp(result);
    }
  };

  const inputs = [
    {
      label: "Email",
      type: "email",
      name: "email",
      required: true,
      placeholder: "John@emial.com",
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      required: true,
      placeholder: "xxxxxx",
    },
  ];
  return (
    <Form onSubmit={handleOnSubmit}>
      {resp.message && <Alert variant="danger">{resp.message}</Alert>}
      {inputs.map((item, i) => (
        <CustomInput key={i} {...item} onChange={handleOnChange} />
      ))}
      <div className="d-grid">
        <Button variant="primary" type="submit" disabled={isLoading}>
          {isLoading ? <Spinner animation="border" /> : "Submit"}
        </Button>
      </div>
      <div className="text-end mt-4">
        Are you new here? <a href="/signup">Signup</a> now
      </div>
    </Form>
  );
};
