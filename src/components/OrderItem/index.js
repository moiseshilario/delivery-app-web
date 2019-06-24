import React from 'react';

import {
  Container,
  OrderTitle,
  Time,
  Price,
  ProductsContainer,
  Product,
  Observation,
} from './styles';

const OrderItem = () => (
  <Container>
    <OrderTitle>Pedido #1 - Moisés Hilario</OrderTitle>
    <Time>há 2 segundos</Time>
    <Price>R$42,00</Price>

    <ProductsContainer>
      <Product />
    </ProductsContainer>
    <Observation>
      <p>
        <strong>Observações:</strong> Favor remover o queijo
      </p>
    </Observation>
  </Container>
);

export default OrderItem;
