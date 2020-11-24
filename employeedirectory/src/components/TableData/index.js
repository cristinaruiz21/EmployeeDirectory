import React, { Component } from "react";
import API from "../../utils/API";
import Search from "../SearchForm";
import Table from "../Table";

export default class TableData extends Component{
    state = {
        employees: [{}],
        filteredEmployees: [{}],
        order: "descend"
    }
    headings = [
        {name:"image",width:"10%"},
        {name:"name",width:"10%"},
        {name:"phone",width:"20%"},
        {name:"email",width:"20%"},
        {name:"DOB",width:"10%"}
    ]

    sort = heading =>{
        if (this.state.order === "descend"){
            this.setState({
                order: "ascend"
            }) 
        }else {
            this.setState({
                order: "descend"
            })
        }
        const compare = (a,b) => {
            if (this.state.order === "ascend"){
                if (a[heading]=== undefined){
                    return 1
                }else if (b[heading]=== undefined){
                    return -1
                }else if (heading === "name"){
                    return a[heading].first.localeCompare(b[heading].first)
                }else{
                    return a[heading] - b[heading]
                }
            }else{
                if (a[heading]=== undefined){
                    return 1
                }else if (b[heading]=== undefined){
                    return -1
                }else if (heading === "name"){
                    return b[heading].first.localeCompare(a[heading].first)
                }else{
                    return b[heading] - a[heading]
                }
            }
        }
        const sortedEmployees = this.state.filteredEmployees.sort(compare)
        this.setState({
            filteredEmployees: sortedEmployees
        })
    }

    handleSearch = event =>{
        const searchValue = event.target.value;
        const filteredEmp = this.state.employees.filter(emp => {
            let values = Object.values(emp).join("").toLowerCase()
            console.log(values)
            return values.indexOf(searchValue.toLowerCase()) !== -1
        })
        this.setState({filteredEmployees:filteredEmp})
    }
    componentDidMount(){
        API.getEmp().then(res=>{
            this.setState({
                employees: res.data.results,
                filteredEmployees: res.data.results
            })
        })
    }

    render(){
        return (
            <div>
            <Search
            handleSearch={this.handleSearch}
            />
            <Table headings={this.headings} employees={this.state.employees} sort={this.sort}/>
            </div>
        )
    }
}