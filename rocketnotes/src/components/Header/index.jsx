import { Container, Profile } from "./styles";

export function Header(){
    return(
        <Container>
            <Profile>
                <img src="https://github.com/cesarDanielRodrigues.png" alt="Foto do usuário"/>

                <div>
                    <span>Bem-vindo,</span>
                    <strong>César Daniel</strong>
                </div>
            </Profile>
        </Container>
    )
}