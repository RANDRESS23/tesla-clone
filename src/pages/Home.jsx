import { useContext, useEffect } from 'react'
import styled from 'styled-components'
import Section from '../components/Section'
import { Sections } from '../services/Sections'
import { ScrollbarContext } from '../Context/ScrollbarContext'

export default function Home ({ showNavBurger }) {
  const { scrollbarHidden } = useContext(ScrollbarContext)

  useEffect(() => {
    document.title = 'Electric Cars, Solar & Clean Energy | Tesla'
  }, [])

  return (
    <Container scrollbarHidden={scrollbarHidden}>
      {
        Sections.map((section) => {
          const {
            title,
            subtitle,
            subscript,
            txtLeftButton,
            txtRightButton,
            backgroundImg
          } = section

          return (
            <Section
              key={title}
              title={title}
              subtitle={subtitle}
              subscript={subscript}
              txtLeftButton={txtLeftButton}
              txtRightButton={txtRightButton}
              backgroundImg={backgroundImg}
              showNavBurger={showNavBurger}
            />
          )
        })
      }
    </Container>
  )
}

const Container = styled.div`
  overflow-x: hidden;
  overflow-y: ${({ scrollbarHidden }) => scrollbarHidden ? 'hidden' : 'auto'};
  height: 100vh;
  position: relative;
`
