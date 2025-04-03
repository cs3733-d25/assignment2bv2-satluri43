import React from 'react';

const Form2: React.FC = () =>{

    return(
    <form>
        <p> <b> What do you think? Enter your information below and let me know! </b> </p>
    <input type="text" placeholder="First Name" id="fname" name="fname"/>
            <input type="text" placeholder="Last Name" id="lname" name="lname"/>
            <br/>
            <input type="checkbox" id="ifplay"/>
            <label htmlFor="ifplay"> Do you play an instrument?</label>
            <br/>
            <label htmlFor="instrument"> If so, what instrument? </label>
            <input type="text" id="instrument" name="instrument"/>
            <br/>
            <input type="checkbox" id="multple"/>
            <label htmlFor="multple"> Check this box if you play multiple instruments </label>
            <br/> <br/>

            How long have you been playing this instrument? (If multiple, choose the one with the longest time)
            <br/>
            <input type="radio" id="<1>" name="skillLevel"/>
            <label htmlFor="<1>"> Less than 1 Year</label>
            <br/>
            <input type="radio" id="1yr" name="skillLevel"/>
            <label htmlFor="1yr"> 1 Year</label>
            <br/>
            <input type="radio" id="2-3yr" name="skillLevel"/>
            <label htmlFor="2-3yr"> 2-3 Years</label>
            <br/>
            <input type="radio" id="4-5yr" name="skillLevel"/>
            <label htmlFor="4-5yr"> 4-5 Years</label>
            <br/>
            <input type="radio" id="5+yr" name="skillLevel"/>
            <label htmlFor="5+yr"> 5+ Years</label>

            <br/> <br/>
            <input type="checkbox" id="ifOrchestra"/>
            <label htmlFor="ifOrchestra"> Do you play in a Orchestra or Band?</label>
            <br/>

            <label htmlFor="favInstrument"> From the list of instruments above, which instrument would be your
                favorite?</label>
            <select id="favInstrument" name="favInstrument">
                <option hidden disabled selected value=""> -- select an option --</option>
                <option value="Double Bass"> Double Bass</option>
                <option value="Piano"> Piano</option>
                <option value="French Horn"> French Horn</option>
                <option value="Bassoon"> Bassoon</option>
                <option value="Violin"> Violin</option>
            </select>
            <br/>
            <label htmlFor="comments"> Any other comments? </label>
            <br/>
            <textarea id="comments" name="comments" rows="4" cols="40"
                      placeholder="Enter your comments here"></textarea>
            <br/>
            <button type="submit"> Submit</button>
        </form>
    );
};

export default Form2;