import { Container, Form, Avatar } from "./styles";

import { Link } from "react-router-dom"

import {  FiMail, FiUser, FiLock, FiArrowLeft, FiCamera } from "react-icons/fi"

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";


export function Profile(){
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
        icon={FiUser}/>

        <Input
        placeholder="E-mail"
        type="text"
        icon={FiMail}/>

        <Input
        placeholder="Old Password"
        type="password"
        icon={FiLock}/>

        <Input
        placeholder="New Password"
        type="password"
        icon={FiLock}/>

        <Button title="Save"/>
      </Form>
    </Container>
  )
}