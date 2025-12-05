import { Avatar, HStack, IconButton } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router'
import { useColorMode } from './ui/color-mode'
import { LuMoon, LuSun } from "react-icons/lu"

const NavBar:React.FC = () => {
    const {toggleColorMode, colorMode} = useColorMode()
  return (
    <HStack justifyContent={"space-between"} fontSize={"20px"} fontFamily={"ui-sans-serif"}
        fontWeight={"bold"} p={"10px"} px={"20px"}>

        <NavLink to="/">
            <Avatar.Root size={"xl"}>
                <Avatar.Image src="avatar.jpeg"/>
            </Avatar.Root>
        </NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">My Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <IconButton onClick={toggleColorMode} variant={"outline"} size={"2xl"}>
            {colorMode === "light" ? <LuSun/> : <LuMoon/>}
        </IconButton>
    </HStack>
  )
}

export default NavBar