import { Box, Flex, Text } from '@chakra-ui/layout';
import React from 'react'
import { MainTitle } from '../components/Sections';

const Work: React.FC = () => {
    return (
        <Flex flexDir={'column'} alignItems={'center'}>
            <Flex flexDir={'column'} alignItems={'center'} width={'30%'} marginTop={'70px'}>
                <Box width={'100%'}>
                    <MainTitle as={'span'}>Collaborations</MainTitle>
                    <Flex flexDir={'row'} justifyContent={'space-between'} marginTop={'16px'} gap={3} >
                        <Box width={'45%'}>
                            <Box bgColor={'red.100'} height={'150px'} borderRadius={8}></Box>
                            <Flex flexDir={'column'} alignItems={'center'} marginTop={'10px'} >
                                <Text fontWeight={'bold'}>
                                    力方智充(LFZC)
                                </Text>
                                <Text textAlign={'center'}>
                                    A  system for charing the power of the electric vehicle. Include MiniProgram, IOT, and IoT Cloud.
                                </Text>
                            </Flex>

                        </Box>
                    </Flex>
                </Box>
            </Flex >
        </Flex >)
}

export default Work;