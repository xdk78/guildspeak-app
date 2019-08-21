import styled from 'styled-components'

const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 12px;
    background-color: #2d2d31;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.3);
    background-color: #44444c;
  }
  user-select: none;
  font-size: 16px;
`

export { Wrapper }
