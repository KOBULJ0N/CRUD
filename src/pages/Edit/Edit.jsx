import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "../../generic/Button";
import { COUNTRIES } from "../../mocks/Countries";
import { AddUserBox } from "../Add/style";
import {GlobalContext} from "../../context/GlobalContext"
import bsonId from "../../mocks/bsonId";
import formatDate from "../../mocks/formatDate";
export default function EditUser() {
  const params = useParams()
  const contextData = useContext(GlobalContext)
  const [selectedUser] = contextData.state.users.filter((item)=> item.id.$oid === params.id)
  return (
    <AddUserBox>
      <div>
        <h1 className='Brand'>CRUDapp</h1>
      </div>
      <div>
        <h2>Editing Page</h2>
        <div>
          <label htmlFor='fname'>First Name</label>
          <input
            type='text'
            id='fname'
            name='firstname'
            placeholder='Your name..'
            defaultValue={selectedUser.first_name}
          />
          <label htmlFor='lname'>Last Name</label>
          <input
            type='text'
            id='lname'
            name='lastname'
            placeholder='Your last name..'
            defaultValue={selectedUser.last_name}
          />
          <label htmlFor='dob'>Date of birth</label>
          <input
            type='text'
            id='dob'
            name='dob'
            placeholder='Your age..'
            defaultValue={selectedUser.date_of_birth}
          />
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Your email..'
            defaultValue={selectedUser.email}
          />
          <label htmlFor='job'>Job</label>
          <input
            type='text'
            id='job'
            name='job'
            placeholder='Your job..'
            defaultValue={selectedUser.job}
          />
          <label htmlFor='country'>Country</label>
          <select id='country' name='country' defaultValue={selectedUser.country}>
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
          <Link to='/'>
            <Button onClick={onEdit}>submit</Button>
          </Link>
          <Link to='/'>
            <Button>cancel</Button>
          </Link>
        </div>
      </div>
    </AddUserBox>
  );

   function onEdit() {
     const inputs = document.querySelectorAll('input');
     const select = document.querySelector('select');
     const newUser = {
       id: { $oid: params.id },
       first_name: inputs[0].value,
       last_name: inputs[1].value,
       date_of_birth: formatDate(inputs[2].value),
       email: inputs[3].value,
       job: inputs[4].value,
       country: select.value,
     };
     contextData.updateUser(newUser);
   }
}
