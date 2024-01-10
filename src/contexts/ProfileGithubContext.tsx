import { api } from '../lib/axios'
import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'

interface ProfileGithub {
  name: string
  bio: string
  login: string
  company: string
  followers: number
  avatar_url: string
}

interface Repository {
  id: number
  name: string
  description: string
  created_at: string
}

interface ProfileGithubContextType {
  profileGithub: ProfileGithub
  repositories: Repository[]
  fetchProfile: (profileName: string) => Promise<void>
  fetchRepositories: (profileName: string) => Promise<void>
  SearchRepo: (query?: string) => Promise<void>
}

interface ProfileGithubProviderProps {
  children: ReactNode
}

export const ProfileGithubContext = createContext(
  {} as ProfileGithubContextType,
)

export function ProfileGithubProvider({
  children,
}: ProfileGithubProviderProps) {
  const [profileGithub, setProfileGithub] = useState<ProfileGithub>(
    {} as ProfileGithub,
  )
  const [repositories, setRepositories] = useState<Repository[]>([])

  const fetchProfile = useCallback(async (profileName?: string) => {
    const response = await api.get(`${profileName}`)

    setProfileGithub(response.data)
  }, [])

  const fetchRepositories = useCallback(async (profileName?: string) => {
    const response = await api.get(`${profileName}/repos`)

    setRepositories(response.data)
  }, [])

  const SearchRepo = useCallback(async (query?: string) => {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setRepositories(response.data)
  }, [])

  useEffect(() => {
    fetchProfile('diego3g')
    SearchRepo()
    fetchRepositories('WesleyR10')
  }, [fetchProfile, SearchRepo, fetchRepositories])

  return (
    <ProfileGithubContext.Provider
      value={{
        profileGithub,
        repositories,
        fetchProfile,
        fetchRepositories,
        SearchRepo,
      }}
    >
      {' '}
      {children}
    </ProfileGithubContext.Provider>
  )
}
