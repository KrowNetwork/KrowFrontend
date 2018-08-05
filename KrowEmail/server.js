var express = require("express")
var path = require("path")
var nodeMailer = require("nodemailer")
var ejs = require("ejs")
var app = express()
var bodyParser = require("body-parser");
var cognito = require("cognito-express")
var fs = require('fs');
const { exec } = require('child_process');
var request = require('request');
const PROD = false;
const https = require('https');
const http = require('http');

var fs = require('fs');
var options = {
  key: fs.readFileSync('credentials/private.key'),
  cert: fs.readFileSync('credentials/certificate.crt')
};

var port = 443

const cognitoExpress = new cognito({
    region: "us-east-2",
    cognitoUserPoolId: "us-east-2_THcotoVBG",
    tokenUse: "access", //Possible Values: access | id
    tokenExpiration: 1.8e6 //Up to default expiration of 1 hour (3600000 ms)
});
 









app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use(bodyParser.urlencoded({ extended: false }))
  // parse application/json
  app.use(bodyParser.json())


  app.get("/hckey", (req, res, next) => {

    

    var accessTokenFromClient = req.query.token;

    cognitoExpress.validate(accessTokenFromClient, function(err, response) {
        if (err) {
            res.send(401, 'Incorrect Access Token')
        } else {
            res.send({"api": "qLBrEwIv690nAbMfVHB965WC3KfoC1VpvkBjDUiBfVOG5mTzlUlwkckKLerAUxxv"})
            // qLBrEwIv690nAbMfVHB965WC3KfoC1VpvkBjDUiBfVOG5mTzlUlwkckKLerAUxxv
        }
    });
  })


// app.head("/head", (req, res, next) => {
//     var url = req.query.url;
//     delete req.query;
//     req.head({headers:{"x-api-key": "key"}})
//     res.send("?")
// })

  



  app.post("/delete", (req, res, next) => {
    var accessTokenFromClient = req.query.token;

    cognitoExpress.validate(accessTokenFromClient, function(err, response) {
        if (err) {
            res.send(401, 'Incorrect Access Token')
        } else {
            exec("aws cognito-idp admin-disable-user --user-pool-id us-east-2_THcotoVBG --username " + req.body.id, (error, stdout, stderr) => 
        {
            if (error) {
                res.send(400, {"res": "error"})
            } else {
                res.send(200, {"res": "success"})
            }
        })
            // fs.appendFile("delete.txt", req.body.id, function(err) {
            //     if (err) res.send(400, {"res": "error"});
            //     else res.send(200, {"res": "success"})
            // })

            // qLBrEwIv690nAbMfVHB965WC3KfoC1VpvkBjDUiBfVOG5mTzlUlwkckKLerAUxxv
        }
    });
  })

  app.get("/search", (req, res, next) => {
    var url = req.query.url;
    request.get(url, function(err, res2) {
        if (err) {
            console.log(err)
            res.status(404).send("Oh uh, something went wrong");
        } else {
            res.status(200).send(res2.body)
        }
    })
    
  })

  app.get("/h", (req, res, next) => {
   var url = req.query.url
    request.get(url, {headers: {"x-api-key": "qLBrEwIv690nAbMfVHB965WC3KfoC1VpvkBjDUiBfVOG5mTzlUlwkckKLerAUxxv"}}, function(err, res2) {
        if (err) {
            console.log(err)
            res.status(404).send("Oh uh, something went wrong");
        } else {
            res.status(200).send({"res": "success"})
        }
    })
  })

  app.get("/g", (req, res, next) => {
    var url = req.query.url
    var accessTokenFromClient = req.query.token;

    cognitoExpress.validate(accessTokenFromClient, function(err, response) {
        if (err) {
            res.send(401, 'Incorrect Access Token')
        } else {
            request.get(url, {headers: {"x-api-key": "qLBrEwIv690nAbMfVHB965WC3KfoC1VpvkBjDUiBfVOG5mTzlUlwkckKLerAUxxv"}}, function(err, res2) {
                if (err) {
                    console.log(err)
                    res.status(404).send(res2.body);
                } else {
                    res.status(200).send(res2.body)
                }
            })
          }
        })
            //     if (err) res.send(400, {"res": "error"});
            //     else res.send(200, {"res": "success"})
            // })

            // qLBrEwIv690nAbMfVHB965WC3KfoC1VpvkBjDUiBfVOG5mTzlUlwkckKLerAUxxv
        
    });
    

  app.post("/help", (req, res, next) => {
    // console.log(req.body)
    var body = ""
    req.on("data", function(chunk) {
        body += chunk
    })
    // console.log(body)
    var name = req.body.name
    var subject = req.body.subject
    var msg =  req.body.msg
    var email = req.body.email
    

    var sender = nodeMailer.createTransport({
        host: "smtp.1and1.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: "notifications@krow.network",
            pass: "rfk-Coz-CJp-2Ey"
        }
    });
    ejs.renderFile(__dirname + "/templates/get-help.ejs", { name: name, subject: subject, email: email, msg:msg }, function (err, data) {
        var mailOptions = {
            from: "Krow Network No-Reply <notifications@krow.network>",
            to: req.body.to,
            subject: "Help Request From " + name,
            html: data
        }
        sender.sendMail(mailOptions, function (err, info) {
            if (err) {
                // console.log(err);
            } else {
                // console.log('Message sent: ' + info.response);
            }
        });
    })
    res.send({"response": "success"})
})




  app.post("/applicant-request", (req, res, next) => {
    // console.log(req.body)
    var body = ""
    req.on("data", function(chunk) {
        body += chunk
    })
    // console.log(body)
    var applicant_name = req.body.applicant_name
    var jobName = req.body.job_name
    

    var sender = nodeMailer.createTransport({
        host: "smtp.1and1.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: "notifications@krow.network",
            pass: "rfk-Coz-CJp-2Ey"
        }
    });
    ejs.renderFile(__dirname + "/templates/applicant_request.ejs", { name: applicant_name, jobname: jobName }, function (err, data) {
        var mailOptions = {
            from: "Krow Network No-Reply <notifications@krow.network>",
            to: req.body.to,
            subject: "Somebody Applied To Your Job!",
            html: data
        }
        sender.sendMail(mailOptions, function (err, info) {
            if (err) {
                // console.log(err);
            } else {
                // console.log('Message sent: ' + info.response);
            }
        });
    })
    res.send({"response": "success"})
})

