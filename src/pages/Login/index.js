import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AuthActions } from '../../store/ducks/auth';

import {
  Container, Form, Gradient, Logo, Wrapper,
} from './styles';

import LogoSVG from '../../assets/logo.svg';

const Login = ({ signInRequest }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    signInRequest(email, password);
  };

  return (
    <Container>
      <Gradient />
      <Wrapper>
        <Logo src={LogoSVG} />
        <Form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha secreta"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button type="submit">Entrar</button>
        </Form>
      </Wrapper>
    </Container>
  );
};

Login.propTypes = {
  signInRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Login);
