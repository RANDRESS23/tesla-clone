import { useEffect, useContext } from 'react'
import InteriorModel from '../components/InteriorModel'
import Model from '../components/Model'
import { STATS_MODEL_S } from '../services/StatsModels'
import { VIDEOS_MODEL_S } from '../services/VideosInfoInteriorModels'
import { EXTRA_INFO_MODEL_S } from '../services/ExtraInfoInteriorModels'
import styled from 'styled-components'

import { ScrollbarContext } from '../Context/ScrollbarContext'

export default function ModelS () {
  const { scrollbarHidden } = useContext(ScrollbarContext)
  console.log({ scrollbarHidden })
  useEffect(() => {
    document.title = 'Model S | Tesla'
  }, [])

  return (
    <Container scrollbarHidden={scrollbarHidden}>
      <Model
        bgUrlImage='model-s.webp'
        titleModel='Model S'
        SubTitleModel='Plaid'
        stats={STATS_MODEL_S}
      />
      <InteriorModel
        VIDEOS={VIDEOS_MODEL_S}
        EXTRA_INFO={EXTRA_INFO_MODEL_S}
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
