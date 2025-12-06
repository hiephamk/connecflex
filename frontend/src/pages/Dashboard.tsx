import { Avatar, Box, Image, Heading, HStack, VStack, Grid, GridItem, Card, Text, Strong, Stack } from '@chakra-ui/react'
import React from 'react'

const Dashboard:React.FC = () => {
  return (
    <Box mt={"10px"} p={"20px"}>
        <Box w={"100%"}>
            <Box h={"300px"} bg={"#064A66"} roundedTop={"7px"}>
                <VStack pt={"40px"}>
                    <Image p={"20px"} w={"140px"} rounded={"100px"} src="avatar.jpeg"/>
                    <Heading fontSize={"45px"} color={"white"} p={"10px"} fontWeight={"bold"} fontFamily={"Lucida Bright"}>HIEP HUYNH</Heading>
                    <HStack>
                        <Heading fontSize={"24px"} color={"white"} fontFamily={"Lucida Bright"}>Full Stack Developer</Heading>
                        <Heading fontSize={"24px"} color={"white"} fontFamily={"Lucida Bright"}>|</Heading>
                        <Heading fontSize={"24px"} color={"white"} fontFamily={"Lucida Bright"}>Full Stack Developer</Heading>
                        <Heading fontSize={"24px"} color={"white"} fontFamily={"Lucida Bright"}>|</Heading>
                        <Heading fontSize={"24px"} color={"white"} fontFamily={"Lucida Bright"}>Full Stack Developer</Heading>
                    </HStack>
                </VStack>
            </Box>
            <HStack shadow="3px 3px 15px 5px rgb(75, 75, 79)" w={"100%"} h={"50px"} 
                gap={"20px"} justifyContent={"center"} roundedBottom={"7px"}>
                <Heading fontSize={"18px"} fontFamily={"Lucida Bright"}>About</Heading>
                <Heading fontSize={"18px"} fontFamily={"Lucida Bright"}>Skills</Heading>
                <Heading fontSize={"18px"} fontFamily={"Lucida Bright"}>Experience</Heading>
                <Heading fontSize={"18px"} fontFamily={"Lucida Bright"}>Education</Heading>
                <Heading fontSize={"18px"} fontFamily={"Lucida Bright"}>Projects</Heading>
            </HStack>
        </Box>
        <VStack>
            <Box mt={"20px"} shadow="3px 3px 15px 5px rgb(75, 75, 79)" w={"80%"} rounded={"7px"}>
                <Card.Root _hover={{transform: "scale(1.02)"}}>
                    <Card.Body>
                        <Card.Title fontSize={"40px"} fontFamily={"ucida Bright"} pb={"20px"} color={"#090DED"}>About Me</Card.Title>
                        <Card.Description>
                            <Stack gap={"100px"} flexDirection={"row"}>
                                <VStack gap={"10px"} w={"50%"}>
                                    <Text textAlign={"justify"} fontSize={"18px"}>
                                        Passionate software developer with 5+ years of experience building scalable web applications. 
                                        I specialize in modern JavaScript frameworks and have a proven track record of delivering high-quality solutions that drive business growth.
                                    </Text>
                                    <Text textAlign={"justify"} fontSize={"18px"}>
                                        I'm always eager to learn new technologies and tackle challenging problems. 
                                        When I'm not coding, you can find me contributing to open-source projects or mentoring junior developers.
                                    </Text>                              
                                </VStack>
                                <Box>
                                    <Heading fontWeight={"bold"} pb={"20px"}>Quick Facts</Heading>
                                    <Text fontSize={"18px"}><Strong fontWeight={"bold"}>Location:</Strong> Hämeenlinna, Finland</Text>
                                    <Text fontSize={"18px"}><Strong fontWeight={"bold"}>Years of Experience:</Strong> 5+</Text>
                                    <Text fontSize={"18px"}><Strong fontWeight={"bold"}>Languages:</Strong> English, Finnish</Text>
                                    <Text fontSize={"18px"}><Strong fontWeight={"bold"}>Availability:</Strong> Open to opportunities</Text>
                                </Box>
                            </Stack>                        
                        </Card.Description>
                    </Card.Body>
                </Card.Root>
            </Box>
            <Box mt={"20px"} shadow="3px 3px 15px 5px rgb(75, 75, 79)" w={"80%"} rounded={"7px"}>
                <Heading p={"20px"} fontSize={"40px"} fontFamily={"ucida Bright"} color={"#090DED"}>Skills & Expertise</Heading>
                <HStack gap={"4"} justifyContent={"space-evenly"} p={"20px"}>
                    <Box>
                        <Card.Root w={"320px"} bg={"#A7C9E6"} _hover={{transform: "scale(1.02)"}} h={"200px"}>
                            <Card.Body>
                                <Card.Title fontSize={"18px"} fontFamily={"ucida Bright"} pb={"20px"}>Frontend Development</Card.Title>
                                <Card.Description>
                                    <Text textAlign={"justify"} fontSize={"18px"}>
                                        React, Vue.js, TypeScript, HTML5, CSS3, Responsive Design
                                    </Text>                                                    
                                </Card.Description>
                            </Card.Body>
                        </Card.Root>
                    </Box>                    
                    <Box>
                        <Card.Root w={"320px"} bg={"#A7C9E6"} _hover={{transform: "scale(1.02)"}} h={"200px"}>
                            <Card.Body>
                                <Card.Title fontSize={"18px"} fontFamily={"ucida Bright"} pb={"20px"}>Backend Development</Card.Title>
                                <Card.Description>
                                    <Text textAlign={"justify"} fontSize={"18px"}>
                                        Node.js, Python, Express, REST APIs, GraphQL
                                    </Text>                                                    
                                </Card.Description>
                            </Card.Body>
                        </Card.Root>
                    </Box>                    
                    <Box>
                        <Card.Root w={"320px"} bg={"#A7C9E6"} _hover={{transform: "scale(1.02)"}} h={"200px"}>
                            <Card.Body>
                                <Card.Title fontSize={"18px"} fontFamily={"ucida Bright"} pb={"20px"}>Machine Learning</Card.Title>
                                <Card.Description>
                                    <Text textAlign={"justify"} fontSize={"18px"}>
                                        PyTorch, Scikit-Learn
                                    </Text>                                                    
                                </Card.Description>
                            </Card.Body>
                        </Card.Root>
                    </Box>                    
                </HStack>
            </Box>
        </VStack>
    </Box>
  )
}

export default Dashboard