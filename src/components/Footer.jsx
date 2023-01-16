import getAuthorName from '../helpers/getAuthorName'
import getSocialUrl from '../helpers/getSocialUrl'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <p className='author'>Created by {getAuthorName()}</p>
        <a
          className='footer__link'
          href={getSocialUrl('Website')}
          target='_blank'>
          darrickdevelops.com
        </a>
      </div>
    </footer>
  )
}

export default Footer
