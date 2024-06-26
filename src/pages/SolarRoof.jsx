import { useEffect } from 'react'
import Model from '../components/Model'
import { STATS_SOLAR_ROOF } from '../services/StatsModels'

export default function SolarRoof () {
  useEffect(() => {
    document.title = 'Solar Roof | Tesla'
  }, [])

  return (
    <div>
      <Model
        bgUrlImage='solar-roof-second.webp'
        titleModel='Solar Roof'
        SubTitleModel='Schedule a Virtual Consultation'
        stats={STATS_SOLAR_ROOF}
      />
    </div>
  )
}
