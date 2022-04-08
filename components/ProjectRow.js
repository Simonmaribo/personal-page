import { MediaQuery, Box } from '@mantine/core';

export default function ProjectRow({children}){
    return (
        <MediaQuery query="(max-width: 690px)" styles={{ flexDirection: 'column' }} >
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 50  }}>{children}</Box>
        </MediaQuery>
    )
}