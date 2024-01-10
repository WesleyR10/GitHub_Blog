import { useContextSelector } from 'use-context-selector'
import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import {
  ProfileContainer,
  ProfileContent,
  ProfileDescription,
  ProfileDescriptionHeader,
  ProfileDetails,
} from './styles'
import { ProfileGithubContext } from '../../contexts/ProfileGithubContext'

export function Profile() {
  const profileGithub = useContextSelector(ProfileGithubContext, (context) => {
    return context.profileGithub
  })

  // console.log(profileGithub)
  return (
    <ProfileContainer>
      <ProfileContent>
        <img src={profileGithub.avatar_url} alt="" />
        <ProfileDescription>
          <ProfileDescriptionHeader>
            <h1>{profileGithub.name}</h1>
            <a href="#">
              GITHUB
              <span>
                <ArrowSquareOut size={14} />
              </span>
            </a>
          </ProfileDescriptionHeader>

          <p> {profileGithub.bio} </p>

          <ProfileDetails>
            <span>
              <GithubLogo /> {profileGithub.login}
            </span>
            <span>
              <Buildings />
              {profileGithub.company}
            </span>
            <span>
              <Users />
              {profileGithub.followers} seguidores
            </span>
          </ProfileDetails>
        </ProfileDescription>
      </ProfileContent>
    </ProfileContainer>
  )
}
