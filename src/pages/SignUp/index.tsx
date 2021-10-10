import React from 'react'
import { FiArrowDownLeft, FiMail, FiUser, FiLock } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
import { Conteiner, Content, Background } from './styles'

import Input from '../../components/Input'
import Button from '../../components/Button'

const SignUp: React.FC = () => (
  <Conteiner>
    <Background />
    <Content>
      <img src={logoImg} alt="goSnack" />
      <form>
        <h1>Faça seu cadastro</h1>
        <Input name="name" icon={FiUser} placeholder="Nome" />
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          placeholder="Senha"
          type="password"
        />

        <Button type="submit">Cadastrar</Button>
      </form>
      <a href="login">
        <FiArrowDownLeft />
        Voltar para login
      </a>
    </Content>
  </Conteiner>
)

export default SignUp
