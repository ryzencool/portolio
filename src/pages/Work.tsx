import {Box, Flex, Heading, Text} from '@chakra-ui/layout';
import React from 'react'
import {ContactButton, MainTitle} from '../components/Sections';
import {WorkContentProps} from '../components/WorkContent';
import WorkContent from '../components/WorkContent';
import {Avatar, chakra} from "@chakra-ui/react";
import {BsGithub, BsTwitter} from "react-icons/bs";

const Work: React.FC = () => {

    const works: WorkContentProps[] = [
        {
            image: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            appName: '力方智充(LFZC)',
            appDescription: 'A  system for charing the power of the electric vehicle. Include MiniProgram, IOT, and IoT Cloud.'
        }
    ]

    return (
            <Flex flexDir={'column'} alignItems={'center'} width={'30%'}  marginTop={'76px'} flex={1} >
                <Box >
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
    )
}

export default Work;
