/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Cont = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .imagen{
    width: 20%;
    border: 2px solid #777;
    border-radius: 15px;
    padding: 30px;
  }
  .contenido{
    30%;
  }
  p{
    font-size: 30px;
    text-align: left;
  }
`;

export default function ProductDetail({ products }) {
  const { id } = useParams();
  const { title, price, description, category, image, rating } = products.find(
    (produ) => produ.id === parseInt(id, 10)
  );
  const { rate, count } = rating;
  return (
    <Cont>
      <div className="imagen">
        <img src={image} alt={description} width="200px" />
      </div>
      <div className="contenido">
        <h1>{title}</h1>
        <div>
          <p>Category: {category}</p>
          <p>Price: {price}</p>
          <p>Rating: {rate}</p>
          <p>Votes: {count}</p>
        </div>
      </div>
    </Cont>
  );
}
