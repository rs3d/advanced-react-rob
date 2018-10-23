import Nav from "./Nav";
import styled from "styled-components";

const MyButton = styled.button`
  background: red;
  font-size: 20px;
  span {
    font-size: 30px;
  }
`;

const Header = props => (
  <header>
    <h1>kapilendo</h1>
    <Nav />
    <MyButton>Click me <span>🍲</span></MyButton>
  </header>
);

export default Header;
