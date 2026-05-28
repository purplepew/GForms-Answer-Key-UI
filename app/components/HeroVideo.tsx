'use client'

import { Box, Fade, IconButton } from '@mui/material'
import { useEffect, useRef, useState } from 'react'

const HeroVideo = () => {
    const [url, setUrl] = useState<string | null>(null)
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const togglePlay = async () => {
        if (!videoRef.current) return

        if (videoRef.current.paused) {
            videoRef.current.play()
            setIsPlaying(true)
        } else {
            videoRef.current.pause()
            setIsPlaying(false)
        }
    }

    useEffect(() => {
        const load = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/video`)
            const blob = await res.blob()
            const blobUrl = URL.createObjectURL(blob)
            setUrl(blobUrl)

            console.log(blobUrl)
        }

        load()
        setIsPlaying(true)

        return () => {
            if (url) URL.revokeObjectURL(url)
        }
    }, [])

    let content

    if (url) {
        content = (
            <>
                <Fade in={true} timeout={2000} unmountOnExit>
                    <Box
                        component="video"
                        poster="/poster.png"
                        playsInline
                        autoPlay
                        muted
                        loop
                        preload='none'
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
                </Fade>
                <IconButton
                    onClick={() => togglePlay()}
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: "25px",
                        zIndex: 3,
                        color: '#5646e3',
                        'hover': {
                            color: 'red'
                        }
                    }}
                >
                    {isPlaying ? "II" : "Paused"}
                </IconButton>
            </>
        )
    }

    return content

}

export default HeroVideo