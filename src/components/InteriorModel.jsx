import { useState } from 'react'
import styled from 'styled-components'
import InfoInteriorModel from './InfoInteriorModel'
import SliderVideosInterior from './SliderVideosInterior'

export default function InteriorModel ({ VIDEOS, EXTRA_INFO }) {
  const [videoActive, setVideoActive] = useState({
    nameVideo: 'interior1.mp4',
    titleInfoInterior: 'Cinematic Experience',
    descriptionInfoInterior: 'A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.',
    idVideo: 0
  })

  return (
    <InteriorModelContainer>
      <TitleInterior>Interior of the Future</TitleInterior>
      <InteriorModelImageContainer>
        <GradientBlackEffect />
        <InteriorImage src='../../public/images/new-interior.jpg' alt='' />
      </InteriorModelImageContainer>
      <SliderVideosInterior
        VIDEOS={VIDEOS}
        videoActive={videoActive}
        setVideoActive={setVideoActive}
      />
      <InfoInteriorModel
        videoActive={videoActive}
        setVideoActive={setVideoActive}
        VIDEOS={VIDEOS}
        EXTRA_INFO={EXTRA_INFO}
      />
    </InteriorModelContainer>
  )
}

const InteriorModelContainer = styled.div`
  padding-top: 80px;
  padding-bottom: 40px;
  background-color: #000;
`

const TitleInterior = styled.h2`
  font-size: 30px;
  font-weight: 600;
  color: #fff;
  text-align: center;
`

const InteriorModelImageContainer = styled.div`
  width: 100%;
  height: 700px;
  padding-top: 60px;
  padding-bottom: 135px;
  background-color: #000;
`
const GradientBlackEffect = styled.div`
  width: 100%;
  height: 100px;
  background: linear-gradient(#000, transparent);
  position: absolute;
`

const InteriorImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
