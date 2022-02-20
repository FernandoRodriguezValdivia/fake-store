/* eslint-disable react/prop-types */
import styled from 'styled-components';
import Counter from '../Counter';
import CountContex from '../../Context/CountContex';
import CustomButton from '../CustomButton/CustomButton';
import UseCont from '../../CustomHooks/UseCont';

const Card = styled.div`
  border: 2px solid black;
  margin: 10px;
  border-radius: 20px;
  width: 350px;
  padding: 20px;
  p {
    font-size: 20px;
    font-weight: bolder;
  }
  .cont {
    font-size: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

function ProductCard({ product }) {
  const contador = UseCont();
  return (
    <CountContex.Provider value={contador}>
      <Card>
        <img src={product.image} alt="imagen" height="100" />
        <p>{product.title}</p>
        <div className="cont">
          <Counter />
          <CustomButton id={product.id} />
        </div>
      </Card>
    </CountContex.Provider>
  );
}

export default ProductCard;
