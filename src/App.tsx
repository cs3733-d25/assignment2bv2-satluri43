import React from 'react';
import Title from "./Components/Title.tsx";
import Intro from "./Components/Intro.tsx";
import Hobby1 from "./Components/Hobby1 Components/Hobby1.tsx";

const App: React.FC = () => {
    return(
        <div>
            <Title/>
            <Intro name1="Sidharth Atluri" name2="Joshua Gifford"/>
            <Hobby1 />
        </div>
    );
};

export default App;