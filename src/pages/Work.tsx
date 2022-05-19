import { Box, Flex, Text } from '@chakra-ui/layout';
import React from 'react'
import { MainTitle } from '../components/Sections';
import { WorkContentProps } from '../components/WorkContent';
import WorkContent from '../components/WorkContent';

const Work: React.FC = () => {

    const works: WorkContentProps[] = [
        {
            image: 'https://images.unsplash.com/photo-1588795909-b9f9f9f9f9f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            appName: '力方智充(LFZC)',
            appDescription: 'A  system for charing the power of the electric vehicle. Include MiniProgram, IOT, and IoT Cloud.'
        }
    ]

    return (
        <Flex flexDir={'column'} alignItems={'center'} >
            <Flex flexDir={'column'} alignItems={'center'} marginTop={'76px'}>
                <Box width={'85%'} >
                    <MainTitle as={'span'}>Collaborations</MainTitle>
                    <Flex flexDir={'row'} justifyContent={'space-between'} marginTop={'16px'} gap={3} >
                        {
                            works.map((work, index) =>
                                <WorkContent key={index} {...work} />
                            )
                        }
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Work;