/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import ProductCard from '../ProductCard';

const Const = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

function Home({ products }) {
  return (
    <div>
      <h1>Products</h1>
      <Const>
        {products.length === 0 ? (
          <h2>Cargando</h2>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </Const>
    </div>
  );
}

export default Home;
