import { Box, Card, Center, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Dashboard:React.FC = () => {
  return (
    <Box mt={"10px"} p={"20px"}>
        <VStack flexDirection={"row"} justifyContent={"space-between"}>
            <Stack rounded={"7px"} w={"100%"} h={'100vh'} flexDirection={"row"}>
                <Card.Root w={"40%"} rounded={"10px"} p={"10px"} boxSizing={"border-box"}>
                    <Card.Description>
                        After completed a bachelor’s degree in computer applications from 
                        Häme University of Applied Sciences (HAMK – December 2025), Finland, 
                        I have a strong foundation in full-stack web development using JavaScript 
                        (React, React Native) and Python (Flask, Django), as well as experience working with 
                        databases such as PostgreSQL, MySQL, and MongoDB. Additionally, 
                        I have a background in data analytics and machine learning using Python, 
                        along with experience in Robotic Process Automation (RPA) using tools like 
                        UiPath and Robot Framework.I also hold a degree in 
                        Biomedical Engineering from HCM City University of Technology 
                        and have 15 years of experience in the medical equipment industry. 
                        My roles have included sales representative, medical equipment distributor, 
                        and producer of hospital beds and various medical devices for the Vietnamese market.
                    </Card.Description>
                </Card.Root>
                <Box>
                    <Image shapeOutside={"border-box"} w={'500px'} rounded={"80px"} src="banner.png"/>
                </Box>
                
            </Stack>
        </VStack>
    </Box>
  )
}

export default Dashboard