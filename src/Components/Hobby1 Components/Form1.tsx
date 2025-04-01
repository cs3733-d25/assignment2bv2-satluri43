import React from 'react';

const Form1: React.FC = () =>{
    return(
        <form>
            <label htmlFor="firstname">Enter Your First Name</label>
            <input type="text" id="firstname" name="firstname"/>
            <br/><br/>

            <label htmlFor="lastname">Enter Your Last Name</label>
            <input type="text" id="lastname" name="lastname"/>
            <br/><br/>

            <label htmlFor="interest">Interest Level: </label>
            <select id="interest" >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
            </select>
            <br/><br/>

            <button type="submit">Submit</button>
        </form>
    );
};

export default Form1;