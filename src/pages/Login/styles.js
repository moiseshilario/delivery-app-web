import styled from 'styled-components';
import backgroundImage from '../../assets/fundo.jpg';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${backgroundImage});
`;

export const Gradient = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent 0%, #000 100%);
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 72px;
  height: 72px;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  width: 250px;

  input {
    font-size: 15px;
    font-family: Helvetica;
    width: 100%;
    height: 42px;
    padding: 5px 15px;
    margin: 5px 0;
    border: 0;
    border-radius: 5px;
  }

  button {
    font-size: 15px;
    font-family: Helvetica-Bold;
    color: #fff;
    width: 100%;
    height: 42px;
    margin-top: 10px;
    border: 0;
    border-radius: 5px;
    background: #da2a41;
    transition: background 0.2s ease;

    &:hover {
      background: #b92337;
    }
  }
`;
