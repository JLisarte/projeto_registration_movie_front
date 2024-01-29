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

  ::-webkit-scrollbar {
    width: 8px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
    
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.SALMON};

    border-radius: 8px;
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
    width: 20px;
    height: 20px;
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