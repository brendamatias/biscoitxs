import React, { useState, useEffect } from 'react';
import DefaultLayout from '~/pages/_layouts/default';

import Sidebar from '~/components/Sidebar';

import api from '~/services/api';

import { Container, Content, Status } from './styles';

export default function Orders() {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadMeetups() {
      setLoading(true);

      const { data } = await api.get('orders', {
        params: {
          page,
        },
      });

      setOrders(data.data);
      setLoading(false);
    }

    loadMeetups();
  }, []);

  return (
    <DefaultLayout>
      <Container>
        <Sidebar />
        <Content className="container">
          <h1>Compras</h1>

          {!loading ? (
            <>
              {orders.length > 0 ? (
                <ul>
                  {orders.map(order => (
                    <li key={order.id}>
                      <div>
                        <strong>Pedido {order.id}</strong>
                        <Status status={order.status}>{order.status}</Status>
                        <strong>Total ${order.total}</strong>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <h1>Ops, você ainda não tem pedidos realizados.</h1>
              )}
            </>
          ) : (
            <h1>Carregando...</h1>
          )}
        </Content>
      </Container>
    </DefaultLayout>
  );
}
