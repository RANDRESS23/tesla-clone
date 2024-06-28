import { useEffect, useContext } from 'react'
import Model from '../components/Model'
import { STATS_MODEL_Y } from '../services/StatsModels'
import styled from 'styled-components'

import { ScrollbarContext } from '../Context/ScrollbarContext'

export default function ModelY () {
  const { scrollbarHidden } = useContext(ScrollbarContext)

  useEffect(() => {
    document.title = 'Model Y | Tesla'
  }, [])

  return (
    <Container scrollbarHidden={scrollbarHidden}>
      <Model
        bgUrlImage='model-y-second.webp'
        titleModel='Model Y'
        SubTitleModel='Schedule a Demo Drive'
        stats={STATS_MODEL_Y}
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
