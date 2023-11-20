import React from "react";
import { Table } from "react-bootstrap";
const TransTable = ({ transList }) => {
  return (
    <div>
      <div>{transList.length} Transactions found</div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Description</th>
            <th>Title</th>

            <th>Income</th>
            <th>Expenses</th>
          </tr>
        </thead>
        <tbody>
          {transList.map({ _id, titile, date, amount, type })}
          <tr>
            <td>{DataTransfer.slice(0, 10)}</td>
            <td>{title}</td>
            <td>{title}</td>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TransTable;
