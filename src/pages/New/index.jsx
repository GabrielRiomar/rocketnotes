import { useState } from "react"

import { Header } from "../../components/Header"

import { Input } from "../../components/Input"

import { useNavigate } from "react-router-dom"

import { NoteItem } from "../../components/NoteItem"

import { Section } from "../../components/Section"

import { TextArea } from "../../components/TextArea"

import { Button } from "../../components/Button"

import { ButtonText } from "../../components/ButtonText"

import { Container, Form } from "./styles"

import { api } from "../../services/api"

export function New(){
  const[title, setTitle] = useState('')
  const[description, setDescription] = useState('')

  const[links, setLinks] = useState([])
  const[newLink, setNewLink] = useState('')

  const[tags, setTags] = useState([])
  const[newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

  function handleAddLink(){
    setLinks(prevState => [...prevState, newLink])
    setNewLink("")
  }

  function handleRemoveLink(deleted){
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote(){
    if(!title){
      return alert("Field title in blank")
    }

    if(newLink){
      return alert("There's a Link on the field below Useful Links that you didn't added")
    }

    if(newTag){
      return alert("There's a Tag on the field below Markers that you didn't added")
    }
    
    await api.post("/notes", {
      title,
      description,
      tags,
      links
    })

    alert ('Note successfully created')
    navigate(-1)
  }


  return(
    <Container>
      <Header/>

      <main>
        <Form>
          <header>
            <h1>Create note</h1>
            <ButtonText title="Back" onClick={handleBack}/>
          </header>

          <Input 
            placeholder="Title"
            onChange={e => setTitle(e.target.value)}
          />

          <TextArea
            placeholder="Comments"
            onChange={e => setDescription(e.target.value)}
          />
          <Section title="Useful Links">
            {
              links.map((link, index) => (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
                ))
            }
            <NoteItem
              isNew
              placeholder="New Link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Markers">
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }

              <NoteItem
                isNew
                placeholder="New Tag"
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button 
            title="Save"
            onClick={handleNewNote}
          />
        </Form>
      </main>
    </Container>
  )
}