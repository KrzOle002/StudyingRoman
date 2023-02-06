import { AddButton } from 'components/atoms/AddButton/AddButton';
import { Title } from 'components/atoms/Title/Title';
import FormField from 'components/molecules/FormField/FormField';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { useState, useContext } from 'react';
import { UsersContext } from 'providers/UsersProviders';

const initialFormState = {
    name: '',
    attendance: '',
    average: '',
};

const Form = () => {

    const [formValue, setFormValue] = useState(initialFormState);
    const context = useContext(UsersContext)

    const handleInputChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,

        });
    };


    const handleSubmitUser = (e) => {
        e.preventDefault();
        context.handleAddUser(formValue);
        setFormValue(initialFormState)
    }
    return (
        <>
            <ViewWrapper as="form" onSubmit={handleSubmitUser}>
                <Title>Add new Student</Title>
                <FormField label="Name" id="name" name="name" value={formValue.name} onChange={handleInputChange} />
                <FormField label="Attendance" id="attendance" name="attendance" value={formValue.attendance} onChange={handleInputChange} />
                <FormField label="Average" id="average" name="average" value={formValue.average} onChange={handleInputChange} />
                <AddButton type="submit">Add</AddButton>
            </ViewWrapper>
        </>
    )

}
export default Form;