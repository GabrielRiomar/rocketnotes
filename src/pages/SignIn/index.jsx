import { Container, Form, Background } from "./styles"

import {  FiMail, FiLogIn, FiLock } from "react-icons/fi"

import { Link } from 'react-router-dom'

import { Input } from "../../components/Input"

import { Button } from "../../components/Button"

export function SignIn(){
  return(
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Application to manage and save useful links</p>

        <h2>Log In</h2>

        <Input
        placeholder="E-mail"
        type="text"
        icon={FiMail}/>

        <Input
        placeholder="Password"
        type="password"
        icon={FiLock}/>

        <Button title="Acess"/>

        <Link to="/register">Create Account</Link>

      </Form>
      <Background/>
    </Container>
  )

}