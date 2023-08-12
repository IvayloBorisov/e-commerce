import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, useDisclosure } from "@chakra-ui/react";
import FormModal from "../components/FormModal";
import DataItem from "../components/DataItem";
import { fetchUsers } from '../store/thunks/user/fetchUsers'
import UserForm from "../components/UserForm";
import Panel from "../components/Panel";


const UsersListPage = () => {

    const dispatch = useDispatch();
    const { data } = useSelector(state => state.user);
    const { isOpen, onClose, onOpen } = useDisclosure();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const renderedUsers = data.map(user => <DataItem key={ user.id } title={ `${user.firstName} ${user.lastName}` } />);

    return (
        <>
            <Panel subtitle='Users' button={ <Button m='0 auto' onClick={onOpen}>Add User</Button> }>
                { renderedUsers.length && renderedUsers }
            </Panel>

            <FormModal onClose={onClose} isOpen={isOpen} title='Add User'>
                <UserForm onClose={onClose} />
            </FormModal>
        </>
    )
}

export default UsersListPage;
