import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { Button } from "../generic/Button";
import { HeadingBox } from "./HeadingStyle";

export default function Heading() {
  const contextData = useContext(GlobalContext)
  return (
    <>
      <HeadingBox>
        <div>
          <h1 className="Brand">CRUDapp</h1>

          <Link to="/Add">
            <Button>add</Button>
          </Link>
        </div>
        <div>
          <label>Async Search:</label>
          <input type="text" onChange={(e) => asyncSearch(e)} placeholder="search..." />
          <select onClick={(e) => contextData.setSelectValue(e.target.value)}>
            <option value="first_name" key="1">
              firstname
            </option>
            <option value="last_name" key="2">
              lastname
            </option>
            <option value="date_of_birth" key="3">
              date of birth
            </option>
            <option value="email" key="4">
              email
            </option>
          </select>
        </div>
      </HeadingBox>
    </>
  );
  function asyncSearch(e) {
    setTimeout(() => {
      contextData.setFilterText(e.target.value)
    }, 1000);
  }
}
