import { Accordion, AccordionSummary, AccordionDetails, Box, Button, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { CodeSnippet } from './page'
import { ExpandMore } from '@mui/icons-material'

const Details = () => {
    return (
        <Accordion sx={{ backgroundColor: '#1f1f1f', borderRadius: 3,}} >
            <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel-content"
                id="panel-header"
            >
                <Typography component="span" style={{ fontWeight: 'bold' }}>
                    View In-Depth Documentation
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box>
                    <Stack spacing={1}>
                        <Typography component="h2" variant="h5">Step 1: Download the compressed folder (ZIP)</Typography>
                        <Box sx={{ backgroundColor: '#363636', p: 2, display: 'flex', gap: 2, alignItems: 'center', borderRadius: 2 }}>
                            <Box sx={{ flex: 1 }}>
                                <Typography component="p" variant="body2">Download the extension as a <strong>.zip</strong> file and save it somewhere easy to find (Desktop or Downloads).</Typography>
                            </Box>
                            <Button component="a" href={process.env.NEXT_PUBLIC_GFORMS_EXTENSION_DOWNLOAD_LINK} variant="contained" size="small" sx={{ whiteSpace: 'nowrap' }}>Download ZIP</Button>
                        </Box>
                    </Stack>

                    <Stack spacing={2}>
                        <Typography component="h2" variant="h5">Step 2: Unzip (extract) the folder</Typography>
                        <Box sx={{ backgroundColor: '#363636', p: 2, borderRadius: 2 }}>
                            <ol style={{ margin: 0, paddingLeft: 18, color: '#c6d0e2' }}>
                                <li>Find the downloaded <strong>.zip</strong> file.</li>
                                <li>Right-click it and choose <strong>Extract All...</strong>.</li>
                                <li>Pick a folder you can find later, then click <strong>Extract</strong>.</li>
                                <li>You should now have a normal folder (not a ZIP) containing files like <strong>manifest.json</strong>, <strong>background.js</strong>, <strong>content.js</strong>, and the popup files.</li>
                            </ol>
                        </Box>
                    </Stack>

                    <Stack spacing={2}>
                        <Typography component="h2" variant="h5">Step 3: Install the extension in your browser (Load unpacked)</Typography>
                        <Box sx={{ backgroundColor: '#363636', p: 2, borderRadius: 2 }}>
                            <ol style={{ margin: 0, paddingLeft: 18, color: '#c6d0e2' }}>
                                <li>Open your browser's extension page — use the appropriate link: <CodeSnippet>chrome://extensions</CodeSnippet> (Chrome), <CodeSnippet>edge://extensions</CodeSnippet> (Edge), or <CodeSnippet>about:addons</CodeSnippet> (Firefox).</li>
                                <li>Turn on <strong>Developer mode</strong> if your browser shows that option.</li>
                                <li>Click <strong>Load unpacked</strong> (or <strong>Load Temporary Add-on</strong> / equivalent) and select the extracted extension folder.</li>
                                <li>If installed correctly, you will see <strong>Google Forms Quiz Assistant</strong> in the extensions list for your browser.</li>
                                <li>Optional: use your browser's extensions menu to pin or keep the extension visible.</li>
                            </ol>
                        </Box>
                    </Stack>

                    <Stack spacing={2}>
                        <Typography component="h2" variant="h5">Step 4: Get a Gemini API key (Google AI Studio)</Typography>
                        <Box sx={{ backgroundColor: '#363636', p: 2, borderRadius: 2 }}>
                            <ol style={{ margin: 0, paddingLeft: 18, color: '#c6d0e2' }}>
                                <li>Open <a href="https://aistudio.google.com/" target="_blank" rel="noreferrer">Google AI Studio</a> and sign in.</li>
                                <li>Find the option to create or get an API key (wording may vary).</li>
                                <li>Create a new API key and copy it.</li>
                                <li>Keep the key private — do not share it in screenshots or chats.</li>
                            </ol>
                        </Box>
                    </Stack>

                    <Stack spacing={2}>
                        <Typography component="h2" variant="h5">Step 5: Save your Gemini key in the extension</Typography>
                        <Box sx={{ backgroundColor: '#363636', p: 2, borderRadius: 2 }}>
                            <ol style={{ margin: 0, paddingLeft: 18, color: '#c6d0e2' }}>
                                <li>Click the extension icon in the browser toolbar.</li>
                                <li>In the popup, find the <strong>Google AI Studio Token</strong> or <strong>API token</strong> field.</li>
                                <li>Paste your API key and click <strong>Save</strong>. You should see a "Token saved locally" message.</li>
                            </ol>
                            <Typography sx={{ color: '#c6d0e2', mt: 1 }}>
                                The key is saved in the browser's local extension storage and can be cleared any time.
                            </Typography>
                        </Box>
                    </Stack>

                    <Stack spacing={2}>
                        <Typography component="h2" variant="h5">Step 6: Use it on a Google Form quiz</Typography>
                        <Box sx={{ backgroundColor: '#363636', p: 2, borderRadius: 2 }}>
                            <ol style={{ margin: 0, paddingLeft: 18, color: '#c6d0e2' }}>
                                <li>Open a Google Form quiz page (URL should start with <CodeSnippet>https://docs.google.com/forms/</CodeSnippet>).</li>
                                <li>Wait for the page to fully load. A <strong>Quiz Assistant</strong> panel should appear near the form.</li>
                                <li>Use <strong>Batch Answer</strong> to get answers for all questions, or <strong>Single Answer</strong> for one question.</li>
                            </ol>
                        </Box>
                    </Stack>

                    <Stack spacing={2}>
                        <Typography component="h2" variant="h5">What to expect</Typography>
                        <Box sx={{ backgroundColor: '#363636', p: 2, borderRadius: 2 }}>
                            <ul style={{ margin: 0, paddingLeft: 18, color: '#c6d0e2' }}>
                                <li>Multiple-choice: tries to choose the best option.</li>
                                <li>Open-ended: gives a short likely answer.</li>
                                <li>Answers may be wrong — always review before submitting.</li>
                            </ul>
                        </Box>
                    </Stack>

                    <Stack spacing={2}>
                        <Typography component="h2" variant="h5">Troubleshooting (easy fixes)</Typography>
                        <Box sx={{ backgroundColor: '#363636', p: 2, borderRadius: 2 }}>
                            <Typography sx={{ color: '#c6d0e2' }}>If the extension does not show or the API key is missing:</Typography>
                            <ol style={{ margin: 0, paddingLeft: 18, color: '#c6d0e2' }}>
                                <li>Refresh the Google Form tab.</li>
                                <li>Confirm the URL starts with <CodeSnippet>https://docs.google.com/forms/</CodeSnippet>.</li>
                                <li>Go to <CodeSnippet>chrome://extensions</CodeSnippet> and ensure the extension is enabled.</li>
                                <li>If API requests fail, re-copy the key and save it again.</li>
                            </ol>
                        </Box>
                    </Stack>

                    <Stack spacing={2}>
                        <Typography component="h2" variant="h5">Privacy and safety</Typography>
                        <Box sx={{ backgroundColor: '#363636', p: 2, borderRadius: 2 }}>
                            <Typography sx={{ color: '#c6d0e2' }}>
                                The extension reads question text from Google Forms and sends it to the Gemini API to generate answers. Treat your API key like a password.
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}

export default Details