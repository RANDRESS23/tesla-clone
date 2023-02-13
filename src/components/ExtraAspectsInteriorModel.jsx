import styled from 'styled-components'

export default function ExtraAspectsInteriorModel ({ EXTRA_INFO }) {
  return (
    <ExtraAspectsInteriorModelContainer countInfo={EXTRA_INFO.length}>
      {
        EXTRA_INFO.map((info, index) => {
          const { title, description, imgUrl, imgAlt, isVideo } = info

          return (
            <ExtraInfoContainer key={title}>
              {
                (index + 1) % 2 !== 0 && (
                  <ImageExtraInfoContainer>
                    {
                      isVideo
                        ? <Video src={imgUrl} muted loop autoPlay />
                        : <ImageExtraInfo src={imgUrl} alt={imgAlt} />
                    }
                  </ImageExtraInfoContainer>
                )
              }
              <InfoExtraContainer
                style={(index + 1) % 2 === 0 ? { paddingRight: '140px' } : { paddingLeft: '140px' }}
              >
                <TitleExtraInfo>{title}</TitleExtraInfo>
                <DescriptionExtraInfo>{description}</DescriptionExtraInfo>
              </InfoExtraContainer>
              {
                (index + 1) % 2 === 0 && (
                  <ImageExtraInfoContainer>
                    {
                      isVideo
                        ? <Video src={imgUrl} muted loop autoPlay />
                        : <ImageExtraInfo src={imgUrl} alt={imgAlt} />
                    }
                  </ImageExtraInfoContainer>
                )
              }
            </ExtraInfoContainer>
          )
        })
      }
    </ExtraAspectsInteriorModelContainer>
  )
}

const ExtraAspectsInteriorModelContainer = styled.div`
  height: ${props => `${props.countInfo * 300}px`};
  display: grid;
  grid-template-rows: ${props => `repeat(${props.countInfo}, 1fr)`};
`

const ExtraInfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const ImageExtraInfoContainer = styled.div`
  width: 100%;
  height: 100%;
`

const ImageExtraInfo = styled.img`
  width: 100%;
  height: 100%;
`

const Video = styled.video`
  width: 100%;
  height: 100%;
`

const InfoExtraContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`

const TitleExtraInfo = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: #fff;
`

const DescriptionExtraInfo = styled.p`
  font-size: 15px;
  color: #fff;
  opacity: .8;
`
