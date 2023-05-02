import { Header } from "../../components/Header"

import { Input } from "../../components/Input"

import { Link } from "react-router-dom"

import { NoteItem } from "../../components/NoteItem"

import { Section } from "../../components/Section"

import { TextArea } from "../../components/TextArea"

import { Button } from "../../components/Button"

import { Container, Form } from "./styles"

export function New(){
  return(
    <Container>
      <Header/>

      <main>
        <Form>
          <header>
            <h1>Create note</h1>
            <Link to="/">Back</Link>
          </header>

          <Input placeholder="Title"/>
          <TextArea placeholder="Comments"/>
          <Section title="Useful Links">
            <NoteItem value="https://rocketseat.com.br/"/>
            <NoteItem value="" placeholder="New Link" isNew/>
          </Section>

          <Section title="Markers">
            <div className="tags">
              <NoteItem value="react"/>
              <NoteItem value="react"/>
              <NoteItem value="react"/>
              <NoteItem value="" placeholder="New Tag" isNew/>
            </div>
          </Section>

          <Button title="Save"/>
        </Form>
      </main>
    </Container>
  )
}