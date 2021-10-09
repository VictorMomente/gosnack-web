import React from 'react'
import { FiLogIn } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
import { Conteiner, Content, Background } from './styles'

const SignIn: React.FC = () => (
  <Conteiner>
    <Content>
      <img src={logoImg} alt="goSnack" />
      <form>
        <h1>Faça seu login</h1>
        <input placeholder="E-mail" />
        <input placeholder="Senha" type="password" />
        <button type="submit">Entrar</button>
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
