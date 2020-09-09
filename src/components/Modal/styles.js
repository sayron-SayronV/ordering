import styled from 'styled-components'

export const ModalBackDrop = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`

export const ModalWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1001;
  outline: none;
`

export const ModalDialog = styled.div`
  background-color: #FFF;
  padding: 20px;
  width: 45%;
  border-radius: 10px;
`

export const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0px 0px;
  button {
    width: 100%;
    border-radius: 32px;
    opacity: 1;
    height: 45px;
    &:nth-child(1) {
      margin-right: 25px;
    }
  }
`

export const ModalTitle = styled.h2`
  text-align: left;
  font: normal normal bold 35px/70px Tajawal;
  letter-spacing: 0px;
  color: #010300;
  opacity: 1;
  margin: 0px 0px;
  padding-left: 10px;
  text-transform: capitalize;
`

export const ModalIcon = styled.span`
  float: right;
  font-size: 30px;
  cursor: pointer;
`
