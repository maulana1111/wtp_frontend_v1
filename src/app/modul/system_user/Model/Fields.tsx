import { ModalField } from "../../../../components/ModalForm/interface/interfaceForm";

export const UserFields: ModalField[] = [
    {id: 'id', label: "", type: 'hidden'},
    {id: 'username', label: "Username", type: 'text'},
    {id: 'first_name', label: "First Name", type: 'text'},
    {id: 'last_name', label: "Last Name", type: 'text'},
    {id: 'email', label: "Email", type: 'email'},
    {id: 'is_active', label: "Is Active", type: 'radio'},
    {id: 'group', label: 'Groups', type:'select', options: []}
]