import { Container, Brand, NewNote, Content } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

export function Home() {
  return (
    <Container>
      <Header/>

      <Brand>
        <h1>Meus Filmes</h1>
      </Brand>

      <NewNote>
        <Button title={"Adicionar Filmes"}/>
      </NewNote>

      <Content>

      </Content>

    </Container>
  )
}