import styled from "styled-components";
export const TableBox = styled.div`
  overflow: auto;
  #users {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    border: none;
  }
  #users tr td {
    height: 40px;
    padding: 0;
    p {
      padding: 8px;
      height: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: flex;
      align-items: center;
    }
    input {
      display: table-cell;
      /* vertical-align: inherit; */
      border: 1px solid #ddd;
      padding: 8px;
      font-size: 16px;
      width: 100%;
      height: 40px;
      border: none;
    }
  }
  #users tr *:first-child {
    position: sticky;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 2;
  }
  #users tr td:first-child {
    background-color: #affff7;
    padding: 8px;
  }
  #users tr th:last-child {
    text-align: center;
  }
  #users tr *:last-child {
    position: sticky;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    div {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      min-width: 100px;

      button {
        margin: 0 3px;
        width: 50px;
        height: 25px;
      }
    }
  }
  #users tr td:last-child {
    background-color: #affff7;
    padding: 8px;
  }

  #users td,
  #users th {
    border: 1px solid #ddd;
    padding: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  #users tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  #users tr {
    background-color: #ddd;
  }
  #users tr:hover {
    background-color: #bababa;
  }

  #users th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04aa6d;
    color: white;
  }
`;
