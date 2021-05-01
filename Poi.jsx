import React from "react";

let currDate=  new Date();
currDate=currDate.getHours();
let greeting="";
const css={};

function Poi(){
if(currDate>1 && currDate<=12)
{
    greeting="Good Morning"
    css.color="blue";
}
else if(currDate>12 && currDate<=20)
{
 greeting="Good Evening "
 css.color="red"; 

}
else if(currDate>20 && currDate<=24)
{
greeting="Good Night"
css.color="black";

}

return (
<>
<div>
<p><b>This Heading shows color according to the current time.</b></p>
<h1>Hello,<span style={css}>{greeting}</span></h1>
</div>

</>);

}

export default Poi;