import React, { Fragment, useEffect, useState } from "react";
import { get } from "../../utils/request";
import Stack from "../Stack/Stack";
import Student from "../Student/Student";

interface IDashBoard {
    id: number;
    title: string;
    type: string;
    line1: string;
    line2?: string;
}

const DashBoard: React.FC = () => {

    const [dashBoardData, setDashBoardData] = useState<IDashBoard[]>([]);

    useEffect(() => {
        get("http://my-json-server.typicode.com/shripad-agashe/fake-api/dashboard")
            .then((response) => {
                if (response && response.data) {
                    setDashBoardData(response.data);
                }
            })
            .catch((error) => {
                setDashBoardData([]);
            });
    }, []);

    return (
        <Fragment>
            <div style={{ display: "flex", flexDirection: "row", marginTop: "20px" }}>
                {dashBoardData && dashBoardData.length && dashBoardData.map((data) => {
                    return (
                        <Stack key={data.id} data={data}/>
                    );
                })}
            </div>
            <div style={{ marginTop: "20px" }}>
                <Student/>
            </div>
        </Fragment>
    );
};

export default DashBoard;
