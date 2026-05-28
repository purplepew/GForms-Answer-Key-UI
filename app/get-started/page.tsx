import { Box, Button, Stack, Typography } from '@mui/material'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import Details from './Details'

export const metadata: Metadata = {
  title: 'Browser Extension Setup Guide',
  description: 'How to install and use the Google Forms Quiz Assistant extension',
}

export const CodeSnippet = ({ children }: { children: ReactNode }) => (
  <Box
    component="span"
    sx={{
      backgroundColor: '#1f1f1f',
      p: 0.5,
      borderRadius: 2,
      display: 'inline',
      fontFamily: 'Monospace'
    }}
  >
    {children}
  </Box>
)


const page = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '980px',
        margin: '0 auto',
        padding: { xs: 2, md: 4 },
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        backgroundColor: '#1f1f1f',
        marginBottom: 2,
        minHeight: '100vh'
      }}
    >

      <Box>
        <Stack spacing={2}>
          <Typography component="h2" variant="h5">Quick start</Typography>
          <Box sx={{ backgroundColor: '#2f2f2f', p: 2, borderRadius: 2 }}>
            <ol style={{ margin: 0, paddingLeft: 18, color: '#c6d0e2' }}>
              <li>Download ZIP & extract folder. <Button LinkComponent={'a'} href={process.env.NEXT_PUBLIC_GFORMS_EXTENSION_DOWNLOAD_LINK} variant='outlined' size='small' sx={{ transform: 'scale(.7) ', transformOrigin: 'top' }}>download</Button></li>
              <li>Open your browser's extensions page (<CodeSnippet>chrome://extensions</CodeSnippet>, <CodeSnippet>edge://extensions</CodeSnippet>, or <CodeSnippet>about:addons</CodeSnippet>) and enable Developer mode then Load unpacked.</li>
              <li>Create Gemini key in AI Studio and paste into the extension popup.</li>
              <li>Open Google Form and use Batch or Single Answer.</li>
            </ol>
          </Box>
        </Stack>
      </Box>

      <Details />
    </Box>
  )
}

export default page