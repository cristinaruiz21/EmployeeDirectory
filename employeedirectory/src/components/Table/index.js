import React from "react";
import style from "./style.css";

function Table({headings,employees,sort}){
    return(
        <div className="table">
            <table className="table-hover table table-stripes">
                <thead>
                    <tr>
                        {headings.map(({name,width})=>{
                            return(
                            <th className="col" style={{width}} key={name} onClick={()=>{
                                sort(name.toLowerCase())
                            }}>
                                {name}
                                <span className="sort"></span>
                            </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {employees[0] !== undefined && employees[0].name !== undefined ? (
                        employees.map(({login,name,picture,phone,email,dob})=>{
                            return(
                                <tr key={login.uuid}>
                                    <td data-th="image" className="align-middle">
                                        <img src={picture.medium} alt={name.first} className="img-responsive"/>
                                    </td>
                                    <td data-th="name" className="align-middle">
                                        {name.first} {name.last}
                                    </td>
                                    <td data-th="phone" className="align-middle">
                                        {phone}
                                    </td>
                                    <td data-th="email" className="align-middle">
                                        {email}
                                    </td>
                                    <td data-th="dob" className="align-middle">
                                        {dob.date}
                                    </td>
                                </tr>
                            )
                        })
                    ):(
                        <></>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table;