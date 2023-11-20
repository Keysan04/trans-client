import React from "react";
import TopNav from "../components/TopNav";
import TransForm from "../components/TransForm";
import { Container } from "react-bootstrap";
const Dashboard = () => {
  return (
    <>
      <TopNav />
      <Container fluid>
        <TransForm />
      </Container>
    </>
  );
};

export default Dashboard;
