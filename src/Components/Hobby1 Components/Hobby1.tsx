import React from 'react';
import List1 from "./List1.tsx";
import Table1 from "./Table1.tsx";
import Form1 from "./Form1.tsx";
import '../../App.css';

const Hobby1: React.FC = () => {
    return (
        <div>
            <h2>Sidharth's Hobby: Football</h2>
            <div className="center-img-container">
                <img src='./src/assignment1b.jpeg' alt='Football' />
            </div>
            <p>I love football because it increases discipline and promotes a healthy lifestyle.</p>
            <List1/>
            <hr/>
            <Table1 />
            <hr/>
            <Form1 />
            <hr/>
        </div>
    );
};

export default Hobby1;