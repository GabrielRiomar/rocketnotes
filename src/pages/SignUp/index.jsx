import { useState } from "react"

import { Container, Form, Background } from "./styles"

import { Link, useNavigate } from 'react-router-dom'

import {  FiMail, FiLogIn, FiLock } from "react-icons/fi"

import { Input } from "../../components/Input"

import { Button } from "../../components/Button"

import { api } from '../../services/api'

export function SignUp(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp(){
    if(!name || !email || !password){
      return alert('Fill all the fields!')
    }

    api.post('/users', { name, email, password})
    .then(() => {
      alert('User successfully created')
      navigate('/')
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert('Failed to create user')
      }
    })
  }

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
        icon={FiLogIn}
        onChange={e => setName(e.target.value)}/>

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

        <Button title="Create" onClick={handleSignUp}/>

        <Link to="/">Back to Log In</Link>

      </Form>
    </Container>
  )

}