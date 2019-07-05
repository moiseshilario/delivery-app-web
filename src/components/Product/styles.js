import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 210px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const ImageContainer = styled.div`
  width: 60px;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: auto;
  height: 60px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  margin-left: 10px;
`;

export const Title = styled.p`
  font-family: Helvetica;
  font-size: 13px;
  color: #0b2031;
`;

export const Size = styled.span`
  font-family: Helvetica;
  font-size: 11px;
  color: #706e7b;
  line-height: 14px;
  margin: 5px 0;
`;
