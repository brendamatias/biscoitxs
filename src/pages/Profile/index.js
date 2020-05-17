import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@unform/web';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

import { updateProfileRequest } from '~/store/modules/user/actions';

import DefaultLayout from '~/pages/_layouts/default';

import Input from '~/components/Input';
import Button from '~/components/Button';
import Sidebar from '~/components/Sidebar';

import { Container, Content } from './styles';

export default function Profile() {
  const formRef = useRef(null);
  const dispatch = useDispatch();

  const loading = useSelector(state => state.auth.loading);
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <DefaultLayout>
      <Container>
        <Sidebar />
        <Content className="container">
          <Form initialData={profile} ref={formRef} onSubmit={handleSubmit}>
            <h1>Meu perfil</h1>

            <Input name="name" icon={FiUser} placeholder="E-mail" />
            <Input name="email" icon={FiMail} placeholder="email" />

            <hr />

            <Input
              name="old-password"
              icon={FiLock}
              type="password"
              placeholder="Senha antiga"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Nova senha"
            />
            <Input
              name="password_confirmation"
              icon={FiLock}
              type="password"
              placeholder="Confirmação de senha"
            />

            <Button type="submit">
              {loading ? 'Carregando' : 'Atualizar perfil'}
            </Button>
          </Form>
        </Content>
      </Container>
    </DefaultLayout>
  );
}
