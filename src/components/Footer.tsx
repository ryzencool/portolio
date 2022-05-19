import { Box, Text } from '@chakra-ui/layout';
import React from 'react'

const Footer: React.FC = () => {
    return <Box marginTop={'20px'} paddingBottom={'30px'}>
        <Text color={'gray.600'} fontSize={'sm'} align={'center'} >© 2022 Marsh Chew. All Rights Reserved.</Text>
    </Box>
}

export default Footer;