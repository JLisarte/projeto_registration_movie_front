import { FiSearch } from "react-icons/fi"
import { Container, Profile } from "./styles"
import { Input } from "../../components/Input"

export function Header() {
  return (
    <Container>
      <Profile>
        <div>
          <strong>Juliano Lisarte</strong>
          <a href="/">sair</a>
        </div>
        <img src="https://github.com/Jlisarte.png" alt="Foto do usuário" />
      </Profile>
      <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
      <h1>RocketMovies</h1>
    </Container>
  )
}