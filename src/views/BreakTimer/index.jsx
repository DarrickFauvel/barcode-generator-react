import PageTitle from '../../components/PageTitle'
import Timer from './components/Timer'

const BreakTimer = () => {
  const Alarm = () => <audio id='alarm_audio'></audio>

  return (
    <>
      <PageTitle title='Break Timer' />

      <section className='break-timers'>
        <Timer breakMinutes={0.05} />
        <br />
        <br />
        <Timer breakMinutes={15} />
        <br />
        <br />
        <Timer breakMinutes={30} />
      </section>
    </>
  )
}

export default BreakTimer
