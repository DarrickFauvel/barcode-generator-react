import { useStore } from '@nanostores/react'
import { authorData } from '../stores/authorStore'

const getAuthorName = () => {
  const $authorData = useStore(authorData)

  return $authorData.name
}

export default getAuthorName
