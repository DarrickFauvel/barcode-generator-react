import PageTitle from '../../components/PageTitle'

const About = () => (
  <section className='about'>
    <PageTitle title='About myTools' />

    <p>
      <strong>myTools</strong> is a personal web application project by me,
      Darrick Fauvel.
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
        <li>ReactJS</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>AWS Amplify</li>
        <li>GitHub</li>
        <li>Visual Studio Code</li>
      </ul>
    </article>
  </section>
)

export default About
