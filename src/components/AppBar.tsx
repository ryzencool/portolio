import { Box, Center, Flex } from '@chakra-ui/layout'
import React from 'react'
import { Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { BsGithub } from 'react-icons/bs'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode'
import { chakra } from '@chakra-ui/system'
import { NavigateFunction, useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'

export default function AppBar() {
    const { colorMode, toggleColorMode } = useColorMode()
    const navigate: NavigateFunction = useNavigate();
    const toggleColor = useColorModeValue('purple.500', 'orange.200')

    return (
        <Flex justifyContent={'center'}
            position={'fixed'}
            bgColor={'hsla(0, 0%, 100%, .3)'}
            backdropFilter={'blur(5px)'}
            width={'100vw'}
            height={'56px'}>
            <Flex dir='row' width={'50%'} justifyContent={'space-between'}>
                <Flex alignItems={'center'} >
                    <Box cursor={'pointer'} fontWeight={'bold'} onClick={() => navigate("/")}>
                        Marsh Chew
                    </Box>
                </Flex>
                <Flex flexDir={'row'} gap={7} alignItems={'center'} width={'50%'}>
                    <NavLink to={`work`}><Text >Works</Text></NavLink>
                    <Flex dir='row' alignItems={'center'}>
                        <BsGithub />
                        <chakra.a href='https://github.com/ryzencool/portolio'>
                            <Text marginLeft={'3px'}>
                                Source
                            </Text>
                        </chakra.a>
                    </Flex>
                </Flex>
                <Flex alignItems={"center"}>
                    <Button bgColor={toggleColor} onClick={() => {
                        toggleColorMode()
                    }} >
                        {colorMode === 'light' ?
                            <MoonIcon /> : <SunIcon />}
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}