// https://github.com/bedimcode/responsive-mini-portfolio/blob/project-from-scratch/preview.png

import { Box, Container, Text, Avatar, ActionIcon, MediaQuery } from "@mantine/core";

import { FaGithub, FaLinkedin, FaEnvelope, FaFacebookSquare } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <Container size="xl" sx={{ 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
      }}>
          <Avatar alt="Image of me" src="simonm.webp" sx={{
            borderRadius: '100%',
            position: 'relative',
            width: "150px !important",
            height: '150px !important',
            outline: '3px solid rgba(0, 80, 255, 0.75)',
            outlineOffset: '5px',
            marginBottom: 25
          }}/>
        <Box sx={{ textAlign: 'center' }}>
          <Text sx={{ fontSize: 25, fontWeight: 700, color: '#0c151d', lineHeight: 1 }}>Simon Maribo</Text>
          <Text sx={{ fontWeight: 500, color: '#0050ff' }}>Software Engineer</Text>
        </Box>
        <Box sx={{ marginTop: 15, display: 'flex', flexDirection: 'row', gap: 10 }}>
          <ActionIcon variant="transparent" component="a" href="https://github.com/simonmaribo" target="_blank" sx={{
            color: '#0c151d',
            transition: 'all .25s ease-in 0s',
            '&:hover': { color: '#0050ff' }
          }}>
            <FaGithub style={{ width: 25, height: 25 }}/>
          </ActionIcon>
          <ActionIcon variant="transparent" component="a" href="https://github.com/simonmaribo" target="_blank" sx={{
            color: '#0c151d',
            transition: 'all .25s ease-in 0s',
            '&:hover': { color: '#0050ff' }
          }}>
            <FaLinkedin style={{ width: 25, height: 25 }}/>
          </ActionIcon>
          <ActionIcon variant="transparent" component="a" href="mailto:simonmaribo@outlook.dk" target="_blank" sx={{
            color: '#0c151d',
            transition: 'all .25s ease-in 0s',
            '&:hover': { color: '#0050ff' }
          }}>
            <FaFacebookSquare style={{ width: 25, height: 25 }}/>
          </ActionIcon>
          <ActionIcon variant="transparent" component="a" href="https://www.facebook.com/simon.maribo.18/" target="_blank" sx={{
            color: '#0c151d',
            transition: 'all .25s ease-in 0s',
            '&:hover': { color: '#0050ff' }
          }}>
            <FaEnvelope style={{ width: 25, height: 25 }}/>
          </ActionIcon>
        </Box>
        <MediaQuery query="(max-width: 360px)" styles={{ flexDirection: 'column', gap: 20}}>
          <Box sx={{ marginTop: 35, display: 'flex', flexDirection: 'row', gap: 50}}>
            <Box sx={{
              textAlign: 'center'
            }}>
              <Text sx={{ fontSize: 25, fontWeight: 700, color: '#0c151d' }}>4</Text>
              <Text sx={{ fontSize: 15, fontWeight: 500, color: '#0c151d', opacity: 0.85 }}>Years of experience</Text>
            </Box>
            <Box sx={{
              textAlign: 'center'
            }}>
              <Text sx={{ fontSize: 25, fontWeight: 700, color: '#0c151d' }}>25+</Text>
              <Text sx={{ fontSize: 15, fontWeight: 500, color: '#0c151d', opacity: 0.85 }}>Completed projects</Text>
            </Box>
            <Box sx={{
              textAlign: 'center'
            }}>
              <Text sx={{ fontSize: 25, fontWeight: 700, color: '#0c151d' }}>10+</Text>
              <Text sx={{ fontSize: 15, fontWeight: 500, color: '#0c151d', opacity: 0.85 }}>Satisfied customers</Text>
            </Box>
          </Box>
        </MediaQuery>
      </Container>
      <Box sx={{
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'center',
        marginBottom: 100,
        marginTop: 100
      }}>
        <MediaQuery query="(max-width: 690px)" styles={{ flexDirection: 'column' }} >
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 50  }}>
            <MediaQuery query="(max-width: 900px) and (min-width: 690px)" styles={{ minWidth: 300 }}>
              <Box sx={{
                backgroundColor: '#e5e5e5',
                backgroundImage: 'url("/projects/plexhost.png")',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                minWidth: 400,
                aspectRatio: "4 / 3",
                borderRadius: 5,
                overflow: 'hidden'
              }}>
                <Box component="a" href="https://plexhost.dk" target="_blank" sx={{
                  display: 'flex',
                  flexDirection: 'column-reverse',
                  width: '100%',
                  height: '100%',
                  backgroundColor: "rgba(0,0,0,1)",
                  opacity: 0,
                  transition: 'all 0.2s ease-in-out',
                  padding: '1.5rem',
                  "&:hover": {
                    opacity: 1,
                    backgroundColor: 'rgba(0,0,0,0.5)'
                  }
                }}>
                  <Text sx={{ fontWeight: 500, fontSize: 15, color: '#fff', opacity: 0.75 }}>Danish Minecraft Hosting Company</Text>
                  <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text sx={{ fontWeight: 700, fontSize: 25, color: '#fff' }}>PlexHost</Text>
                    <Text sx={{ fontWeight: 700, fontSize: 25, color: '#fff' }}>Since 2021</Text>
                  </Box>
                </Box>
              </Box>
            </MediaQuery>
            <MediaQuery query="(max-width: 900px) and (min-width: 690px)" styles={{ minWidth: 300 }}>
              <Box sx={{
                backgroundColor: '#e5e5e5',
                backgroundImage: 'url("/projects/plexit.png")',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                minWidth: 400,
                aspectRatio: "4 / 3",
                borderRadius: 5,
                overflow: 'hidden'
              }}>
                <Box component="a" href="https://plexit.dk" target="_blank" sx={{
                  display: 'flex',
                  flexDirection: 'column-reverse',
                  width: '100%',
                  height: '100%',
                  backgroundColor: "rgba(0,0,0,1)",
                  opacity: 0,
                  transition: 'all 0.2s ease-in-out',
                  padding: '1.5rem',
                  "&:hover": {
                    opacity: 1,
                    backgroundColor: 'rgba(0,0,0,0.5)'
                  }
                }}>
                  <Text sx={{ fontWeight: 500, fontSize: 15, color: '#fff', opacity: 0.75 }}>Danish Minecraft Server Network</Text>
                  <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text sx={{ fontWeight: 700, fontSize: 25, color: '#fff' }}>Plexit</Text>
                    <Text sx={{ fontWeight: 700, fontSize: 25, color: '#fff' }}>Since 2021</Text>
                  </Box>
                </Box>
              </Box>
            </MediaQuery>
          </Box>
        </MediaQuery>
      </Box>
    </>
  )
}
