import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

import Input from '~/components/Input';
import Button from '~/components/Button';

import { Container, Content, Background } from './styles';

import getValidationErrors from '~/utils/getValidationErrors';

export default function SignUp() {
  const formRef = useRef(null);

  const handleSubmit = useCallback(async data => {
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
      });

      await schema.validate(data, { abortEarly: false });
    } catch (err) {
      if (err) {
        const errors = getValidationErrors(err);

        formRef.current.setErrors(errors);
      }
    }
  }, []);

  return (
    <Container>
      <Background />

      <Content>
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

          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="register">
          <FiArrowLeft /> Já tenho uma conta
        </a>
      </Content>
    </Container>
  );
}
