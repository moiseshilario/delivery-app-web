import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as OrdersActions } from '../../store/ducks/orders';
import { Creators as AuthActions } from '../../store/ducks/auth';

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

const Orders = ({
  user, orders, getOrderRequest, logout,
}) => {
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
          <LogoutButton type="button" onClick={() => logout()}>
            Sair do app
          </LogoutButton>
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
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
  getOrderRequest: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.auth.loggedUser,
  orders: state.orders.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...OrdersActions,
    ...AuthActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Orders);
