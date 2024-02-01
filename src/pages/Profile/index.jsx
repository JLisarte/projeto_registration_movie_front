import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"


import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Form, Avatar } from "./styles"

export function Profile() {
  return (
    <Container>
      <header>
        <a to="/">
          <FiArrowLeft />
        </a>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/Jlisarte.png" alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />

            <input type="file" id="avatar" />
          </label>
        </Avatar>

        <Input placeholder="Nome" type="text" icon={FiUser} />

        <Input placeholder="E-mail" type="text" icon={FiMail} />

        <Input placeholder="Senha atual" type="password" icon={FiLock} />

        <Input placeholder="Nova senha" type="password" icon={FiLock} />

        <Button title="Salvar" />
      </Form>
    </Container>
  )
}
