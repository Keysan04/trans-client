import React, { useEffect, useState } from "react";
import TopNav from "../components/TopNav";
import TransForm from "../components/TransForm";
import { Container } from "react-bootstrap";
import TransTable from "../components/TransTable";
const Dashboard = () => {
  const [transList, setTransList] = useState([]);

  const getAllTrans = async () => {
    const { status, taskList } = await getTrans();
    status === "success" && setTransList(transList);
    useEffect(() => {
      getAllTrans();
    }, []);
  };
  return (
    <>
      <TopNav />
      <Container fluid>
        <TransForm />
        <TransTable transList={transList} />
      </Container>
    </>
  );
};

export default Dashboard;
