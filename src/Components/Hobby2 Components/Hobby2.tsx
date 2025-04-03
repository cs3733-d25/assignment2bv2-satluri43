import React from 'react';
import List2 from "./List2.tsx";
import Table2 from "./Table2.tsx";
import Form2 from "./Form2.tsx";
import '../../App.css';

const Hobby2: React.FC = () => {
    return (
        <div>
            <h2>Joshua's Hobby: Music</h2>
            <img src="./src/AI-doublebass3.jpg" alt="mysterious double bass player" />
            <p>I love making and listening to music! I play the piano and the double bass in orchestra.</p>
            <List2 />
            <hr/>
            <Table2 />
            <hr/>
            <Form2 />
            <hr/>
        </div>
    );
};

export default Hobby2;