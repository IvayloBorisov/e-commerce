import { useRef } from 'react';
import { Box, Text, Flex } from "@chakra-ui/react";
import ChakraRouterCustomLink from './ChakraRouterCustomLink';

const PromotionBanner = () => {

    return (
        <Flex bg='#000000' color='#fff' py='16px' justify='center'>
            <Flex alignItems='center' justifyContent='space-between' w='1200px'>
                <Box _hover={{opacity: '.6'}} transition='opacity 1s' border='1px solid #fff'>
                    <ChakraRouterCustomLink display='inline-block' p='8px' to='/fashion'>FASHION</ChakraRouterCustomLink>
                </Box>
                <Box>
                    <Text as='p'>
                        NEW HERE? Get 15% off everything! With code:
                        <Text ml='10px' as='span'>
                            HELLOASOS
                        </Text>
                    </Text>
                </Box>
                <Box _hover={{opacity: '.6'}} transition='opacity 1s' border='1px solid #fff'>
                    <ChakraRouterCustomLink display='inline-block' p='8px' to='/electronics'>ELECTRONICS</ChakraRouterCustomLink>
                </Box>
            </Flex>
        </Flex>
    )
}

export default PromotionBanner;
