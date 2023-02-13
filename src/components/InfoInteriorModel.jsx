import styled from 'styled-components'
import { VIDEOS } from '../services/VideosInfoInteriorModels'
import ExtraAspectsInteriorModel from './ExtraAspectsInteriorModel'

export default function InfoInteriorModel ({ videoActive, setVideoActive }) {
  const { idVideo, titleInfoInterior, descriptionInfoInterior } = videoActive

  const handleChangeInteriorInfo = ({ idVideoChange }) => {
    if (idVideoChange !== idVideo) {
      const video = document.getElementById(videoActive.nameVideo)
      video.pause()

      const nextVideo = VIDEOS[idVideoChange]
      const idNextVideo = VIDEOS.findIndex(video => video.urlInterior === nextVideo.urlInterior)
      const urlArr = nextVideo.urlInterior.split('/', -1)
      const videoName = urlArr[urlArr.length - 1]

      const { titleInfoInterior, descriptionInfoInterior } = nextVideo

      setVideoActive({
        titleInfoInterior,
        descriptionInfoInterior,
        nameVideo: videoName,
        idVideo: idNextVideo
      })
    }
  }

  return (
    <InfoInteriorModelContainer>
      <ChangeInteriorModelsInfoContainer>
        <CirclesSlideContainer>
          <CircleIconSlide>
            <CircleIcon
              isActiveInterior={idVideo === 0}
              onClick={() => handleChangeInteriorInfo({ idVideoChange: 0 })}
            />
          </CircleIconSlide>
          <CircleIconSlide>
            <CircleIcon
              isActiveInterior={idVideo === 1}
              onClick={() => handleChangeInteriorInfo({ idVideoChange: 1 })}
            />
          </CircleIconSlide>
          <CircleIconSlide>
            <CircleIcon
              isActiveInterior={idVideo === 2}
              onClick={() => handleChangeInteriorInfo({ idVideoChange: 2 })}
            />
          </CircleIconSlide>
          <CircleIconSlide>
            <CircleIcon
              isActiveInterior={idVideo === 3}
              onClick={() => handleChangeInteriorInfo({ idVideoChange: 3 })}
            />
          </CircleIconSlide>
          <CircleIconSlide>
            <CircleIcon
              isActiveInterior={idVideo === 4}
              onClick={() => handleChangeInteriorInfo({ idVideoChange: 4 })}
            />
          </CircleIconSlide>
        </CirclesSlideContainer>
        <TitleInfoInterior>{titleInfoInterior}</TitleInfoInterior>
        <DescriptionInfoInterior>{descriptionInfoInterior}</DescriptionInfoInterior>
      </ChangeInteriorModelsInfoContainer>
      <ExtraAspectsInteriorModel />
    </InfoInteriorModelContainer>
  )
}

const InfoInteriorModelContainer = styled.div`
  width: 78%;
  margin: 80px auto;
`

const ChangeInteriorModelsInfoContainer = styled.div`
  width: 55%;
  margin: auto;
`

const CirclesSlideContainer = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 12px;
  color: #fff;
`

const CircleIconSlide = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CircleIcon = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${props => props.isActiveInterior ? '#fff' : '#393c41'};
  transition: .5s ease all;
  cursor: ${props => props.isActiveInterior ? 'default' : 'pointer'};
`

const TitleInfoInterior = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #fff;
`

const DescriptionInfoInterior = styled.p`
  font-size: 16px;
  color: #fff;
  margin-bottom: 200px;
`
