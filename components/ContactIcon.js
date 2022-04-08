import { ActionIcon } from "@mantine/core"

export default function ContactIcon({href, icon}){
    return (
        <ActionIcon variant="transparent" component="a" href={href} target="_blank" sx={{
          color: '#0c151d',
          transition: 'all .25s ease-in 0s',
          '&:hover': { color: '#0050ff' }
        }}>
            {icon}
        </ActionIcon>
    )
}