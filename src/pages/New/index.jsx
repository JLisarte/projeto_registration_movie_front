import { FiArrowLeft } from "react-icons/fi";
import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea"
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem"
import { Button } from "../../components/Button"

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>

          <a href="#">
            <FiArrowLeft /> 
            <ButtonText title="Voltar" />
          </a>

          <h1>Novo filme</h1>

          <div class="input">
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>

          <Textarea placeholder="Observações" />

          <Section title="Marcadores">
            <div class="noteItem">
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Novo marcador" />
            </div>
          </Section>

          <div class="button">
            <Button title="Excuir filme" />
            <Button title="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>
  )
}