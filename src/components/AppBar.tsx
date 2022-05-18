import { Box, Center, Flex } from '@chakra-ui/layout'
import React from 'react'
import { Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { BsGithub } from 'react-icons/bs'
import { SunIcon } from '@chakra-ui/icons'

export default function AppBar() {
    return (
        <Flex justifyContent={'center'}
            position={'fixed'}
            bgColor={'hsla(0, 0%, 100%, .3)'}
            backdropFilter={'blur(5px)'}
            width={'100vw'}
            height={'56px'}>
            <Flex dir='row' width={'50%'} justifyContent={'space-between'}>
                <Flex alignItems={'center'} >
                    <Box>Marsh Chew</Box>
                </Flex>
                <Flex flexDir={'row'} gap={4} alignItems={'center'} width={'50%'}>
                    <Text>Works</Text>
                    <Text>Posts</Text>
                    <Flex dir='row' alignItems={'center'}>
                        <BsGithub />
                        <Text marginLeft={'3px'}>Source</Text>
                    </Flex>
                </Flex>
                <Flex alignItems={"center"}>
                    <Button bgColor={'purple.500'}>
                        <SunIcon />
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}