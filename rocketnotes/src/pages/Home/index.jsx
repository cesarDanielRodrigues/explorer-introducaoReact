import { FiPlus,FiSearch } from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from '../../components/input'

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>RocketNote</h1>
      </Brand>
      <Header></Header>
      <Menu>
        <li>
          <ButtonText title={"Todos"} />
        </li>
        <li>
          <ButtonText title={"ReactJS"} />
        </li>
        <li>
          <ButtonText title={"NodeJS"} />
        </li>
      </Menu>
      <Search>
        <Input  placeholder="Pesquisar pelo título" />
      </Search>
      <Content></Content>
      <NewNote>
        <FiPlus/>
        Nova Nota
      </NewNote>
    </Container>
  )
}
