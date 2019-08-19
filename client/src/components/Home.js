import React from 'react';
import Form from 'react-bootstrap/Form';
import {Container, Row, Col} from 'react-bootstrap';

function Home() {
	return (
		<Container>
			<Row className="justify-content-md-center">
				<Col></Col>
				<Col xs="8">
					<h1>Share your notes here!</h1>
					<Form onSubmit={searchNote}>
						<Form.Control placeholder='Search your notes'></Form.Control>
					</Form>
				</Col>
				<Col></Col>
			</Row>
		</Container>
	);
}

function searchNote() {
	alert("You clicked on a fake search box");
}

export default Home;