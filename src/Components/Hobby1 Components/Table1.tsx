import React from "react";
import '../../App.css';

const Table1: React.FC = () =>{
    return (
        <div className="table-container">
            <table>
                <caption><b>Different Teams in New England</b></caption>
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Level of Play</th>
                        <th>Record</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>WPI Engineers</td>
                        <td>College D3</td>
                        <td>6-4</td>
                    </tr>
                    <tr>
                        <td>New England Patriots</td>
                        <td>NFL</td>
                        <td>4-13</td>
                    </tr>
                    <tr>
                        <td>Boston College Eagles</td>
                        <td>College D1</td>
                        <td>7-6</td>
                    </tr>
                    <tr>
                        <td>South Windsor Bobcats</td>
                        <td>Highschool</td>
                        <td>3-7</td>
                    </tr>
             </tbody>
            </table>
        </div>
    );
};

export default Table1;