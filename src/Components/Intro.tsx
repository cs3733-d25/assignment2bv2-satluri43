import React from 'react';

interface IntroProps {
    name1: string;
    name2: string;
}

const Intro: React.FC<IntroProps> = ({name1, name2}) =>{
    return(
        <p>
            Hi! We are {name1} and {name2}. Welcome to our hobby page!
        </p>
    );
};

export default Intro;