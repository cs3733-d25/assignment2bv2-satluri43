import React from "react";

const Test: React.FC<TestProps> = ({nav1 = "Donate", nav2}) =>{
    const num = 2;
    let navTitle = "Us" //JS CODE!

    return(
        <header>
            <h1>THIS IS A TEST</h1>
            <nav>
                <ol>
                    <li><a href='#'> Home </a></li>
                    <li><a href='#'> About </a></li>
                    <li><a href='#'>{num} Contact {navTitle}   </a></li>
                    <li><a href='#'> {nav1}   </a></li>
                    <li><a href='#'> {nav2}   </a></li>

                </ol>
            </nav>
        </header>
    );
};
export default Test;