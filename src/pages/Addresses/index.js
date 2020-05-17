import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import DefaultLayout from '~/pages/_layouts/default';

import Input from '~/components/Input';
import Button from '~/components/Button';
import Sidebar from '~/components/Sidebar';

import api from '~/services/api';

import { Container, Content } from './styles';

export default function Addresses() {
  const [loading, setLoading] = useState(false);
  const [addresses, setAddresses] = useState([]);

  async function handleSubmit(id) {
    try {
      await api.delete(`addresses/${id}`);
      toast.success('Endereço deletado com sucesso!');
    } catch (err) {
      toast.error('Erro ao tentar deletar endereço.');
    }
  }
  useEffect(() => {
    async function loadMeetups() {
      setLoading(true);

      const { data } = await api.get('addresses');

      setAddresses(data);
      setLoading(false);
    }

    loadMeetups();
  }, []);

  return (
    <DefaultLayout>
      <Container>
        <Sidebar />
        <Content className="container">
          <h1>Endereços</h1>

          {!loading ? (
            <>
              {addresses.length > 0 ? (
                <ul>
                  {addresses.map(address => (
                    <li key={address.id}>
                      <div>
                        <p>
                          Endereço: {address.address}, número ({address.number})
                        </p>
                        <p>Bairro: {address.neighborhood}</p>
                        <p>
                          {address.city} - {address.state}
                        </p>
                      </div>
                      <button
                        type="submit"
                        onClick={() => handleSubmit(address.id)}
                      >
                        Deletar
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <h1>n tem endereço</h1>
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
