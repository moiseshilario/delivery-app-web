import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ptBr from 'moment/locale/pt-br';
import { imagesURL } from '../../services/api';

import {
  Container, ItemInfo, ImageContainer, Image, InfoContainer, Title, Size,
} from './styles';

moment.locale('pt-br', ptBr);

const Product = ({ item }) => (
  <Container>
    <ItemInfo>
      <ImageContainer>
        <Image src={`${imagesURL}/${item.type.image}`} />
      </ImageContainer>
      <InfoContainer>
        <Title>{item.type.name}</Title>
        <Size>{item.size.description}</Size>
      </InfoContainer>
    </ItemInfo>
  </Container>
);

Product.propTypes = {
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

export default Product;
