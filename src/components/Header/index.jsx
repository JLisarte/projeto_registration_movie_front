import { FiSearch } from "react-icons/fi"
import { Container } from "./styles"
import { Input } from "../../components/Input"
import { Profile } from "../../components/Profile"

export function Header() {
  return (
    <Container>
      <div>
        <Profile title="sair"/>
        
      </div>
      <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      <h1>RocketMovies</h1>
    </Container>
  )
}