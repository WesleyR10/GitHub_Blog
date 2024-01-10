import styled from 'styled-components'

export const ProfileContainer = styled.div`
  max-width: 864px;
  margin: -5rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors['base-profile']};
  border-radius: 10px;
`
export const ProfileContent = styled.div`
  display: flex;
  padding: 2rem;
  gap: 2rem;
  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`
export const ProfileDescription = styled.div``

export const ProfileDescriptionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors['base-title']};

  h1 {
    font-size: 1.5rem;
  }

  span {
    color: ${(props) => props.theme.colors.blue};
  }

  a {
    display: flex;
    text-decoration: none;
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors.blue};
    gap: 0.5rem;
  }
`

export const ProfileDetails = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${(props) => props.theme.colors['base-subtitle']};

    svg {
      color: ${(props) => props.theme.colors['base-label']};
    }
  }
`
