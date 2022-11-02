import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const FormActions = styled.div`
  margin-top: 35px;
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  button {
    height: 44px;
    width: 100%;
    text-transform: lowercase;
    &:first-letter {
      text-transform: uppercase;
    }
  }
`

export const FormControl = styled.form`
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  input {
    box-sizing: border-box;
    margin: 10px 0px;
    height: 43px;
    width: 100%;
    &.internal_number,
    &.zipcode {
      flex: auto;
    }
    &::placeholder{
      color: #CBCBCB
    }
  }

  textarea {
    width: 100%;
    margin: 10px 0;
    border-radius: 7.6px;
    border: 1px solid ${props => props.theme.colors.gold};
    &::placeholder{
      color: #CBCBCB
    }
  }

  .input-autocomplete {
    width: 100%;
    background: #FFF;
    border: 1px solid #BBB;
    border-radius: 30px;
    font-size: 16px;
    padding: 7px 15px;
    outline: none;
    ::placeholder {
      color: #DBDCDB;
    }

    &:-ms-input-placeholder {
      color: #DBDCDB;
    }

    &::-ms-input-placeholder { /* Microsoft Edge */
      color: #DBDCDB;
    }
    &:focus {
      border-color: ${() => darken(0.07, '#CCC')};
    }
  }

  .google-control {
    .gps-button {
      border-radius: 7.6px;
    }

    input {
      border-radius: ${({ theme }) => theme?.general?.components?.layout?.type === 'pfchangs' ? '0px' : '7.6px'};
      border: 1px solid ${props => props.theme.colors.gold};

      &:focus {
        border: 1px solid ${props => props.theme.colors.gold};
      }
    }
  }

  .internal_number {
    width: 45%;
    ${({ removeInternalNumberMargin }) => !removeInternalNumberMargin && css`
      ${props => props.theme?.rtl ? css`
      margin-left: 15px;
      ` : css`
      margin-right: 15px;
      `}
    `}
  }

  .zipcode {
    width: 45%;
  }

  ${({ theme }) => theme?.general?.components?.layout?.type === 'pfchangs' && css`
    input, textarea, .input-autocomplete {
      border: 1px solid ${props => props.theme.colors.gold};
      border-radius: 0;
      &::placeholder{
        color: #959895
      }
      &:focus{
        border-color: ${props => props.theme.colors.gold};
      }
      &:-ms-input-placeholder {
        color: #959895;
      }
      &::-ms-input-placeholder { /* Microsoft Edge */
        color: #959895;
      }
    }
    `}

  @media (min-width: 481px) {
    padding: 10px;
  }
`

export const AddressWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  button {
    height: 41px;
    right: 1px;
    border: none;

    ${props => props.theme?.rtl && css`
      left: 1px;
      right: initial;
    `}

    svg {
      font-size: 18px;
    }
  }
`

export const WrapAddressInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  i {
    padding: 0px 10px;
  }

  svg {
    position: absolute;
    color: ${props => props.theme.colors.primary};
    top: 21px;
    left: 10px;
    font-size: 20px;
    ${props => props.theme?.rtl && css`
      right: 10px;
      left: initial;
    `}
  }

  input {
    background-position: left 10px center !important;
    background-repeat: no-repeat !important;
    background-size: 13px !important;
    padding: 7px 30px 7px 15px !important;
    ${props => props.theme?.rtl && css`
      padding: 7px 15px 7px 30px !important;
    `}
  }
`

export const AddressTagSection = styled.div`
  width: 100%;
  margin: 10px 0px;
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme?.general?.components?.layout?.type === 'pfchangs' && css`
    flex-wrap: wrap;
    justify-content: center;
  `}
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46px;
    height: 46px;
    border: none;
    color: #B1BCCC;

    img {
      width: 25px;
      height: 25px;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        font-size: 30px;
      }
    }
  }

  button.active {
    color: ${props => props.theme.colors.primary};
  }

  @media (min-width: 768px){
    ${({ theme }) => theme?.general?.components?.layout?.type === 'pfchangs' && css`
      justify-content: space-between;
      button{
        min-width: 100px;
        padding: 0 10px;
        width: 36px;
      }
    `}
  }
  @media (min-width: 1000px){
    ${({ theme }) => theme?.general?.components?.layout?.type === 'pfchangs' && css`
      justify-content: space-around;
      button{
        padding: 0 20px;
        min-width: 80px;
      }
    `}
  }
  @media (min-width: 1200px){
    ${({ theme }) => theme?.general?.components?.layout?.type === 'pfchangs' && css`
      flex-wrap: nowrap;
      justify-content: space-between;
      button{
        min-width: 100px;
      }
    `}
  }
`

export const WrapperMap = styled.div`
  width: 100%;
  height: 170px;
  > div {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
    border-radius: 15px;
  }
`

export const WrapperSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  span {
    width: 100%;
  }
`
