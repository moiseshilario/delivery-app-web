import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
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
} from './styles';

import OrderItem from '../../components/OrderItem';

import LogoSVG from '../../assets/logo.svg';

const Orders = ({ user }) => (
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
      <OrderItem />
    </Content>
  </Container>
);

Orders.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = state => ({
  user: state.auth.loggedUser,
});

export default connect(mapStateToProps)(Orders);
