import { Box, Flex, Heading, Grid } from "@chakra-ui/react"

const Panel = ({ children, button, subtitle }) => {

    return (
        <Box p='50px' minH='100vh'>
            <Flex justify='center' direction='column' my='50px'>
                <Heading textTransform='capitalize' as='h3' size='lg' textAlign='center' mb='10px'>List of {subtitle}</Heading>
                { button }
            </Flex>
            <Grid templateColumns='repeat(2, 4fr)' gap='50px'>
                { children }
            </Grid>
        </Box>
    )
}

export default Panel;
