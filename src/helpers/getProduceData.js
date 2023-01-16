import { useStore } from '@nanostores/react'
import { produceData } from '../stores/produceStore'

const getProduceData = () => {
  const $produceData = useStore(produceData)

  return $produceData
}

export default getProduceData
