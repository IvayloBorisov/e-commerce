import { useState, useEffect } from 'react';
import { Flex, Box, Heading, UnorderedList, ListItem, Link } from '@chakra-ui/react';

const Footer = () => {

    const [ footerData, setFooterData ] = useState([]);

    useEffect(() => {

        const fetchFooterData = async () => {
            try {
                const response = await fetch('config/footerLinks.json');
                const { footerSections } = await response.json();
                setFooterData(footerSections);
            } catch (err) {
                throw new Error('Ooops Error' + err);
            }
        }

        fetchFooterData();

    }, []);

    let renderedContent;
    if (footerData.length) {
        renderedContent = footerData.map(({ heading, footerLinks }) => {
            return (
                <Box as='section' key={ heading }>
                    <Heading color='#666666' as='h3' size='md'>{ heading }</Heading>
                   <UnorderedList styleType='none' ml='0px'>
                    {
                        footerLinks.map(({name, url}) => {
                            return (
                                <ListItem key={ name } mt='5px'>
                                    <Link _hover={{color: '#666666'}} color='#b0b1b3' href={ url }>{ name }</Link>
                                </ListItem>
                            )
                        })
                    }
                   </UnorderedList>
                </Box>
            )
        });
    }

    return (
        <Flex bg='#eeeeee' py='50px' justify='center' gap='150px'>
            { renderedContent }
        </Flex>
    )
}

export default Footer;
