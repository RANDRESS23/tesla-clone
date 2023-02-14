import { useEffect } from 'react'
import Model from '../components/Model'
import { STATS_SOLAR_PANELS } from '../services/StatsModels'

export default function SolarPanels () {
  useEffect(() => {
    document.title = 'Solar Panels | Tesla'
  }, [])

  return (
    <div>
      <Model
        bgUrlImage='solar-panel-second.jpg'
        titleModel='Solar for Existing Roofs'
        SubTitleModel='Schedule a Virtual Consultation'
        stats={STATS_SOLAR_PANELS}
      />
    </div>
  )
}
