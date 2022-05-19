import { chakra } from '@chakra-ui/system'
import { Button, Text } from '@chakra-ui/react'
import React from 'react'


const MainTitle = chakra(Text, {
    baseStyle: {
        borderBottom: '3px solid black',
        paddingBottom: '3px',
        fontWeight: 'bold',
        fontSize: 'xl',
    }
})

const ContactButton = chakra(Button, {
    baseStyle: {
        background: 'transparent',
        _hover: { bgColor: 'green.50' },
        borderRadius: '10',
        color: 'green.500',
        outlineWidth: '0'
    }
})

export {
    MainTitle,
    ContactButton
}