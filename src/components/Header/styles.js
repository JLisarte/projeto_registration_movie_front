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

    color: ${({ theme }) => theme.COLORS.SALMON}
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 16px;
    line-height: 24px;

    Strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    a {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      background: none;

    }
  }
`