import React from "react";

const TopForm = (props) => {

    var userName = "حسین";
    
    // useEffect(() => {
    //     userName = prompt("Enter Your Name:");
    // }, []);

    return(
        <div className="topForm">
            <h1>{`چک لیست ${userName}`}</h1>

            <form action="">
                <input type="text" name="taskItmeInput"/>
                <button>ثبت</button>
            </form>
        </div>
    )
}

export default TopForm;