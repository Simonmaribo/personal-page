// https://github.com/bedimcode/responsive-mini-portfolio/blob/project-from-scratch/preview.png

import { Box, Container, Text, MediaQuery } from "@mantine/core";

import { FaGithub, FaLinkedin, FaEnvelope, FaFacebookSquare } from 'react-icons/fa';

import Project from "../components/Project";
import ProjectRow from '../components/ProjectRow';
import ContactIcon from '../components/ContactIcon';
import Detail from "../components/Detail";
import ProfileImage from "../components/ProfileImage";

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
        <ProfileImage/>
        <Box sx={{ textAlign: 'center' }}>
          <Text sx={{ fontSize: 25, fontWeight: 700, color: '#0c151d', lineHeight: 1 }}>Simon Maribo</Text>
          <Text sx={{ fontWeight: 500, color: '#0050ff' }}>Software Engineer</Text>
        </Box>
        <Box sx={{ marginTop: 15, display: 'flex', flexDirection: 'row', gap: 10 }}>
          <ContactIcon href="https://github.com/simonmaribo" icon={<FaGithub style={{ width: 25, height: 25 }}/>}/>
          <ContactIcon href="https://www.linkedin.com/in/simonmaribo" icon={<FaLinkedin style={{ width: 25, height: 25 }}/>}/>
          <ContactIcon href="https://www.facebook.com/simon.maribo.18" icon={<FaFacebookSquare style={{ width: 25, height: 25 }}/>}/>
          <ContactIcon href="mailto:simonmaribo@outlook.dk" icon={<FaEnvelope style={{ width: 25, height: 25 }}/>}/>
        </Box>
      </Container>
      <Box sx={{
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'center',
        marginBottom: 100,
        marginTop: 50
      }}>
        <ProjectRow>
          <Project 
            img={"/projects/plexhost.png"}
            href="https://plexhost.dk"
            title="Plexhost"
            description="Danish Minecraft Hosting Company"
            year={"Since 2021"}
          />
          <Project 
            img={"/projects/plexit.png"}
            href="https://plexit.dk"
            title="Plexit"
            description="Danish Minecraft Server Network"
            year={"Since 2021"}
          />
          <Project 
            img={"/projects/centox.png"}
            href="https://github.com/simonmaribo/centox"
            title="Centox"
            description="A self-hosted solution for creating/managing forms and applications."
            year={"Since 2022"}
          />
        </ProjectRow>
      </Box>
    </>
  )
}
