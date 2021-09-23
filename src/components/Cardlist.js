import React from 'react';
import Card from './Card';


const Cardlist=({Robots})=> {
	const CardCounter=Robots.map((user,i)=>{
		return <Card key={i} name={Robots[i].name} id={Robots[i].id} email={Robots[i].email} age={Robots[i].age}/>
	});
	return(
	<div>
	 {CardCounter}
	</div>
		);
}
export default Cardlist;
   

   