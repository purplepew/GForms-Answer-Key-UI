import { Box, Button, Typography } from '@mui/material'
import HeroVideo from './components/HeroVideo'

const page = async () => {

 
  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', xl: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        gap: { xs: 4, md: 8 },
        minHeight: '100vh',
        padding: 4,
        paddingTop: { xs: 8, xl: 4 },
        textAlign: 'left'
      }}
    >
      {/* Left Content Side */}
      <Box
        sx={{ maxWidth: "650px", width: '100%', textAlign: 'center' }}
      >
        <Typography
          component="h1"
          sx={{
            fontWeight: 700,
            lineHeight: 1.3,
            marginBottom: 3,
            fontSize: '2.5rem',
            color: '#bbb2f7'
          }}
          aria-label="description"
        >
          Generate an answer key to your Google Forms Quiz
        </Typography>

        <Button variant='contained' 
        sx={{ 
          '@keyframes abruptFadeIn': {
            '0%': { opacity: .7},
            '88%': { opacity: .7},
            '100%': {opacity: 1}
          },
          animation: 'abruptFadeIn 8s'
        }}
        LinkComponent={'a'}
        href='/get-started'
        >
          Get Started
        </Button>
      </Box>

      {/* Right Video Side */}
      <Box
        sx={{
          width: '100%',
          maxWidth: 850,
          borderRadius: 2,
          overflow: 'hidden',
          boxShadow: 3,
          height: 'auto',
          maxHeight: 450,
          position: 'relative'
        }}
      >
        <HeroVideo />
      </Box>
    </Box>
  )
}

export default page