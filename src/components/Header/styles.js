import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row-reverse;

  padding: 0 80px;

  > h1 {
    display: flex;
    align-items: center;

    margin-right: 16px;

    color: ${({ theme }) => theme.COLORS.SALMON};
  }
`