import { useEffect } from 'react'
import Model from '../components/Model'
import { STATS_MODEL_3 } from '../services/StatsModels'

export default function Model3 () {
  useEffect(() => {
    document.title = 'Model 3 | Tesla'
  }, [])

  return (
    <div>
      <Model
        bgUrlImage='model-3-second.webp'
        titleModel='Model 3'
        SubTitleModel='Schedule a Demo Drive'
        stats={STATS_MODEL_3}
      />
    </div>
  )
}
