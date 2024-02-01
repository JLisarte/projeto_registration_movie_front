import styled from "styled-components"

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
    overflow-y: auto;
  }

  a {
    color: ${({ theme }) => theme.COLORS.SALMON};
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
  }

  .input {
    display: flex;
    flex-direction: row;

    gap: 40px;
    margin: 40px 0;
  }

  .noteItem {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .button {
    display: flex;
    flex-direction: row;

    gap: 40px;
  }
`

export const Form = styled.form`
  max-width: 1100px;
  margin: 38px auto;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 36px;

    a {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`
