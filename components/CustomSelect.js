import React from "react";
import Select from "react-select";

const CustomSelect = ({ onChange, options, value, className }) => {
	const defaultValue = (options, value) => {
		return options ? options.find((option) => option.value === value) : null;
	};
	return (
		<div className={className}>
			<Select
				value={defaultValue(options, value)}
				onChange={(value) => onChange(value)}
				options={options}
			>
				<option value="">Select</option>
			</Select>
		</div>
	);
};

export default CustomSelect;
