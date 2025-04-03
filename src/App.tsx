import React from 'react';
import Title from "./Components/Title.tsx";
import Intro from "./Components/Intro.tsx";
import Hobby1 from "./Components/Hobby1 Components/Hobby1.tsx";
import Hobby2 from "./Components/Hobby2 Components/Hobby2.tsx";
import "./List.css"; //css file for formatting both lists in each hobby


const App: React.FC = () => {
    return(
        <div>
            <Title/>
            <Intro name1="Sidharth Atluri" name2="Joshua Gifford"/>
            <Hobby1 />
            <Hobby2 />
        </div>
    );
};

export default App;