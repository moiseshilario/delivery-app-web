import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import api from '../../services/api';
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
} from './styles';

import LogoSVG from '../../assets/logo.svg';

const Orders = ({ user }) => {
  useEffect(() => {
    const getUser = async () => {
      api.get('');
    };
  }, []);

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
      orders
      <Link to="/login">Login</Link>
    </Container>
  );
};

const mapStateToProps = state => ({
  user: state.auth.loggedUser,
});

export default connect(mapStateToProps)(Orders);
