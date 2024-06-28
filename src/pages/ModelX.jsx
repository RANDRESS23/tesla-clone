import { useEffect, useContext } from 'react'
import InteriorModel from '../components/InteriorModel'
import Model from '../components/Model'
import { STATS_MODEL_X } from '../services/StatsModels'
import { VIDEOS_MODEL_X } from '../services/VideosInfoInteriorModels'
import { EXTRA_INFO_MODEL_X } from '../services/ExtraInfoInteriorModels'

import { ScrollbarContext } from '../Context/ScrollbarContext'
import styled from 'styled-components'

export default function ModelX () {
  const { scrollbarHidden } = useContext(ScrollbarContext)

  useEffect(() => {
    document.title = 'Model X | Tesla'
  }, [])

  return (
    <Container scrollbarHidden={scrollbarHidden}>
      <Model
        bgUrlImage='model-x.webp'
        titleModel='Model X'
        SubTitleModel='Plaid'
        stats={STATS_MODEL_X}
      />
      <InteriorModel
        VIDEOS={VIDEOS_MODEL_X}
        EXTRA_INFO={EXTRA_INFO_MODEL_X}
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
