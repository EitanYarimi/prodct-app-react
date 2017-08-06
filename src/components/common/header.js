import React from 'react';
import {  Navbar } from 'react-bootstrap';

const Header = () =>
{
	return(
			<Navbar collapseOnSelect>
			  	<Navbar.Header>
			    	<Navbar.Brand>My Store</Navbar.Brand>
			      <Navbar.Toggle />
			    </Navbar.Header>	  			
			</Navbar>
	);
};

export default Header;