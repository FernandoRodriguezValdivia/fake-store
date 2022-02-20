/* eslint-disable import/no-cycle */
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

const HeaderStyled = styled.header`
  display: flex;
  height: 80px;
  justify-content: space-between;
  margin: 0px;
  background-color: #222;
  align-items: center;
  a {
    text-decoration: none;
  }
  span {
    margin-left: 30px;
    font-size: 30px;
    color: #aaa;
  }
`;

function Header() {
  return (
    <HeaderStyled>
      <Link to="/">
        <span> Fake Store </span>
      </Link>

      <Navbar />
    </HeaderStyled>
  );
}

export default Header;
