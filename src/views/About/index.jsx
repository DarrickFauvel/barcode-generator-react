import { useEffect } from 'react'
import { useStore } from '@nanostores/react'
import { authorData } from '../../stores/authorStore'
import { appData } from '../../stores/appStore'
import { activeMenuItemHighlight } from '../../stores/menuStore'

import PageTitle from '../../components/PageTitle'

const title = 'About redTools'

const About = () => {
  const $authorData = useStore(authorData)
  const $appData = useStore(appData)
  const $activeMenuItemHighlight = useStore(activeMenuItemHighlight)

  useEffect(() => {
    const setActiveMenuItemHighlight = (menuItemName) => {
      activeMenuItemHighlight.set(menuItemName)
    }
    setActiveMenuItemHighlight('About redTools')
  }, [])

  return (
    <section className='about'>
      <PageTitle title={title} />

      <p>
        <strong>{$appData.title}</strong> is a personal web application project
        by me, {$authorData.name}.
      </p>

      <p>
        It's purpose is to help me do my job at Target, more effectively and
        efficiently.
      </p>

      <p>If you find this app useful too, let me know.</p>

      <p>:D</p>

      <article>
        <p>This web app was developed using:</p>
        <ul>
          {$appData.techStack.map((item) => (
            <li key={item.name}>
              <strong>
                <a href={item.url} target='_blank'>
                  {item.name}
                </a>
              </strong>{' '}
              - {item.description}
            </li>
          ))}
        </ul>
      </article>
    </section>
  )
}

export default About
