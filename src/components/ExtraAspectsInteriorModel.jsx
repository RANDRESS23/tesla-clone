import styled from 'styled-components'

export default function ExtraAspectsInteriorModel () {
  return (
    <ExtraAspectsInteriorModelContainer>
      <ExtraInfoContainer>
        <ImageExtraInfoContainer>
          <ImageExtraInfo src='../../public/images/connected-interior.jpg' alt='connected-interior' />
        </ImageExtraInfoContainer>
        <InfoExtraContainer style={{ paddingLeft: '140px' }}>
          <TitleExtraInfo>Stay Connected</TitleExtraInfo>
          <DescriptionExtraInfo>Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</DescriptionExtraInfo>
        </InfoExtraContainer>
      </ExtraInfoContainer>
      <ExtraInfoContainer>
        <InfoExtraContainer style={{ paddingRight: '140px' }}>
          <TitleExtraInfo>Sublime Sound</TitleExtraInfo>
          <DescriptionExtraInfo>A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are.</DescriptionExtraInfo>
        </InfoExtraContainer>
        <ImageExtraInfoContainer>
          <ImageExtraInfo src='../../public/images/sound-interior.jpg' alt='sound-interior' />
        </ImageExtraInfoContainer>
      </ExtraInfoContainer>
    </ExtraAspectsInteriorModelContainer>
  )
}

const ExtraAspectsInteriorModelContainer = styled.div`
  height: 600px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
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
