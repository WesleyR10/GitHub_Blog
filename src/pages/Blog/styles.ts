import styled from 'styled-components'

export const RepositoriesContainer = styled.div`
  max-width: 864px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  .card {
    width: 26rem;
    height: 16.25rem;
    background-color: ${(props) => props.theme.colors['base-post']};
    border-radius: 10px;
    padding: 2rem;
    h1 {
      font-size: 1.25rem;
      color: ${(props) => props.theme.colors['base-title']};
      margin-bottom: 1.25rem;
    }
  }

  .cardHeader {
    display: flex;
    justify-content: space-between;
  }
`
