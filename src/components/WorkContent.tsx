import {Box, Flex, Text} from '@chakra-ui/react';
import React from 'react'


export interface WorkContentProps {
    image: string;
    appName: string;
    appDescription: string;
}

const WorkContent: React.FC<WorkContentProps> = (props) => {
    return (
        <Box width={'45%'}>
            <Box bgImage={props.image} backgroundSize={'100% 100%'} height={'150px'} borderRadius={8}></Box>
            <Flex flexDir={'column'} alignItems={'center'} marginTop={'10px'}>
                <Text fontWeight={'bold'}>
                    {props.appName}
                </Text>
                <Text textAlign={'center'}>
                    {props.appDescription}
                </Text>
            </Flex>
        </Box>
    )
}

export default WorkContent;
