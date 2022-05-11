import styled from "styled-components";

export const Button = styled.button`
  background-color: #000000; /* Green */
  border: none;
  color: white;
  ${button};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 5px;
  a {
    color: white;
    text-decoration: none;
  }
  :hover {
    ${buttonHover}
    color: white;
  }
`;
function button(props) {
 switch (props.children) {
   case "edit":
     return {fontSize: "12px", padding: "0 3px", backgroundColor: "blue", border: "2px solid blue"} 
   case "delete":
     return {fontSize: "12px", padding: "0 3px", backgroundColor: "red",  border: "2px solid red"} 
   case "cancel":
     return {fontSize: "16px", padding: "10px 20px",  backgroundColor: "red", border: "2px solid red"}  
 
   default: return {fontSize: "16px", padding: "10px 20px", backgroundColor: "#079e0c", border: "2px solid #079e0c"}
 }
    
    
    
  
}
function buttonHover(props) {
  switch (props.children) {
    case "edit":
      return { backgroundColor: "#2536b7", border: "2px solid #2536b7"} 
    case "delete":
      return { backgroundColor: "#a00303", border: "2px solid #a00303"} 
    case "cancel":
      return { backgroundColor: "#a00303", border: "2px solid #a00303"} 
  
    default: return {backgroundColor: "green", border: "2px solid green"}
  }

}