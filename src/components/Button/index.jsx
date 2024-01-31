import { FiPlus } from "react-icons/fi"
import { Container } from "./styles"

export function Button({ title, add = false, ...rest }) {
  return (
    <Container 
      type="button" 
      disabled={add} 
      {...rest}>
      {add ? 'carregando': title}
    </Container>
  )
}
