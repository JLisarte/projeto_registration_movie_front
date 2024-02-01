import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
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