import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas:
    "header header"
    "brand newnote"
    "content content";
    
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`

export const Brand = styled.div`
  grid-area: brand;
`

export const NewNote = styled.button`
  grid-area: newnote;
`

export const Content = styled.div`
  grid-area: content;
`
