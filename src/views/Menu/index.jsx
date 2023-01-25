import { useEffect } from 'react'
import { useStore } from '@nanostores/react'
import { activeMenuItemHighlight, menuItems } from '../../stores/menuStore'

import PageTitle from '../../components/PageTitle'
import { Link } from 'react-router-dom'

const Home = () => {
  const $menuItems = useStore(menuItems)

  useEffect(() => {
    activeMenuItemHighlight.set('Menu')
  }, [])

  return (
    <>
      <PageTitle title={'Menu'} />

      <section className='tools-menu'>
        <ul className='tools'>
          {$menuItems.map((item) => (
            <li key={item.name}>
              <Link to={item.route}>
                <img src={`/icons/${item.icon}`} alt='' />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Home
