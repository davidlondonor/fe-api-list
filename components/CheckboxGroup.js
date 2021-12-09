import { Field, ErrorMessage } from "formik";
import TextErrors from "./TextErrors";
import React from "react";

const CheckboxGroup = (props) => {
	const { name, label, options, ...rest } = props;
	return (
		<div className="form-control">
			<label>{label}</label>
			<Field name={name} {...rest}>
				{({ field }) => {
					return options.map((option) => {
						return (
							<React.Fragment key={option.value}>
								<input
									type="checkbox"
									id={option.value}
									{...field}
									value={option.value}
									//checked={field.value.includes(option.value)}
								/>
								<label htmlFor={option.value}>{option.label}</label>
							</React.Fragment>
						);
					});
				}}
			</Field>
			<ErrorMessage name={name} component={TextErrors} />
		</div>
	);
};

export default CheckboxGroup;
