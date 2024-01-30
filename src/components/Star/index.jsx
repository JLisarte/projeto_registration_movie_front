import { Container } from "./styles";

import starOn from '../../assets/starOn.svg'
import starOff from '../../assets/starOff.svg'

export function Star({ isOn }) {
  return (
    <Container isOn={isOn}>
      <img 
        src={isOn ? starOn : starOff}/>
      
    </Container>
  )
}