import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 64px 0;
  }

`

export const Content = styled.div`
  width: 100%;
  margin: 0 auto;

  padding: 0 80px;

  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: start;
  }

  a {
    color: ${({ theme }) => theme.COLORS.SALMON};
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }

  .star{
    display:flex;
    flex-direction: row;
    
    gap: 10px;
  }

  h1 {
    font-size: 36px;
    font-weight: 500px;
    padding: 64px 0;
  }

  span {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  img {
    max-width: 20px;
    max-height: 20px;
  }
  
  .tag {
    display: flex;
    padding: 40px 0;
  }

  p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }
`