import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ptBr from 'moment/locale/pt-br';
import normalizeData from '../../helpers/normalizeData';

import {
  Container, OrderTitle, Time, Price, ProductsContainer, Observation,
} from './styles';
import Product from '../Product';

moment.locale('pt-br', ptBr);

const Order = ({ userOrder: { order, orderItems }, index }) => (
  <Container>
    <OrderTitle>{`Pedido #${index} - ${order.user.name}`}</OrderTitle>
    <Time>{moment(order.updatedAt).fromNow()}</Time>
    <Price>{`R$${order.total.toFixed(2)}`}</Price>

    <ProductsContainer>
      {orderItems.map(item => (
        <Product item={normalizeData(item)} key={item.id} />
      ))}
    </ProductsContainer>
    <Observation>
      <p>
        <strong>Observações:</strong> {order.observation}
      </p>
    </Observation>
  </Container>
);

Order.propTypes = {
  userOrder: PropTypes.shape({
    order: PropTypes.shape({
      user: PropTypes.shape({
        name: PropTypes.string,
      }),
      updatedAt: PropTypes.string,
      total: PropTypes.number,
    }),
    orderItems: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Order;
