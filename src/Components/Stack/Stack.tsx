import React, { Fragment } from "react";
import "./stack.css";

interface IDashBoard {
    id: number;
    title: string;
    type: string;
    line1: string;
    line2?: string;
}

interface IProps {
    data: IDashBoard;
}

const Stack: React.FC<IProps> = (props) => {
    const { data } = props;
    return (
        <Fragment>
            <div style={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                boxShadow: "2px 2px 10px 4px #EDEDF6",
                flex: "1",
                marginLeft: "20px",
            }}>
                <div style={{ display: "flex", flexDirection: "row", padding: "20px", alignItems: "center" }}>
                    <div className="stack-image">
                        <img src={`${require(`../../assets/images/${data.type}.png`)}`}/>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <span className="stack-line1">{data.line1}</span><span
                            className="stack-line2">{`${data.line2 ? (data.line2) : ""}`}</span>
                        </div>
                        <div className="stack-title">{data.title}</div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Stack;
