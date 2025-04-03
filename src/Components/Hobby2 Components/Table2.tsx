import React from "react";
import '../../App.css';

const Table2: React.FC = () =>{
    return (
        <div className="table-container">
            <table id="table1" className="collapse">
                <caption><b> How cool are these instruments? </b></caption>
                <tbody>
                <tr>
                    <th>Instrument</th>
                    <th>Does it look cool?</th>
                    <th>Do I play it?</th>
                </tr>
                <tr>
                    <td>Double Bass</td>
                    <td>Absolutely</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>Piano</td>
                    <td>Not much</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>French Horn</td>
                    <td>Shiny! Cool shape</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>Bassoon</td>
                    <td>Nice if wood color good</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>Violin</td>
                    <td>Kinda but it's used too often</td>
                    <td>No</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table2;