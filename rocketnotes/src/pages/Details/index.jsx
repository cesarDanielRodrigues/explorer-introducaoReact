import { Container } from "./style"
import { Button } from "../../components/Button"

export function Details(){

  return(
    <Container>
      <h1>Hello World</h1>
      <span>César Daniel</span>
      <Button title="Entrar" loading/>
      <Button title="Cadastrar"/>
      <Button title="Voltar"/>
    </Container>
  )
}

