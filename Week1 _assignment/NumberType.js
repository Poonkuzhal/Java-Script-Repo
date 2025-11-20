
function NumberType(number)
{
if (number>0)
{
   return "Positive"
    
}
else if (number<0)
{
    return "Negative"
    
}
else{
    
    return "zero"
    
}
}
console.log(NumberType(-25));
console.log(NumberType(100));
console.log(NumberType(0));