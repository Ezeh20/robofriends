//import React from "react";
import React, { Fragment } from "react";

const Card = (props) => {
	const { name, email, id, age, phone } = props;
	return (
		<Fragment>
			<div className="tc b--solid br4 b--white-90 bg-black pa2 dib ma1 grow shadow-5">
				<h3>{id}</h3>
				<img src={`https://robohash.org/${id}?200x200`} />
				<h2>{name}</h2>
				<p>{email}</p>
				<p className="zz">{phone}</p>
			</div>
		</Fragment>
	);
};

export default Card;
