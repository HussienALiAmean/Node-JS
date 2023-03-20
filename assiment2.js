function welcomfunction(name,birthdate)
{
    const today = new Date();
    if (birthdate.getFullYear()<=today.getFullYear())
    {
     
     const age = today.getFullYear() - birthdate.getFullYear() - 
                (today.getMonth() < birthdate.getMonth() ||  (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate()));
 
    return  `Hello ${name} and your Age now is: ${age}`;  
    }
    else
    {
        return "erroro";
    }

}


module.exports={
    welcomfunction
}