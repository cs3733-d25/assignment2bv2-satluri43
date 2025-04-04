import React from 'react';
import '../../list.css';

const List2: React.FC = () =>{
    return (
        <>
            <p> Some of my favorite songs are: </p>
            <div className="list-container">
                <ul id="list">
                    <li id="list-p1"><i> Rhapsody in Blue</i>, by Gershwin</li>
                    <li><i> Behold our God</i>, by Sovereign Grace Music</li>
                    <li><i> Water Music Suite no. 2 in D major</i>, by Handel</li>
                    <li><i>Merry Go Round Of Life</i>, by Joe Hisaishi</li>
                    <li><i>Alpha</i>, by C418</li>
                </ul>
            </div>
        </>
    );
};

export default List2;