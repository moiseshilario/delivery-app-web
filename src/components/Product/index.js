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
  item: PropTypes.shape({
    type: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
    }),
    size: PropTypes.shape({
      description: PropTypes.string,
    }),
  }).isRequired,
};

export default Product;
