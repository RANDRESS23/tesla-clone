import { useEffect } from 'react'
import styled from 'styled-components'

export default function SliderVideosInterior ({ VIDEOS, videoActive, setVideoActive }) {
  useEffect(() => {
    const video = document.getElementById(videoActive.nameVideo)

    video.currentTime = 0
    video.play()
    video.addEventListener('ended', () => {
      const nextVideo = VIDEOS[videoActive.idVideo + 1] || VIDEOS[0]
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
    })

    return () => video.removeEventListener('ended', () => {})
  }, [videoActive])

  return (
    <SliderVideosContainer>
      <Slider>
        {
          VIDEOS.map(({ urlInterior }) => {
            const urlArr = urlInterior.split('/', -1)
            const videoName = urlArr[urlArr.length - 1]

            return (
              <Video src={urlInterior} key={videoName} id={videoName} active={videoName === videoActive.nameVideo} muted />
            )
          })
        }
      </Slider>
    </SliderVideosContainer>
  )
}

const SliderVideosContainer = styled.div`
  margin: auto;
  width: 95%;
  height: 550px;
  border-radius: 20px;
`

const Slider = styled.div`
  display: flex;
  width: 100%;
`

const Video = styled.video`
  width: 95%;
  height: 550px;
  position: absolute;
  object-fit: cover;
  border-radius: 20px;
  opacity: ${props => props.active ? 1 : 0};
  transition: .5s ease all;
`
