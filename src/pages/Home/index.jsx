import { Container, Brand, Menu, Search, Content, NewNote } from "./styles"

import { FiPlus, FiSearch } from "react-icons/fi"

import { Header } from "../../components/Header"

import { ButtonText } from "../../components/ButtonText"

import { Input } from "../../components/Input"

import { Section } from "../../components/Section"

import { Note } from "../../components/Note"

export function Home(){
  return(
    <Container>

      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header>

      </Header>

      <Menu>
        <li><ButtonText title="Todos" isActived/></li>
        <li><ButtonText title="Frontend"/></li>
        <li><ButtonText title="Node"/></li>
        <li><ButtonText title="React"/></li>
      </Menu>

      <Search>
      <Input placeholder="Search for title" icon={FiSearch}/>
      </Search>

      <Content>
        <Section title="My Notes">
          <Note data={{
            title: 'React',
            tags:[
              {id:'1', name: 'react'},
              {id:'2', name: 'rocketseat'}
            ]
            }}/>
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus/>
        Create Note
      </NewNote>


    </Container>
  )

}