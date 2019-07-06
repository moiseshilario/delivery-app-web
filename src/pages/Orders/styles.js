import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  width: 100%;
  background: #0b2031;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 40px;
  color: #fff;

  @media screen and (max-width: 600px) {
    padding: 20px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 14px;
`;

export const BrandName = styled.h1`
  font-family: Helvetica-Bold;
  font-size: 18px;
  letter-spacing: 0;

  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const UserName = styled.p`
  font-family: Helvetica-Bold;
  font-size: 16px;
  text-transform: capitalize;
  text-align: right;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export const LogoutButton = styled.span`
  opacity: 0.6;
  font-family: Helvetica;
  font-size: 14px;
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  margin: 20px auto;

  @media screen and (max-width: 850px) {
    width: 90%;
  }
`;

export const PageTitle = styled.h2`
  font-family: Helvetica-Bold;
  font-size: 18px;
  color: #333333;
  align-self: flex-start;
  margin-bottom: 15px;
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100%;
`;
