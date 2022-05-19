import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import React from 'react'
import { Avatar, Button, chakra, Image, useColorModeValue } from '@chakra-ui/react'
import { BsGithub, BsTwitter } from 'react-icons/bs'
import {MainTitle, ContactButton} from '../components/Sections'



const Home: React.FC = () => {

    return (
        <Flex flexDirection='column' alignItems={'center'} >
            <Flex flexDir={'column'} alignItems={'center'} width={'30%'} marginTop={'76px'}>
                <Box bgImage={'https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
                    backgroundSize={'100% 100%'}
                    borderRadius={10}
                    width={'100%'}
                    height={'300px'}
                />
                <Flex flexDirection={'column'} width={'100%'} alignItems='center'>
                    <Flex flexDir={'column'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        bgColor={'hsla(0, 0%, 100%, .6)'}
                        backdropFilter={'blur(5px)'}
                        borderRadius={8}
                        height={'56px'}
                        width={'100%'}
                        marginTop={'20px'}
                        textAlign='center' >
                        <Text>Hello, I'm an indie app developer based in China!</Text>
                    </Flex>

                    <Flex flexDir={'row'} justifyContent={'space-between'} marginTop={'30px'} width={'100%'}>
                        <Box>
                            <Heading fontWeight={'bold'} fontSize={'3xl'}>Marsh Chew</Heading>
                            <Text fontSize={'16px'}>Digital Craftsman(Ar/Developer/Designer)</Text>
                        </Box>
                        <Box>
                            <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/code-beast' />
                        </Box>
                    </Flex>

                    <Box marginTop={'20px'} width={'100%'}>
                        <MainTitle as={'span'} marginBottom={'10px'}>Work</MainTitle>
                        <Text marginTop={'8px'}>
                            Marsh is a freelance and a full-stack developer based in Nanjing with a passion
                            for building digital services/stuff he wants.
                            He has a knack for all things launching products,
                            from planning and designing all the way to solving real-life problems with code.
                            When not online, he loves archery and table tennis.
                        </Text>
                    </Box>

                    <Box marginTop={'20px'} width={'100%'}>
                        <MainTitle as={'span'}>BIO</MainTitle>
                        <Flex flexDir={"row"} gap={4} marginTop='8px'>
                            <Text fontWeight={'bold'}>1994</Text>
                            <Text>Born in Nantong, China.</Text>
                        </Flex>
                        <Flex flexDir={"row"} gap={4}>
                            <Text fontWeight={'bold'}>2017</Text>
                            <Text> Completed the Bachelor's Program in the Jiangsu University Of Science And Technology(JUST)</Text>
                        </Flex>
                        <Flex flexDir={"row"} gap={4}>
                            <Text fontWeight={"bold"}>2017 to 2018</Text>
                            <Text>Worked at Nanjing Qianmi</Text>
                        </Flex>
                        <Flex flexDir={'row'} gap={4}>
                            <Text fontWeight={'bold'}>2018 to 2020</Text>
                            <Text>Worked at Shanghai Wanxiang BlockChain</Text>
                        </Flex>
                        <Flex flexDir={'row'} gap={4}>
                            <Text fontWeight={'bold'}> 2020 to 2022</Text>
                            <Text>Worked at Nanjing Lifang(Start-up)</Text>
                        </Flex>
                        <Flex flexDir={'row'} gap={4}>
                            <Text fontWeight={'bold'}>2022 to present</Text>
                            <Text>Works as a freelance</Text>
                        </Flex>
                    </Box>

                    <Box marginTop={'20px'} width={'100%'}>
                        <MainTitle as="span">I Love</MainTitle>
                        <Text marginTop={'8px'}>Design, Music, Archery, Coding</Text>
                    </Box>

                    <Box marginTop={'20px'} width={'100%'}>
                        <MainTitle as={'span'}>On the web</MainTitle>
                        <chakra.ul marginTop={'10px'} listStyleType={'none'}>
                            <chakra.li>
                                <ContactButton  leftIcon={<BsGithub />} >
                                    <chakra.a href='https://github.com/ryzencool'>Github</chakra.a>
                                </ContactButton>
                            </chakra.li>
                            <chakra.li>
                                <ContactButton  leftIcon={<BsTwitter />}>
                                    <chakra.a href='https://twitter.com/zmyjust'>Twitter</chakra.a >
                                </ContactButton>
                            </chakra.li>
                        </chakra.ul>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Home;