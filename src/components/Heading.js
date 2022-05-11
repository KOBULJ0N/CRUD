import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { Button } from "../generic/Button";
import { HeadingBox } from "./HeadingStyle";

export default function Heading() {
  const contextData = useContext(GlobalContext);
  const { state, setFilterText, setKey } = contextData;

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
          <label htmlFor="search">Async Search:</label>
          <input onChange={(e)=>setFilterText(e.target.value)} id="search" type="text" placeholder="search..." />
          <select onChange={(e)=>setKey(e.target.value) }>
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
}
