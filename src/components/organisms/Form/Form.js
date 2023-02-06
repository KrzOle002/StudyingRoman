import { AddButton } from 'components/atoms/AddButton/AddButton';
import FormField from 'components/molecules/FormField/FormField';
import { Wraper } from '../UserList/UserList.style';


const Form = ({ handleAddUser, formValue, handleInputChange }) => {
    return (
        <>
            <Wraper as="form" onSubmit={handleAddUser}>
                <h1>Add new Student</h1>
                <FormField label="Name" id="name" name="name" value={formValue.name} onChange={handleInputChange} />
                <FormField label="Attendance" id="attendance" name="attendance" value={formValue.attendance} onChange={handleInputChange} />
                <FormField label="Average" id="average" name="average" value={formValue.average} onChange={handleInputChange} />
                <AddButton type="submit">Add</AddButton>
            </Wraper>
        </>
    )

}
export default Form;