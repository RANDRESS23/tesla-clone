import { useEffect, useContext } from 'react'
import Model from '../components/Model'
import { STATS_MODEL_3 } from '../services/StatsModels'
import styled from 'styled-components'

import { ScrollbarContext } from '../Context/ScrollbarContext'

export default function Model3 () {
  const { scrollbarHidden } = useContext(ScrollbarContext)

  useEffect(() => {
    document.title = 'Model 3 | Tesla'
  }, [])

  return (
    <Container scrollbarHidden={scrollbarHidden}>
      <Model
        bgUrlImage='model-3-second.webp'
        titleModel='Model 3'
        SubTitleModel='Schedule a Demo Drive'
        stats={STATS_MODEL_3}
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
