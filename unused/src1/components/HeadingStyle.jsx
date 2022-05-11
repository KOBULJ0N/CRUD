import styled from "styled-components";
export const HeadingBox = styled.div`
  width: 100%;
  height: 100px;
  background-color: black;
  color: white;
  div:first-child {
    padding: 0 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
  }
  div:last-child {
    border-top: 1px solid orange;
    color: orange;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100% - 60px);
    input,
    select {
      height: 80%;
      padding: 5px 10px;
      margin: 0 10px;
      outline: none;
      border-radius: 5px;
    }
  }
`;