app.post("/applicant-unrequest", (req, res, next) => {
    // console.log(req.body)
    var body = ""
    req.on("data", function(chunk) {
        body += chunk
    })
    // console.log(body)
    var applicant_name = req.body.applicant_name
    var jobName = req.body.job_name
    

    var sender = nodeMailer.createTransport({
        host: "smtp.1and1.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: "notifications@krow.network",
            pass: "rfk-Coz-CJp-2Ey"
        }
    });
    ejs.renderFile(__dirname + "/templates/applicant_unrequest.ejs", { name: applicant_name, jobname: jobName }, function (err, data) {
        var mailOptions = {
            from: "Krow Network No-Reply <notifications@krow.network>",
            to: req.body.to,
            subject: "Somebody Removed Their Application To Your Job",
            html: data
        }
        sender.sendMail(mailOptions, function (err, info) {
            if (err) {
                // console.log(err);
            } else {
                // console.log('Message sent: ' + info.response);
            }
        });
    })
    res.send({"response": "success"})
})

app.post("/hire-request", (req, res, next) => {
    // console.log(req.body)
    var body = ""
    req.on("data", function(chunk) {
        body += chunk
    })
    // console.log(body)
    var comp_name = req.body.comp_name
    var jobName = req.body.job_name
    

    var sender = nodeMailer.createTransport({
        host: "smtp.1and1.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: "notifications@krow.network",
            pass: "rfk-Coz-CJp-2Ey"
        }
    });
    ejs.renderFile(__dirname + "/templates/hire_request.ejs", { name: comp_name, jobname: jobName }, function (err, data) {
        var mailOptions = {
            from: "Krow Network No-Reply <notifications@krow.network>",
            to: req.body.to,
            subject: comp_name + " wants to hire you!",
            html: data
        }
        sender.sendMail(mailOptions, function (err, info) {
            if (err) {
                // console.log(err);
            } else {
                // console.log('Message sent: ' + info.response);
            }
        });
    })
    res.send({"response": "success"})
})

app.post("/accept-hire", (req, res, next) => {
    // console.log("accept-hire")
    // console.log(req.body)
    var body = ""
    req.on("data", function(chunk) {
        body += chunk
    })
    // console.log(body)
    var applicant_name = req.body.applicant_name
    var jobName = req.body.job_name
    

    var sender = nodeMailer.createTransport({
        host: "smtp.1and1.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: "notifications@krow.network",
            pass: "rfk-Coz-CJp-2Ey"
        }
    });
    ejs.renderFile(__dirname + "/templates/hire_request.ejs", { name: applicant_name, jobname: jobName }, function (err, data) {
        var mailOptions = {
            from: "Krow Network No-Reply <notifications@krow.network>",
            to: req.body.to,
            subject: applicant_name + " Accepted Your Hire Request!",
            html: data
        }
        sender.sendMail(mailOptions, function (err, info) {
            if (err) {
                // console.log(err);
            } else {
                // console.log('Message sent: ' + info.response);
            }
        });
    })
    res.send({"response": "success"})
})

https.createServer(options, app).listen(443, function (err) {
    if (err) {
      throw err
    }
    // console.log(`worker ${process.pid} started`);

})
// http.createServer(app).listen(3000, function (err) {
//     if (err) {
//       throw err
//     }
//     // console.log(`worker ${process.pid} started`);

// })