import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0 0 5px 2px #ddd;
  padding: 20px;
  margin: 20px 0;
  width: 100%;
`;

export const OrderTitle = styled.h1`
  font-family: Helvetica;
  font-size: 18px;
  color: #0b2031;
  letter-spacing: 0;
`;

export const Time = styled.span`
  font-family: Helvetica;
  font-size: 11px;
  color: #706e7b;
  letter-spacing: 0;
  line-height: 14px;
  margin: 5px 0;
`;

export const Price = styled.p`
  font-family: Helvetica-Bold;
  font-size: 16px;
  color: #0b2031;
  letter-spacing: 0;
`;

export const ProductsContainer = styled.div`
  padding: 15px 0;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin: 20px 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Observation = styled.p`
  font-family: Helvetica;
  font-size: 14px;
  color: #706e7b;
  letter-spacing: 0;
  text-align: left;

  strong {
    font-family: Helvetica-Bold;
  }
`;
