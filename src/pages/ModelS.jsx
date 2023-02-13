import { useEffect } from 'react'
import InteriorModel from '../components/InteriorModel'
import Model from '../components/Model'
import { STATS_MODEL_S } from '../services/StatsModels'
import { VIDEOS_MODEL_S } from '../services/VideosInfoInteriorModels'
import { EXTRA_INFO_MODEL_S } from '../services/ExtraInfoInteriorModels'

export default function ModelS () {
  useEffect(() => {
    document.title = 'Model S | Tesla'
  }, [])

  return (
    <div>
      <Model
        bgUrlImage='model-s.jpg'
        titleModel='Model S'
        SubTitleModel='Plaid'
        stats={STATS_MODEL_S}
      />
      <InteriorModel
        VIDEOS={VIDEOS_MODEL_S}
        EXTRA_INFO={EXTRA_INFO_MODEL_S}
      />
    </div>
  )
}
