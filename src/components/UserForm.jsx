import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/thunks/user/addUser';
import { FormControl, Input, FormLabel, Box, Button, Flex } from "@chakra-ui/react";

const UserForm = ({ onClose }) => {

    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const handleFormChange = event => {
        const { value, name } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        dispatch(addUser(formValues))
            .unwrap()
            .catch(err => console.log(err));
    }

    return (
        <Box pb='15px'>
            <form onSubmit={handleFormSubmit} method='POST'>
                <Flex direction='column' gap='20px'>
                    <FormControl isRequired>
                        <FormLabel>First Name</FormLabel>
                        <Input type="text" name="firstName" placeholder="First Name" value={formValues.firstName} onChange={handleFormChange} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Last Name</FormLabel>
                        <Input type="text" name="lastName" placeholder="Last Name" value={formValues.lastName} onChange={handleFormChange}/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" name="email" placeholder="Email" value={formValues.email} onChange={handleFormChange} />
                    </FormControl>
                    <Box>
                        <Button type="submit" variant='solid' colorScheme="gray" onClick={onClose}>Submit</Button>
                    </Box>
                </Flex>
            </form>
        </Box>
    )
}

export default UserForm;

