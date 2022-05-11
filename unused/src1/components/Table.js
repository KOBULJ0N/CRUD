import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "../generic/Button";
import MOCK_DATA from "../mocks/MOCK_DATA.json";
import { TableBox } from "./TableStyle";
export default function Table() {
  const data = useMemo(() => MOCK_DATA, []);
  return (
    <TableBox>
      <table id="users">
        <thead>
          <tr>
            <th>Id</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>dat of birth</th>
            <th>Email</th>
            <th>Address</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr key={item.id.$oid}>
                <td>{i+1}</td>
                <td>
                  <p>{item.first_name}</p>
                </td>
                <td>
                  <p>{item.last_name}</p>
                </td>
                <td>
                  <p>{item.date_of_birth}</p>
                </td>
                <td>
                  <p>{item.email}</p>
                </td>
                <td>
                  <p>{item.job}</p>
                </td>
                <td>
                  <p>{item.country}</p>
                </td>
                <td>
                  <div>
                    <Link to={`/Edit/${item.id.$oid}`}><Button>edit</Button></Link>
                    <Button>delete</Button>
                  </div>
                </td>
              </tr>
            );
          })}
          {/* <tr>
            <td>id1</td>
            <td><p>firstname</p></td>
            <td><input type="text" defaultValue={"lastname1"} /></td>
            <td><p>Age1</p></td>
            <td><p>email1@gmail.com</p></td>
            <td><p>address1</p></td>
            <td><p>сountry1</p></td>
            <td>
              <div>
                <button>update</button>
                <button>delete</button>
              </div>
            </td>
          </tr> */}
        </tbody>
      </table>
    </TableBox>
  );
}
