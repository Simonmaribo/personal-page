import {MediaQuery, Box, Text} from '@mantine/core';

export default function Project({img, href, title, description, year}){
    return (
      <MediaQuery query="(max-width: 900px) and (min-width: 690px)" styles={{ minWidth: 300 }}>
        <Box sx={{
          backgroundColor: '#e5e5e5',
          backgroundImage: `url("${img}")`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          minWidth: 400,
          aspectRatio: "4 / 3",
          borderRadius: 5,
          overflow: 'hidden'
        }}>
          <Box component="a" href={href} target="_blank" sx={{
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
            <Text sx={{ fontWeight: 500, fontSize: 15, color: '#fff', opacity: 0.75 }}>{description}</Text>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text sx={{ fontWeight: 700, fontSize: 25, color: '#fff' }}>{title}</Text>
              <Text sx={{ fontWeight: 700, fontSize: 25, color: '#fff' }}>{year}</Text>
            </Box>
          </Box>
        </Box>
      </MediaQuery>
    )
}