import styled from "styled-components";

export const Container = styled.div`
  margin: 40px 0;

  > h1 {
    padding-bottom: 16px;
    margin-bottom: 28px;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 20px;
    font-weight: 400;
  }

  .children {
    background-color: ${({ theme }) => theme.COLORS.BG_SECTION};

    padding: 16px;

    border-radius: 10px;
  }
`