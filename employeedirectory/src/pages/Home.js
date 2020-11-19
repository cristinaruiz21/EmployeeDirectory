import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


function Home(){
    return(
        <div>
            <Hero backgroundImage="https://www.politicalanimalmagazine.com/wp-content/uploads/2019/10/Personal-Crowd-Silhouettes-Human-Group-Of-People-2045498.jpg">
                <h1>Employee Directory</h1>
                <h2>View the super stars that keep this company running</h2>
            </Hero>
            <Container style={{marginTop:30}}>
                <Row>
                    <Col size="md-12">
                        <h1>Welcome to the Employee Directory!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <p>
                            Employees
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;