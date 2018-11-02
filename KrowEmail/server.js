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
const AWS = require("aws-sdk")

var fs = require('fs');

// var options = {
//   key: fs.readFileSync('credentials/privatekey.pem'),
//   cert: fs.readFileSync('credentials/server.crt')
// };

var options = {
  ca: fs.readFileSync('credentials/nc/ca_bundle.crt'),
  key: fs.readFileSync('credentials/nc/private.key'),
  cert: fs.readFileSync('credentials/nc/certificate.crt')
};

var port = 443

const cognitoExpress = new cognito({
    region: "us-east-2",
    cognitoUserPoolId: "us-east-2_THcotoVBG",
    tokenUse: "access", //Possible Values: access | id
    tokenExpiration:3600000  //Up to default expiration of 1 hour (3600000 ms)
});
 


AWS.config.update({accessKeyId: "AKIAJZJ4OX6ZEI5CTMOA", secretAccessKey: "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", region: "us-east-2"});
AWS.config.update({region: "us-east-2"})

var ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'})



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
    var id = req.query.id;

    cognitoExpress.validate(accessTokenFromClient, function(err, response) {
        if (err) {
            res.send(401, 'Incorrect Access Token')
        } else {
            exec("aws cognito-idp admin-delete-user --user-pool-id us-east-2_THcotoVBG --username " + req.body.id, (error, stdout, stderr) => 
        {
            if (error) {
                res.send(400, {"res": "error"})
            } else {
                // res.send(200, {"res": "success"})
            }
        })
        request.delete("http://18.220.46.51:3000/api/Applicant/" + id, {headers: {"x-api-key": "qLBrEwIv690nAbMfVHB965WC3KfoC1VpvkBjDUiBfVOG5mTzlUlwkckKLerAUxxv"}}, function(err, res2) {
            if (err) {
                console.log(err)
                res.status(404).send("Oh uh, something went wrong");
            } else {
                res.send(200, res2.body)
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
    var term = req.query.term;
    var key = req.query.key;
    request.get("http://18.220.46.51:4200/search?term=" + term + "&key=" + key, function(err, res2) {
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
            res.send(res2.body)
        }
    })
  })

  app.get("/g", (req, res, next) => {
    var url = req.query.url
    var accessTokenFromClient = req.query.token;

    if (accessTokenFromClient == "share") {
        request.get(url, {headers: {"x-api-key": "qLBrEwIv690nAbMfVHB965WC3KfoC1VpvkBjDUiBfVOG5mTzlUlwkckKLerAUxxv"}}, function(err, res2) {
            if (err) {
                console.log(err)
                res.status(404).send(res2.body);
            } else {
                res.status(200).send(res2.body)
            }
        })
    } else {

    

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
        
    }});


    app.post("/p", (req, res, next) => {
        var url = req.query.url
        var accessTokenFromClient = req.query.token;
        var data = req.body
        console.log(data)
    
        cognitoExpress.validate(accessTokenFromClient, function(err, response) {
            if (err) {
                throw new Error(err)
            } else {
                request.post(url, {headers: {"x-api-key": "qLBrEwIv690nAbMfVHB965WC3KfoC1VpvkBjDUiBfVOG5mTzlUlwkckKLerAUxxv"}, json: data}, function(err, res2) {
                    if (err) {
                        throw new Error(err)
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

    app.post("/verify", (req, res, next) => {
        var applicant = req.body.applicant
        var verifyID = req.body.verifyID 
        var verificationEmail = req.body.verificationEmail

        var data = {
            applicant: applicant,
            verifyID: verifyID,
            verificationEmail: verificationEmail
        }

        request.post("http://18.220.46.51:3000/api/VerifyJobExp",  {headers: {"x-api-key": "qLBrEwIv690nAbMfVHB965WC3KfoC1VpvkBjDUiBfVOG5mTzlUlwkckKLerAUxxv"}, json: data}, function(err, res2) {
            if (err) {
                throw new Error(err)
            } else {
                res.status(200).send(res2.body)
            }
        })
    })

    app.post("/pu", (req, res, next) => {
        var url = req.query.url
        var accessTokenFromClient = req.query.token;
        var data = req.body
        console.log(data)
    
        cognitoExpress.validate(accessTokenFromClient, function(err, response) {
            if (err) {
                throw new Error(err)
            } else {
                request.put(url, {headers: {"x-api-key": "qLBrEwIv690nAbMfVHB965WC3KfoC1VpvkBjDUiBfVOG5mTzlUlwkckKLerAUxxv"}, json: data}, function(err, res2) {
                    if (err) {
                        throw new Error(err)
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

app.post("/feedback", (req, res, next) => {
    // console.log(req.body)
    var body = ""
    req.on("data", function(chunk) {
        body += chunk
    })
    // console.log(body)
    var name = req.body.name;
    var subject = req.body.subject;
    var email = req.body.email;
    var msg = req.body.msg;
    

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
    ejs.renderFile(__dirname + "/templates/feedback.ejs", { name: name, email: email, subject: subject, msg: msg }, function (err, data) {
        var mailOptions = {
            from: "Krow Network No-Reply <notifications@krow.network>",
            to: "tuckers@krow.network",
            subject: "Krow Network Feedback",
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

app.post("/request-verification", (req, res, next) => {
    // console.log(req.body)
    console.log("OK THIS IS JUST EPIC")
    var body = ""
    req.on("data", function(chunk) {
        body += chunk
    })
    // console.log(body)
    var user = req.body.user
    var jobName = req.body.jobName 
    var company = req.body.company 
    var verificationID = req.body.verificationID
    var rID = Math.floor(Math.random()*90000) + 10000;
    

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
    ejs.renderFile(__dirname + "/templates/verifyExp.ejs", { name: user, jobName: jobName, code: rID, link: "https://krownetwork.com/verify/" + verificationID}, function (err, data) {
        var mailOptions = {
            from: "Krow Network No-Reply <notifications@krow.network>",
            to: req.body.to,
            subject: "Someone has requested you to verify their job experience",
            html: data
        }
        sender.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err);
            } else {
                console.log('Message sent: ' + info.response);

                var ddb_params = {
                    TableName: "verifications",
                    Item: {
                        verificationID: {S: verificationID},
                        code: {S: rID.toString()},
                        email: {S: req.body.to},
                        verified: {BOOL: false},
                        requestDate: {S: new Date().toISOString()},
                        applicantID: {S: req.body.aID},
                        requestor: {S: user},
                        job_name: {S: jobName},
                        company: {S: company}
                        
                        
                    }
                }
                console.log(ddb_params)
                ddb.putItem(ddb_params, function(err, data) {
                    console.log("test")
                    console.log(data, err)
                })


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