import styled from 'styled-components'
import Section from '../components/Section'
import { Sections } from '../services/Sections'

export default function Home ({ showNavBurger }) {
  return (
    <Container>
      {
        Sections.map((section) => {
          const {
            title,
            subtitle,
            txtLeftButton,
            txtRightButton,
            backgroundImg
          } = section

          return (
            <Section
              key={title}
              title={title}
              subtitle={subtitle}
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
  scroll-snap-type: y mandatory;
  overflow-x: hidden;
  height: 100vh;
`
