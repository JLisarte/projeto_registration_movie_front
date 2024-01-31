import { Container, Brand, NewNote, Content } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from "../../components/Section"
import { Note } from "../../components/Note"

export function Home() {
  return (
    <Container>
      <Header />

      <div class="firstDiv">
        <Brand>
          <h1>Meus Filmes</h1>
        </Brand>

        <NewNote>
          <Button title={"Adicionar Filmes"} disabled />
        </NewNote>
      </div>

      <Content>
        <Section>
          <Note
            data={{
              title: "Interestellar",
              tags: [
                { id: "1", name: "Ficção Científica" },
                { id: "2", name: "Drama" },
                { id: "3", name: "Família" },
              ],
            }}
          />
          <Note
            data={{
              title: "Interestellar",
              tags: [
                { id: "1", name: "Ficção Científica" },
                { id: "2", name: "Drama" },
                { id: "3", name: "Família" },
              ],
            }}
          />
          <Note
            data={{
              title: "Interestellar",
              tags: [
                { id: "1", name: "Ficção Científica" },
                { id: "2", name: "Drama" },
                { id: "3", name: "Família" },
              ],
            }}
          />
        </Section>
      </Content>
    </Container>
  )
}