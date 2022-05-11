import format from "date-fns/format";
import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import { Button } from "../../generic/Button";
import { COUNTRIES } from "../../mocks/Countries";
import { AddUserBox } from "../Add/style";
export default function EditUser() {
  const contextData = useContext(GlobalContext);
  const params = useParams();
  const [selectedUser] = contextData.state.users.filter(
    (user) => user.id.$oid === params.id
  );
  const { first_name, last_name, date_of_birth, email, job, country } =
    selectedUser;
  const [dob, setDob] = useState(date_of_birth);
  return (
    <AddUserBox>
      <div>
        <h1 className="Brand">CRUDapp</h1>
      </div>
      <div>
        <h2>Editing Page</h2>
        <div>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            defaultValue={first_name}
          />
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            defaultValue={last_name}
          />
          <label htmlFor="dob">Date of birth</label>
          <input
            type="text"
            id="dob"
            name="date_of_birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={email}
            placeholder="Your email.."
          />
          <label htmlFor="job">Job</label>
          <input type="text" id="job" name="job" defaultValue={job} />
          <label htmlFor="country">Country</label>
          <select id="country" name="country" defaultValue={country}>
            {COUNTRIES.map((country, i) => {
              return (
                <option value={country.name} key={i}>
                  {country.name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <Link to="/">
            <Button onClick={submitUser}>submit</Button>
          </Link>
          <Link to="/">
            <Button>cancel</Button>
          </Link>
        </div>
      </div>
    </AddUserBox>
  );
  function submitUser() {
    const inputs = document.querySelectorAll("input");
    const select = document.querySelector("select");
    const date = format(new Date(inputs[2].value), "dd/MM/yyyy");
    console.log(date);
    const updatedUser = {
      id: { $oid: params.id },
      first_name: inputs[0].value,
      last_name: inputs[1].value,
      date_of_birth: inputs[2].value,
      email: inputs[3].value,
      job: inputs[4].value,
      country: select.value,
    };
    contextData.updateUser(updatedUser);
  }
}
