import { useState } from 'react'

import { useAuth } from '../../hooks/auth';

import { Container, Form, Avatar } from "./styles";

import { useNavigate } from "react-router-dom";

import { api } from '../../services/api';

import avatarPlaceHolder from '../../assets/avatar_placeholder.svg';

import { FiMail, FiUser, FiLock, FiArrowLeft, FiCamera } from "react-icons/fi"

import { Input } from "../../components/Input";

import { Button } from "../../components/Button";

import { ButtonText } from "../../components/ButtonText";


export function Profile(){
  const { user, updateProfile } = useAuth()
  const [name, setName]= useState(user.name)
  const [email, setEmail]= useState(user.email)
  const [passwordOld, setPasswordOld]= useState()
  const [passwordNew, setPasswordNew]= useState()
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder
  const [avatar, setAvatar]= useState(avatarUrl)
  const [avatarFile, setAvatarFile]= useState(null)
  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }
  
  async function handleUpdate(){
    const updated = {
      name,
      email,
      old_password: passwordOld,
      password: passwordNew,
    }

    const userUpdated = Object.assign(user, updated)
    
    await updateProfile({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(event){
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return(
    <Container>
      <header>
        <button onClick={handleBack}>
          <FiArrowLeft size={24}/>
        </button>
      </header>

      <Form>
      <Avatar>
        <img src={avatar}
        alt="User Picture" />

        <label htmlFor="avatar">
          <FiCamera/>
          <input 
          type="file" 
          id="avatar"
          onChange={handleChangeAvatar}/>
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