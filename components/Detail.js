import { Box, Text } from '@mantine/core';
export default function Detail({title, description}){
    return (
        <Box sx={{
          textAlign: 'center'
        }}>
            <Text sx={{ fontSize: 25, fontWeight: 700, color: '#0c151d' }}>{title}</Text>
            <Text sx={{ fontSize: 15, fontWeight: 500, color: '#0c151d', opacity: 0.85 }}>{description}</Text>
        </Box>
    )
}