import { useState } from 'react'

import { Container, Form, Background } from "./styles"

import {  FiMail, FiLogIn, FiLock } from "react-icons/fi"

import { Link } from 'react-router-dom'

import { Input } from "../../components/Input"

import { Button } from "../../components/Button"

import { useAuth } from '../../hooks/auth'

export function SignIn(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  function handleSignIn(){
    signIn({ email, password })
  }

  return(
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Application to manage and save useful links</p>

        <h2>Log In</h2>

        <Input
        placeholder="E-mail"
        type="text"
        icon={FiMail}
        onChange={e => setEmail(e.target.value)}/>

        <Input
        placeholder="Password"
        type="password"
        icon={FiLock}
        onChange={e => setPassword(e.target.value)}/>

        <Button title="Acess" onClick={handleSignIn}/>

        <Link to="/register">Create Account</Link>

      </Form>
      <Background/>
    </Container>
  )

}