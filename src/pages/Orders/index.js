import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as OrdersActions } from '../../store/ducks/orders';
// import api from '../../services/api';

import {
  Container,
  Header,
  Logo,
  UserInfo,
  LogoContainer,
  BrandName,
  UserName,
  LogoutButton,
  Content,
  PageTitle,
  OrdersContainer,
} from './styles';

import Order from '../../components/Order';

import LogoSVG from '../../assets/logo.svg';

const Orders = ({ user, orders, getOrderRequest }) => {
  useEffect(() => {
    const getOrders = async () => {
      await getOrderRequest();
    };
    getOrders();
  }, [getOrderRequest]);

  return (
    <Container>
      <Header>
        <LogoContainer>
          <Logo src={LogoSVG} />
          <BrandName>Pizzaria Don Juan</BrandName>
        </LogoContainer>
        <UserInfo>
          <UserName>{user.name}</UserName>
          <LogoutButton type="button">Sair do app</LogoutButton>
        </UserInfo>
      </Header>

      <Content>
        <PageTitle>Últimos Pedidos</PageTitle>
        <OrdersContainer>
          {!!orders.length
            && orders.map((userOrder, index) => (
              <Order userOrder={userOrder} key={userOrder.order.id} index={index + 1} />
            ))}
        </OrdersContainer>
      </Content>
    </Container>
  );
};

Orders.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  orders: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  getOrderRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.auth.loggedUser,
  orders: state.orders.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(OrdersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Orders);
