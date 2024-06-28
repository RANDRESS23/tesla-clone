import { useEffect, useContext } from 'react'
import Model from '../components/Model'
import { STATS_SOLAR_PANELS } from '../services/StatsModels'

import { ScrollbarContext } from '../Context/ScrollbarContext'
import styled from 'styled-components'

export default function SolarPanels () {
  const { scrollbarHidden } = useContext(ScrollbarContext)

  useEffect(() => {
    document.title = 'Solar Panels | Tesla'
  }, [])

  return (
    <Container scrollbarHidden={scrollbarHidden}>
      <Model
        bgUrlImage='solar-panel-second.webp'
        titleModel='Solar for Existing Roofs'
        SubTitleModel='Schedule a Virtual Consultation'
        stats={STATS_SOLAR_PANELS}
      />
    </Container>
  )
}

const Container = styled.div`
  overflow-x: hidden;
  overflow-y: ${({ scrollbarHidden }) => scrollbarHidden ? 'hidden' : 'auto'};
  height: 100vh;
  position: relative;
`
