import { useEffect } from 'react'
import InteriorModel from '../components/InteriorModel'
import Model from '../components/Model'
import { STATS_MODEL_X } from '../services/StatsModels'
import { VIDEOS_MODEL_X } from '../services/VideosInfoInteriorModels'
import { EXTRA_INFO_MODEL_X } from '../services/ExtraInfoInteriorModels'

export default function ModelX () {
  useEffect(() => {
    document.title = 'Model X | Tesla'
  }, [])

  return (
    <div>
      <Model
        bgUrlImage='model-x.jpg'
        titleModel='Model X'
        SubTitleModel='Plaid'
        stats={STATS_MODEL_X}
      />
      <InteriorModel
        VIDEOS={VIDEOS_MODEL_X}
        EXTRA_INFO={EXTRA_INFO_MODEL_X}
      />
    </div>
  )
}
