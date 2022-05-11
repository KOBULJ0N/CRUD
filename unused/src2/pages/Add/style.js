import styled from "styled-components";

export const AddUserBox = styled.div`
  width: 100%;
  height: 60px;
  background-color: black;
  div:first-child {
    color: white;
    height: 100%;
    padding: 0 25px;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  input[type="text"],
  input[type="email"],
  input[type="date"],
  select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  div button {
    width: 20%;
    margin-right: 8px;
  }

  input[type="submit"]:hover {
    background-color: #45a049;
  }

  div:last-child div, h2 {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 15px 25px;
  }
`;
