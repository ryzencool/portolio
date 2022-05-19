import { extendTheme} from '@chakra-ui/react'

const theme = extendTheme({
    initialColorMode: 'light',
    useSystemColorMode: false,
    fonts: {
        heading: 'M PLUS Rounded 1c',
        body: 'Raleway, sans-serif',
    },
})

export default theme