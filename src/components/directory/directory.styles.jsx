import styled from 'styled-components'

export const DirectoryContainer = styled.div`
  height: calc(100vh - 200px);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width:800px){
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`