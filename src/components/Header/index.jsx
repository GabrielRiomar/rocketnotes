import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header(){
  return(
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/gabrielriomar.png" alt="Foto do usuario gabrielriomar" />
        <div>
          <span>Bem-vindo,</span>
          <strong>Gabriel Riomar</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container>
  )
}