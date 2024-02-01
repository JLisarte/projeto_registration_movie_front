import styled from "styled-components";
import { Link } from "react-router-dom"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

.firstDiv {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  margin-top: 50px;
}
`

export const Brand = styled.div`
  
`

export const NewNote = styled(Link)`
  
`

export const Content = styled.div`
  max-width: 1000px;
  display: flex;

  margin: 0 auto;
  padding: 10px;
`
