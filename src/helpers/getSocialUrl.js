import { useStore } from '@nanostores/react'
import { authorData } from '../stores/authorStore'

const getSocialUrl = (socialName) => {
  const $authorData = useStore(authorData)

  const socialObj = $authorData.socials.find(
    (social) => social.name === socialName
  )
  return socialObj.url
}

export default getSocialUrl
