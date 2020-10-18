import DashBoard from "Components/Dashboard/DashBoard";
import React, { Fragment } from "react";

const Main: React.FC = () => {
    return (
        <Fragment>
            <div className="main-container">
                <aside className="left-container">
                    <div className="logo">
                        <img src={`${require("./assets/images/logo.png")}`} height="40" width="40"/>
                    </div>
                </aside>
                <main className="right-container">
                    <div className="user-profile">
                        <div className="user-personal-details">
                            <div className="user-name">Cody Simmmons</div>
                            <div className="user-designation">Lecturer</div>
                        </div>
                        <div className="avatar">
                            <img src={`${require("./assets/images/avatar.png")}`}/>
                        </div>
                    </div>
                    <div className="heading">Dashboard</div>
                    <div className="sub-heading">
                        Mobile UX/UI Design course
                    </div>
                    <DashBoard/>
                </main>
            </div>
        </Fragment>
    );
};

export default Main;
