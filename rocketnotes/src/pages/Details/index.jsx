import { Container, Links } from "./style"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/tag"
import { Button } from "../../components/Button"

export function Details() {
  return (
    <Container>
      <Header />
      <Section title="Link úteis">
        <Links>
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>
              <a href="#">Link 1</a>
            </li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express"/>
        <Tag title="nodejs"/>
      </Section>


      <Button title="Voltar" />
    </Container>
  )
}
