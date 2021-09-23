import React from "react";


const SearchInput = ({SearchChange}) => {
	return (
		<div className='pa2'>
			<input
				className='pa3 ba b--none br3 b--green bg-lightest-blue'
				type="Search"
				placeholder="Robo Search"
				onChange={SearchChange}
			/>
		</div>
	);
};
export default SearchInput;
