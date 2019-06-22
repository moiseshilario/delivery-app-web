import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

// import { Container } from './styles';

const Orders = () => {
  useEffect(() => {
    api.get('/test');
  }, []);

  return (
    <div>
      orders
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Orders;
