import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";
import { useAuth } from '../../hooks/auth';

export function Header(){
  const { signOut } = useAuth()
  return(
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/gabrielriomar.png" alt="Foto do usuario gabrielriomar" />
        <div>
          <span>Bem-vindo,</span>
          <strong>Gabriel Riomar</strong>
        </div>
      </Profile>

      <Logout onClick={ signOut }>
        <RiShutDownLine/>
      </Logout>
    </Container>
  )
}