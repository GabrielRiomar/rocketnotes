import { Container, Form, Background } from "./styles"

import { Link } from 'react-router-dom'

import {  FiMail, FiLogIn, FiLock } from "react-icons/fi"

import { Input } from "../../components/Input"

import { Button } from "../../components/Button"

export function SignUp(){
  return(
    <Container>
      <Background/>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Application to manage and save useful links</p>

        <h2>Create Account</h2>
        
        <Input
        placeholder="Name"
        type="text"
        icon={FiLogIn}/>

        <Input
        placeholder="E-mail"
        type="text"
        icon={FiMail}/>

        <Input
        placeholder="Password"
        type="password"
        icon={FiLock}/>

        <Button title="Create"/>

        <Link to="/">Back to Log In</Link>

      </Form>
    </Container>
  )

}