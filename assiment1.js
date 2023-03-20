
function add (x,y)
{
 if (!isNaN(x)&&!isNaN(y))
 {
    return x+y;
 }
 else
 {
    return "ERROR";
 }
}
function sub (x,y)
{
if (!isNaN(x)&&!isNaN(y))
 {
    return x-y;
 }
 else
 {
    return "ERROR";
 }

}
function multi (x,y)
{
if (!isNaN(x)&&!isNaN(y))
 {
    return x*y;
 }
 else
 {
    return "ERROR";
 }

}
module.exports={
    add,sub,multi
}