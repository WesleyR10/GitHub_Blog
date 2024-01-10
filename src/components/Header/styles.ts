import styled from 'styled-components'
import CoverImage from '../../assets/Cover.png'

export const HeaderContainer = styled.header`
  width: 100%;
  background-image: url(${CoverImage});
  background-size: cover;
  background-repeat: no-repeat;
  height: 18.75rem;
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`
