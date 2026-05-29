'use client'
import { Box, Fade, IconButton } from '@mui/material'
import { useRef, useState } from 'react'

const HeroVideo = () => {
    const url = '/vid.webm'
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(true)

    const togglePlay = async () => {
        if (!videoRef.current) return

        if (videoRef.current.paused) {
            await videoRef.current.play()
            setIsPlaying(true)
        } else {
            videoRef.current.pause()
            setIsPlaying(false)
        }
    }


    const content = (
            <Fade in={true} timeout={2000} unmountOnExit>
                <div>
                    <Box
                        component="video"
                        poster="/poster.png"
                        playsInline
                        muted
                        loop
                        preload="metadata"
                        autoPlay
                        style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                            objectFit: 'cover',
                        }}
                        aria-label="video showcase"
                        ref={videoRef}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                    >
                        <source src={url} type="video/webm" />
                        <p>Video not available.</p>
                    </Box>
                    <IconButton
                        onClick={() => togglePlay()}
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: '25px',
                            zIndex: 3,
                            color: '#5646e3',
                            '&:hover': {
                                color: '#210aeb'
                            },
                        }}
                    >
                        {isPlaying ? 'II' : 'Paused'}
                    </IconButton>
                </div>
            </Fade>
    )

    return content
}

export default HeroVideo