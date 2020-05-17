import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaShoppingCart, FaAddressBook } from 'react-icons/fa';
import { BsGrid1X2Fill } from 'react-icons/bs';

import { Container } from './styles';

function Sidebar() {
  return (
    <Container>
      <h2>Minha conta</h2>

      <ul>
        <li>
          <Link to="/profile">
            <FaUserAlt size={20} color="#FF6494" /> Meus dados
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <FaShoppingCart size={20} color="#FF6494" /> Compras
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <BsGrid1X2Fill size={20} color="#FF6494" /> Vendas
          </Link>
        </li>
        <li>
          <Link to="/addresses">
            <FaAddressBook size={20} color="#FF6494" /> Endereços
          </Link>
        </li>
        <li>
          <button type="submit">vender</button>
        </li>
      </ul>
    </Container>
  );
}

export default Sidebar;
