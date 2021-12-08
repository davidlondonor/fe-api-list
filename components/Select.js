import { useFormik } from "formik";
import styles from "../styles/Home.module.css";
import CustomSelect from "./CustomSelect";
const options = [
	{ value: "developer", label: "Developer" },
	{ value: "designer", label: "Designer" },
	{ value: "other", label: "Other" },
];
const Select = (props) => {
	const validate = (values) => {
		const errors = {};
		if (!values.email) {
			errors.email = "Email is Required";
		}
		if (!values.job) {
			errors.job = "Job is Required";
		}
		return errors;
	};
	const formik = useFormik({
		initialValues: { email: "hola@nombre.com", job: "developer" },
		validate,
		onSubmit: (values) => {
			console.log(values, "values");
		},
	});

	return (
		<div className="select">
			<h1>Select</h1>
			<form onSubmit={formik.handleSubmit}>
				<label htmlFor="email">Email Adress</label>
				<input
					name="email"
					type="email"
					onChange={formik.handleChange}
					value={formik.values.email}
					className={styles.input}
				/>

				{formik.errors.email ? <div>{formik.errors.mail}</div> : null}
				<label htmlFor="job">Job</label>
				<CustomSelect
					options={options}
					value={formik.values.job}
					className={styles.input}
					onChange={(value) => formik.setFieldValue("job", value.value)}
				/>
				{formik.errors.job ? <div>{formik.errors.job}</div> : null}
				<button type="submit">Register</button>
			</form>
		</div>
	);
};

export default Select;
