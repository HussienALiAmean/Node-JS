var http = require('http');
var fs = require('fs');

http.createServer(function (request, response)
{
    if(request.method=='GET'&&request.url=='/login')
    {
        console.log('login');
       
        var HTMLdata=fs.readFileSync('./SERVERassiemnt/login.html','utf8');
        var CSSdata =fs.readFileSync('./SERVERassiemnt/styles.css','utf8');
        
            console.log(CSSdata.toString());
            HTMLdata=HTMLdata.replace('h1{color:green;}',CSSdata);
         
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(HTMLdata);
      
          
    }
    else if(request.method=='GET'&&request.url=='/signup')
    {
        console.log('signup ******************');
       
        var HTMLdata=fs.readFileSync('./SERVERassiemnt/signup.html','utf8');
        var CSSdata =fs.readFileSync('./SERVERassiemnt/styles.css','utf8');
        
            console.log(CSSdata.toString());
            HTMLdata=HTMLdata.replace('h1{color:green;}',CSSdata);
          
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(HTMLdata);
    }
    else if(request.method=='GET'&&request.url=='/profile')
    {
        console.log('profile******************');
        
        var HTMLdata=fs.readFileSync('./SERVERassiemnt/profile.html','utf8');
        var CSSdata =fs.readFileSync('./SERVERassiemnt/styles.css','utf8');
        
            console.log(CSSdata.toString());
            HTMLdata=HTMLdata.replace('h1{color:green;}',CSSdata);
          
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(HTMLdata);
    }
    else if(request.method=='GET')
    {
        console.log('Home Page******************');
       
        var HTMLdata=fs.readFileSync('./SERVERassiemnt/HomePage.html','utf8');
        var CSSdata =fs.readFileSync('./SERVERassiemnt/styles.css','utf8');
        
            console.log(CSSdata.toString());
            HTMLdata=HTMLdata.replace('h1{color:green;}',CSSdata);
          
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(HTMLdata);
            

    }

    if(request.method=="POST")
    {
        console.log(request.url);
        [,fun,email,namee,pass]=request.url.split("/");
        // console.log("fun"+fun);
        // console.log("email"+email);
        // console.log("pass"+pass);
        // console.log("namee"+namee);

        if (fun=="sign-up")
        {
         var users;
         var lenghte=0;
         try {
          
             users= JSON.parse(fs.readFileSync('./Sigin.txt','utf-8'));
             lenghte = users.length;
           
             }
             catch (e)
             {
              fs.writeFileSync('./Sigin.txt',JSON.stringify([]));
              users= JSON.parse(fs.readFileSync('./Sigin.txt','utf-8')); 
            }
            var user={
              id:lenghte+1,
              email:email,
              pass:pass,
              namee:namee,
          }
          users.push(user);
          fs.writeFileSync('./Sigin.txt',JSON.stringify(users));
        }
        else  if (fun=="login")
        {
          var users;
          var lenghte=0;
          var message;
          try{
              users= JSON.parse(fs.readFileSync('./Sigin.txt','utf-8'));
              }
              catch (e)
              {
               fs.writeFileSync('./Sigin.txt',JSON.stringify([]));
               users= JSON.parse(fs.readFileSync('./Sigin.txt','utf-8')); 
             }
             
          var coorects= false;
          var corectemail=false;
          var corectpassword=false;
          users.forEach(element => 
          { 
            if(element.namee==namee )
            {
              corectemail=true;     
              if (element.pass==pass )
              {
                corectpassword=true;
              }
            }
           
           
            if(corectemail&&corectemail)
            {
              coorects=true;
            }
          
          });

          if(coorects)
          {
              console.log('login correct ******************');
              var HTMLdata=fs.readFileSync('./SERVERassiemnt/profile.html','utf8');
              var CSSdata =fs.readFileSync('./SERVERassiemnt/styles.css','utf8');
                  console.log(CSSdata.toString());
                  HTMLdata=HTMLdata.replace('h1{color:green;}',CSSdata);
                  response.writeHead(200, {"Content-Type": "text/html"});
                  HTMLdata = HTMLdata.replace('{namee}', namee);
                  response.write(HTMLdata);
          }
          else
          {
            if(corectemail)
            {
                console.log('login unCorecte PASSWORED  BUT corectemail ////////////////////');
                var HTMLdata=fs.readFileSync('./SERVERassiemnt/login.html','utf8');
                var CSSdata =fs.readFileSync('./SERVERassiemnt/styles.css','utf8');
                    console.log(CSSdata.toString());
                    HTMLdata=HTMLdata.replace('h1{color:green;}',CSSdata);
                    HTMLdata = HTMLdata.replace('{MESSAGE}', 'UNCORECT PASSWORED');
                    response.writeHead(400, {"Content-Type": "text/html"});
                    response.write(HTMLdata);
            }
            else 
            {
                console.log('login unCorecte BUT corectpassword ////////////////////');
                var HTMLdata=fs.readFileSync('./SERVERassiemnt/login.html','utf8');
                var CSSdata =fs.readFileSync('./SERVERassiemnt/styles.css','utf8');
                    console.log(CSSdata.toString());
                    HTMLdata=HTMLdata.replace('h1{color:green;}',CSSdata);
                    response.writeHead(400, {"Content-Type": "text/html"});
                    HTMLdata = HTMLdata.replace('{MESSAGE}', 'UNCORECT EMAIL & passwored');
                    response.write(HTMLdata);
            }
         
           }   
        }
    }
  response.end();
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');