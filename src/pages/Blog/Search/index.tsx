import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import { ProfileGithubContext } from '../../../contexts/ProfileGithubContext'
import { SearchFormContainer, SearchHeader } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const SearchRepositories = useContextSelector(
    ProfileGithubContext,
    (context) => {
      return context.SearchRepo
    },
  )
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchRepositories(data: SearchFormInputs) {
    await SearchRepositories(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchRepositories)}>
      <SearchHeader>
        <h4>Publicações</h4>
        <span>6 publicações</span>
      </SearchHeader>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchFormContainer>
  )
}
