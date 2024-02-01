import { Container } from "./styles"

export function Profile({ title } ) {
  return (
    <Container to="/profile">
      <div>
        <strong>Juliano Lisarte</strong>
        <a href="#">{ title }</a>
      </div>
      <img src="https://github.com/Jlisarte.png" alt="Foto do usuário" />
    </Container>
  )
}