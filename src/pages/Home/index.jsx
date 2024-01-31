import { FiPlus } from 'react-icons/fi';
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
          <Button icon={FiPlus} title="Adicionar Filmes" />
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