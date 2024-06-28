import { useEffect, useContext } from 'react'
import Model from '../components/Model'
import { STATS_SOLAR_ROOF } from '../services/StatsModels'
import styled from 'styled-components'

import { ScrollbarContext } from '../Context/ScrollbarContext'

export default function SolarRoof () {
  const { scrollbarHidden } = useContext(ScrollbarContext)

  useEffect(() => {
    document.title = 'Solar Roof | Tesla'
  }, [])

  return (
    <Container scrollbarHidden={scrollbarHidden}>
      <Model
        bgUrlImage='solar-roof-second.webp'
        titleModel='Solar Roof'
        SubTitleModel='Schedule a Virtual Consultation'
        stats={STATS_SOLAR_ROOF}
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
