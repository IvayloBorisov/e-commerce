import { Box, Image, Flex, Heading, Text } from "@chakra-ui/react";
import ChakraRouterCustomLink from "../components/ChakraRouterCustomLink";

const Home = () => {

    return (
        <Box p='60px 150px' position='relative'>
            <Flex>
                <Box>
                    <Image boxSize='1000px' objectFit='cover' src='/women.jpg' alt='women' />
                </Box>
                <Box>
                    <Image boxSize='1000px' objectFit='cover' src='/men.jpg' alt='men' />
                </Box>
            </Flex>
            <Box position='absolute' top='50%' left='50%' transform='translateX(-50%) translateY(-50%)' textAlign='center'>
                <Box>
                    <Heading as='h1' fontSize='40px' fontWeight='800' bg='#2D2D2D' color='#fff' p='30px'>This is ASOS</Heading>
                    <Text bg='#2D2D2D' color='#fff' pb='20px'>ASOS DESIGN and 850+ brands</Text>

                </Box>
                <Flex justify='space-between'>
                    <Box>
                        <ChakraRouterCustomLink _hover={{bg: '#2D2D2D', color: '#fff'}} display='inline-block' py='8px' w='140px' fontWeight='600' mt='30px' textTransform='uppercase' bg='#fff' to='/fashion'>Shop women</ChakraRouterCustomLink>
                    </Box>
                    <Box>
                        <ChakraRouterCustomLink _hover={{bg: '#2D2D2D', color: '#fff'}} display='inline-block' py='8px' w='140px' fontWeight='600' mt='30px' textTransform='uppercase' bg='#fff' to='/fashion'>Shop men</ChakraRouterCustomLink>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default Home;
