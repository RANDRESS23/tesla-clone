import { useEffect } from 'react'
import Model from '../components/Model'
import { STATS_MODEL_Y } from '../services/StatsModels'

export default function ModelY () {
  useEffect(() => {
    document.title = 'Model Y | Tesla'
  }, [])

  return (
    <div>
      <Model
        bgUrlImage='model-y-second.jpg'
        titleModel='Model Y'
        SubTitleModel='Schedule a Demo Drive'
        stats={STATS_MODEL_Y}
      />
    </div>
  )
}
