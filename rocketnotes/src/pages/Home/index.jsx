import { FiPlus, FiSearch } from "react-icons/fi"

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/input"
import { Note } from "../../components/Note"
import { Section } from "../../components/Section"
import { Tag } from "../../components/tag"

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
        <Input placeholder="Pesquisar pelo título" />
      </Search>
      <Content>
        <Section title={"Minha notas"}>
          <Note
            data={{
              title: "React",
              tags: [
                { id: "1", name: "react" },
                { id: "2", name: "rockeseat" },
              ],
            }}
          />
        </Section>
      </Content>
      <NewNote>
        <FiPlus />
        Nova Nota
      </NewNote>
    </Container>
  )
}
