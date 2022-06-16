num=50;
num2=100;

add=num+num2;
sub=num-num2;
mul=num*num2;
div=num/num2;

const mynew=`
<h1>2nd java </h1>
<p>sumation:${add} </p>
<p>subtraction:${sub} </p>
<p>multiplaction ${mul} </p>
<p>division ${div} </p>
`;

document.body.innerHTML=mynew;