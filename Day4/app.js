
var express = require('express');
var fs=require('fs');
var app = express(); 
app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false }))
app.use(express.json())



app.get('/', function(request, responce) {
	responce.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello world!</h1></body></html>');
});


app.post('/api/sign-up', function(request, responce) {
            
            readable= fs.readFileSync('./test.txt','utf-8')
            readable= JSON.parse(readable);
            flagEmailExist=false;
            
            for (const iterator of readable) {
                if(iterator.email==request.body.email)
                {
                    flagEmailExist=true;
                }
            }
            if(flagEmailExist)
            {
                responce.send('email already exist')
            }
            else
            {
                 readable.push(request.body);
                 console.log(readable)
                 fs.writeFileSync('./test.txt', JSON.stringify(readable));
                 responce.status(200).send('Done')
            }
        });
    

        


app.post('/api/login', function(request, responce) {
            let userName;
            readable= fs.readFileSync('./test.txt','utf-8')
            readable= JSON.parse(readable);
            flagWrongEmaill=false,flagWrongPass=false;

            for (const iterator of readable) {
                if(iterator.email==request.body.email)
                {
                    if(iterator.password==request.body.password)
                      {
                        userName=iterator.username;
                        flagWrongEmaill=false ;
                        flagWrongPass=false;
                      }
                      else
                      {
                        flagWrongPass=true;
                        flagWrongEmaill=false ;
                      }
                    break;
                }
                else
                {
                    flagWrongEmaill=true
                }
                
            }

            if(flagWrongEmaill)
            {
                responce.status(422).send('you entered wrong email')
            }
            else if(flagWrongPass)
                {
                    responce.status(422).send('you entered wrong password')                    
                }
            else
                {
                    responce.render('profilepage', { name: userName });
                }
            
        });





console.log('loading.....')
app.listen(3000);
   

