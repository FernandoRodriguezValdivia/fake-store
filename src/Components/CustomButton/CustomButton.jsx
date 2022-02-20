/* eslint-disable react/style-prop-object */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CountContex from '../../Context/CountContex';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  a {
    display: flex;
    text-decoration: none;
  }
  button {
    height: 40px;
    width: 120px;
    border-radius: 15px;
    font-size: 18px;
  }
  .enabled {
    background-color: green;
    :hover {
      cursor: pointer;
    }
  }
  .disabled {
    background-color: red;
  }
`;

// eslint-disable-next-line react/prop-types
function CustomButton({ id }) {
  const contador = useContext(CountContex);
  return (
    <Contenedor>
      {contador > 0 ? (
        <Link to={`/product-detail/${id}`}>
          <button type="button" className="enabled">
            Go To Detail
          </button>
        </Link>
      ) : (
        <button type="button" className="disabled" disabled>
          Disabled
        </button>
      )}
    </Contenedor>
  );
}

export default CustomButton;
