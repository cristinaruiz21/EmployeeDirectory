import React, {Component} from "react";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import employees from "../employees.json";


class Employee extends Component{
    state = {
        employees
    };

    render() {
        return (
            <Wrapper>
                <Title>Employee List</Title>
                {this.state.employees.map(employee => {
                    <EmployeeCard
                    id={employee.id}
                    key={employee.id}
                    name={employee.name}
                    image={employee.image}
                    occupation={employee.occupation}
                    location={employee.location}
                    />
                })}
            </Wrapper>
        )
    }
}

export default Employee;