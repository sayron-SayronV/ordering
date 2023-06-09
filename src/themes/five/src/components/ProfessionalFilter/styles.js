import styled, { css } from 'styled-components'

export const Container = styled.div`
  > h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    margin-top: 0px;
    margin-bottom: 16px;
  }
`

export const ProfessionalItem = styled.div`
  display: flex;
  align-items: center;
  padding: 11px;
  border: 1px solid ${props => props.theme.colors.gray200};
  border-radius: 7.6px;
  cursor: pointer;
  margin: 10px 6px;
  transition: all 0.3s linear;
  width: 205px;
  min-width: 205px;
  box-sizing: border-box;

  &:hover {
    background-color: ${props => props.theme.colors.primaryContrast};
  }

  > svg {
    height: 42px;
    width: 42px;
    min-width: 42px;
    margin-right: 12px;
    ${props => props.theme.rtl && css`
      margin-left: 12px;
      margin-right: 0px;
    `}
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin: 0px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${({ active }) => active && css`
    border: 1px solid ${props => props.theme.colors.primary};
  `}
`

export const ContentWrapper = styled.div`
  overflow: auto hidden;
  width: 100%;
`

export const ProfessionalListing = styled.div`
  display: flex;
`
