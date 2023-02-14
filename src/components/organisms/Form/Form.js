import { AddButton } from "components/atoms/AddButton/AddButton";
import { Title } from "components/atoms/Title/Title";
import FormField from "components/molecules/FormField/FormField";
import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper";
import { useMicroForm } from "hooks/useMicroForm";
import { UsersContext } from "providers/UsersProviders";
import { useContext } from "react";
const initialFormState = {
  name: "",
  attendance: "",
  average: "",
};

const Form = () => {
  const { handleAddUser } = useContext(UsersContext);
  const {
    formValue,
    handleInputChange,
    handleThrowError,
    handleToggleConsent,
    handleClearForm,
  } = useMicroForm(initialFormState);

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (formValue.consent) {
      handleAddUser(formValue);
      handleClearForm(initialFormState);
    } else {
      handleThrowError("You need to give consent");
    }
  };

  return (
    <ViewWrapper onSubmit={handleSubmitUser}>
      <Title>Add new Student</Title>
      <FormField
        label="Name"
        id="name"
        name="name"
        value={formValue.name}
        onChange={handleInputChange}
      />
      <FormField
        label="Attendance"
        id="attendance"
        name="attendance"
        value={formValue.attendance}
        onChange={handleInputChange}
      />
      <FormField
        label="Average"
        id="average"
        name="average"
        value={formValue.average}
        onChange={handleInputChange}
      />
      <FormField
        label="Consent"
        id="consent"
        name="consent"
        type="checkbox"
        onChange={handleToggleConsent}
      />
      <AddButton type="submit">Add</AddButton>
      {formValue.error ? <p>{formValue.error}</p> : null}
    </ViewWrapper>
  );
};
export default Form;
