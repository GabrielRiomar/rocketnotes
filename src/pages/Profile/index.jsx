import { useState } from 'react'
import { useAuth } from '../../hooks/auth';
import { Container, Form, Avatar } from "./styles";

import { Link } from "react-router-dom"

import {  FiMail, FiUser, FiLock, FiArrowLeft, FiCamera } from "react-icons/fi"

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";


export function Profile(){
  const { user, updateProfile } = useAuth()
  const [name, setName]= useState(user.name)
  const [email, setEmail]= useState(user.email)
  const [passwordOld, setPasswordOld]= useState()
  const [passwordNew, setPasswordNew]= useState()

  async function handleUpdate(){
    const user = {
      name,
      email,
      old_password: passwordOld,
      password: passwordNew,
    }
    
    await updateProfile({ user })
  }

  return(
    <Container>
      <header>
        <Link to="/"><FiArrowLeft/></Link>
      </header>

      <Form>
      <Avatar>
        <img src="https://github.com/gabrielriomar.png" alt="User Picture" />
        <label htmlFor="avatar">
          <FiCamera/>
          <input type="file" id="avatar"/>
        </label>
      </Avatar>
      <Input
        placeholder="Name"
        type="text"
        icon={FiUser}
        value={name}
        onChange={e => setName(e.target.value)}/>

        <Input
        placeholder="E-mail"
        type="text"
        icon={FiMail}
        value={email}
        onChange={e => setEmail(e.target.value)}/>

        <Input
        placeholder="Old Password"
        type="password"
        icon={FiLock}
        onChange={e => setPasswordOld(e.target.value)}/>

        <Input
        placeholder="New Password"
        type="password"
        icon={FiLock}
        onChange={e => setPasswordNew(e.target.value)}/>

        <Button title="Save" onClick={handleUpdate}/>
      </Form>
    </Container>
  )
}