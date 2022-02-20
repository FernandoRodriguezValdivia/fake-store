/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RouteContext } from '../../App';

const NavStyled = styled.nav`
  background-color: #222;
  border: 2px solid white;
  height: 80px;
  display: flex;
  align-items: center;
  ul {
    margin: 0px;
    display: flex;
    justify-content: space-around;
    padding: 0 10px;
    width: 200px;
    li {
      list-style: none;

      a {
        text-decoration: none;
        font-size: 24px;
        color: #aaa;
      }
    }
  }
`;

function Navbar() {
  const routes = useContext(RouteContext);

  return (
    <NavStyled className="navbar">
      <ul>
        {routes.map((route, i) => (
          <li key={i}>
            <Link to={route.url}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </NavStyled>
  );
}

export default Navbar;
