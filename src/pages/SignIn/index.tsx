import React from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
import { Conteiner, Content, Background } from './styles'

import Input from '../../components/Input'
import Button from '../../components/Button'

const SignIn: React.FC = () => (
  <Conteiner>
    <Content>
      <img src={logoImg} alt="goSnack" />
      <form>
        <h1>Faça seu login</h1>

        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          placeholder="Senha"
          type="password"
        />

        <Button type="submit">Entrar</Button>
        <a href="forgot">Esqueci minha senha</a>
      </form>
      <a href="login">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Conteiner>
)

export default SignIn
