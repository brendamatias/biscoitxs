import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

import Input from '~/components/Input';
import Button from '~/components/Button';

import { Container, Content, AnimationContainer, Background } from './styles';

import getValidationErrors from '~/utils/getValidationErrors';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const formRef = useRef(null);

  const handleSubmit = useCallback(async data => {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      schema.validate(data, {
        abortEarly: false,
      });

      dispatch(signInRequest(data.email, data.password));
    } catch (err) {
      if (err) {
        const errors = getValidationErrors(err);

        formRef.current.setErrors(errors);
      }
    }
  }, []);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="Biscoitxs" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu login</h1>

            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">Entrar</Button>

            <a href="forgot">Esqueci minha senha</a>
          </Form>

          <Link to="/register">
            <FiLogIn />
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
}
