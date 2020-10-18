import React, { Fragment, useEffect, useState } from "react";
import { get } from "../../utils/request";
import "./student.css";

interface IStudentData {
    id: string;
    name: string;
    marks: number;
}

const Student: React.FC = () => {
    const [studentData, setStudentData] = useState<IStudentData[]>([]);

    useEffect(() => {
        get("http://my-json-server.typicode.com/shripad-agashe/fake-api/students")
            .then((response) => {
                if (response && response.data) {
                    setStudentData(response.data);
                }
            })
            .catch((error) => {
                setStudentData([]);
            });
    }, []);

    return (
        <Fragment>
            <div
                style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "10px",
                    boxShadow: "2px 2px 10px 4px #EDEDF6",
                    marginLeft: "20px",
                    width: "32%",
                }}>
                <div style={{
                    borderBottom: "1px solid #EEF0F7",
                    display: "flex",
                    flexDirection: "row",
                    padding: "20px",
                }}>
                    <div className="student-heading-column1">Students by average mark</div>
                    <div className="student-test">Descending</div>
                    <p><i className="arrow down"/></p>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "20px",
                    }}>
                    {studentData &&
                    studentData.length &&
                    studentData.map((data) => {
                        return (
                            <div key={data.id} style={{ display: "flex", flexDirection: "row", padding: "20px" }}>
                                <div className="student-column1">
                                    <img style={{ marginRight: "5px" }} height="40" width="40"
                                         src={`${require("../../assets/images/student-avatar.png")}`}/>
                                    {data.name}
                                </div>
                                <div className="student-column2">{data.marks}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Fragment>
    );
};

export default Student;
