import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  max-width: 864px;
  margin: 9rem auto 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme.colors['base-input']};
    color: ${(props) => props.theme.colors['base-label']};
    padding: 1rem;
  }
`

export const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
