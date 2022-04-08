import { Avatar } from "@mantine/core"

export default function ProfileImage(){
    return (
        <Avatar alt="Image of me" src="simonm.webp" sx={{
          borderRadius: '100%',
          position: 'relative',
          width: "150px !important",
          height: '150px !important',
          outline: '3px solid rgba(0, 80, 255, 0.75)',
          outlineOffset: '5px',
          marginBottom: 25
        }}/>
    )
}