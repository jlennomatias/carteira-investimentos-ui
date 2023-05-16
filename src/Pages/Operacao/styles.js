import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 50vh;
  min-width: 100vw;

  h1 {
    color: white;
    font-size: 20px;
    font-weight: light;
  }

  p { 
    color: white;
    font-size: 16px;
    font-weight: bold; 
  }

  a {
    color: white;
    font-size: 14px;
  }
`
export const SubContainerSign = styled.div`
  flex-direction: row;
  gap: 0px 20px;
  align-items: center;
`