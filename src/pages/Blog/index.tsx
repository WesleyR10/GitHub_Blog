import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import { SearchForm } from './Search'
import { ProfileGithubContext } from '../../contexts/ProfileGithubContext'
import { RepositoriesContainer } from './styles'

export function Blog() {
  const repositories = useContextSelector(ProfileGithubContext, (context) => {
    return context.repositories
  })

  const dateFormatter = new Intl.DateTimeFormat('pt-BR')

  console.log(repositories)
  return (
    <>
      <Header />
      <Profile />
      <SearchForm />

      <RepositoriesContainer>
        {repositories.map((repository) => (
          <div key={repository.id} className="card">
            <div className="cardHeader">
              <h1>{repository.name}</h1>
              <span>
                {dateFormatter.format(new Date(repository.created_at))}
              </span>
            </div>
            <span>{repository.description}</span>
          </div>
        ))}
      </RepositoriesContainer>
    </>
  )
}
