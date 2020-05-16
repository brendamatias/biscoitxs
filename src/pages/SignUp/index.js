import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import getValidationErrors from '~/utils/getValidationErrors';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

import Input from '~/components/Input';
import Button from '~/components/Button';

import { Container, Content, AnimationContainer, Background } from './styles';

export default function SignUp() {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email(),
        password: Yup.string().min(
          6,
          'A senha deve conter no mínimo 6 dígitos'
        ),
        password_confirmation: Yup.string().min(
          6,
          'A senha deve conter no mínimo 6 dígitos'
        ),
      });

      schema.validate(data, { abortEarly: false });

      dispatch(signUpRequest(data.name, data.email, data.password));
    } catch (err) {
      if (err) {
        const errors = getValidationErrors(err);

        formRef.current.setErrors(errors);
      }
    }
  }

  return (
    <Container>
      <Background />

      <Content>
        <AnimationContainer>
          <img src={logo} alt="Biscoitxs" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input name="name" icon={FiUser} placeholder="Nome completo" />
            <Input name="email" icon={FiMail} placeholder="Email" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Input
              name="password_confirmation"
              icon={FiLock}
              type="password"
              placeholder="Confirmação de senha"
            />

            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/login">
            <FiArrowLeft /> Já tenho uma conta
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
}
