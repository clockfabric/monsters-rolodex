import React from "react";

const SearchBox = props => {
	const { searchString, handleChange } = props;
	return (
		<input
			style={{ margin: "50px", padding: "10px" }}
			type='search'
			placeholder='search monsters'
			onChange={evt => handleChange(evt)}
			value={searchString}
		/>
	);
};

export default SearchBox;
