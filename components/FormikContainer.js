import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const FormikContainer = ({ children }) => {
  const dropDownOptions = [
    { key: "Select an option", value: "" },
    { key: "option 1", value: "option1" },
    { key: "option 2", value: "option2" },
    { key: "option 3", value: "option3" },
  ];
  const radioOptions = [
    { key: "option 1", value: "rOption1" },
    { key: "option 2", value: "rOption3" },
    { key: "option 3", value: "rOption3" },
  ];

  const checkOptions = [
    { key: "option 1", value: "cOption1" },
    { key: "option 2", value: "cOption3" },
    { key: "option 3", value: "cOption3" },
  ];

  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: [],
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkboxOption: Yup.array().required("Required"),
  });

  const onSubmit = (values) => {
    console.log(values, "Form data");
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="textarea"
            label="Description"
            name="description"
          />
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <FormikControl
            control="select"
            label="Select a topic"
            name="selectOption"
            options={dropDownOptions}
          />
          <FormikControl
            control="radio"
            label="Radio Topic"
            name="radioOption"
            options={radioOptions}
          />
          <FormikControl
            control="checkbox"
            label="Checkbox topics"
            name="checkboxOption"
            options={checkOptions}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
export default FormikContainer;
