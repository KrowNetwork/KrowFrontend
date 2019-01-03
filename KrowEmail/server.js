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
const AWS = require("aws-sdk");
var jre = require('node-jre');
const fileUpload = require('express-fileupload');

const {google} = require('googleapis');
var privatekey = require("./privatekey.json");
console.log("k")

if (process.platform != "win32")
    process.env['GOOGLE_APPLICATION_CREDENTIALS'] = "privatekey.json"


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
 

app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});

AWS.config.update({accessKeyId: "AKIAJZJ4OX6ZEI5CTMOA", secretAccessKey: "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", region: "us-east-2"});
AWS.config.update({region: "us-east-2"})

var ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'})

function errorHandler(next, code, message) {
    var e = new Error(message)
    e.status = code
    return e
}


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use(bodyParser.urlencoded({ extended: false }))
  // parse application/json
  app.use(bodyParser.json())

  app.use(fileUpload({limits: { fileSize: 5 * 1024 * 1024 } })); //limits to 5MB

  app.post('/resumeParse', async (req, res, next) => {
    // if (Object.keys(req.files).length == 0) {
    //     return res.status(400).send('No files were uploaded.');
    // }

    let file = req.files.resumeFile;
    let finalContent;

    // Use the mv() method to place the file somewhere on your server
    await file.mv(`../ResumeParser/ResumeTransducer/UnitTests/${file.name}`, async function(err) {
        if (err){
            console.log(err);
        } else {
            console.log('File uploaded!');
        }

        var output = await jre.spawnSync(  // call synchronously
            ['../ResumeParser/ResumeTransducer/bin/*', '../ResumeParser/GATEFiles/lib/*', '../ResumeParser/GATEFILES/bin/gate.jar', '../ResumeParser/ResumeTransducer/lib/*'],
            'code4goal.antony.resumeparser.ResumeParserProgram',  
            [`../ResumeParser/ResumeTransducer/UnitTests/${file.name}`, '../ResumeParser/ResumeTransducer/UnitTests/parsed_result.json'],      
            { encoding: 'utf8' }     // encode output as string
          ).stdout;           // take output from stdout as trimmed String
        
        let name_without_extension = file.name.replace(/\.[^/.]+$/, "");
        await fs.unlink(`../ResumeParser/ResumeTransducer/UnitTests/${file.name}`, (err) =>{
            //console.log(err);
        });
        await fs.unlink(`../ResumeParser/ResumeTransducer/UnitTests/${name_without_extension + ".html"}`, (err) =>{
            //console.log(err);
        });
    
        await fs.readFile('../ResumeParser/ResumeTransducer/UnitTests/parsed_result.json', 'utf8', async function(err, contents) {
            finalContent = contents
            await fs.unlink(`../ResumeParser/ResumeTransducer/UnitTests/parsed_result.json`, (err) =>{
                //console.log(err);
            });
            res.send(finalContent);
        });

        
    });

  });

  app.get("/hckey", (req, res, next) => {

    

    var accessTokenFromClient = req.query.token;

    cognitoExpress.validate(accessTokenFromClient, function(err, response) {
        if (err) {
            // res.send(401, {error: "incorrect access token"})
            // res.CreateErrorResponse(401, "test")
            res.status(401).send({"error": "incorrect access token"})
        } else {
            res.send({"api": "qLBrEwIv690nAbMfVHB965WC3KfoC1VpvkBjDUiBfVOG5mTzlUlwkckKLerAUxxv"})
        }
    });
  })

  app.get("/search-jobs", (req, res, next) => {
    var projectId = "krow-network-1533419444055"
    var jobService = undefined
    var request = {
        parent: "projects/" + this.jobService
    }
    var q = req.query.q
    var id = req.query.id
    var location = req.query.location
    google.auth.getApplicationDefault(async (err, authClient) => {
        if (err) {
          console.error('Failed to acquire credentials');
          console.error(err);
          return;
        }
      
        if (authClient.createScopedRequired && authClient.createScopedRequired()) {
          authClient = authClient.createScoped([
            'https://www.googleapis.com/auth/jobs'
          ]);
        }
      
        // Instantiates an authorized client
        const jobService = google.jobs({
          version: 'v3',
          auth: authClient
        });
      
        
        const jobQuery = {
          query: q,
          locationFilters: {
              address: location
          }
        };
  
        var sessionId = "UNKNOWN"
        var userId = "UNKNOWN"
  
        if (id !== undefined) {
          sessionId = id
          userId = id
        }
        
        var METADATA = {
          "domain": "https://krownetwork.com",
          "sessionId": sessionId,
          "userId": userId
        }
  
        const request = {
          resource: {
            jobQuery: jobQuery,
            requestMetadata: METADATA,
            searchMode: 'JOB_SEARCH',
          },
            parent: 'projects/' + projectId,
        };
        var result = await jobService.projects.jobs.search(request)
        // console.log(JSON.stringify(result.data))
        res.send(result.data)
  
      });
})

app.get("/get-job", (req, res, next) => {
    var projectId = "krow-network-1533419444055"
    // var jobService = undefined
    // var request = {
    //     parent: "projects/" + this.jobService
    // }
    // var q = req.query.q
    var name = req.query.name
    // var location = req.query.location
    google.auth.getApplicationDefault(async (err, authClient) => {
        if (err) {
          console.error('Failed to acquire credentials');
          console.error(err);
          return;
        }
      
        if (authClient.createScopedRequired && authClient.createScopedRequired()) {
          authClient = authClient.createScoped([
            'https://www.googleapis.com/auth/jobs'
          ]);
        }
      
        // Instantiates an authorized client
        const jobService = google.jobs({
          version: 'v3',
          auth: authClient
        });
      
        
        const request = {
            name: name,
        };

        var result = await jobService.projects.jobs.get(request)
        // console.log(JSON.stringify(result.data))
        res.send(result.data)
  
      });
})
    

//     var accessTokenFromClient = req.query.token;

//     cognitoExpress.validate(accessTokenFromClient, function(err, response) {
//         if (err) {
//             // res.send(401, {error: "incorrect access token"})
//             // res.CreateErrorResponse(401, "test")
//             throw new Error({"error": "incorrect access token"})
//         } else {
//             res.send({
//                 "type": "service_account",
//                 "project_id": "krow-network-1533419444055",
//                 "private_key_id": "32d5a289781ec2769bb3fff644f76e966aa3eecc",
//                 "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDF93jG5+us5ZHR\ndDCbXrzr8xCvmBvAYE8HU4n41k2jvKp1TCzEB3gUF+yOVa6ecKGpcGUnv7QHiHIJ\nDbOYfWH7r9NRQOBQERNmQcLmwGMXxkqQR7JnqE13V/d3Ns7AuODEtnHCWnnO107f\n5APCoMcO9Ym65YIVg3ojHTyEKrkTfvW2t+7ADNjfd7LQgSxGLIqDIGeaqZFLCren\n1yLcwsoK7PyRMGdfEXoJlDEglDLmaVY4K4D7EIv4BerlvwpSsURbujmdOfasfOyf\nyci6/1NujShKNNahR7E4bEkjjugcCGs2zCaWjbn9dFd1SltznhYqNfZ8eGlXXRtU\nKpM0+H9pAgMBAAECggEAAfhhzRb7Tzv0rNE7d5xkhHOll53Lruk2eCPydFXLrYS/\n7I1ux5+saATJ76u2InEMBtftxczAYa/PtLvcbPjYfA0GrSEYamuVFhgy9KF3CwJH\n9TIleicgaD7poVfcDGp6oDKRpMXKPw8BA7Ts/aeke4dhkMjed9DYaxeMJeOX9nPx\nSU9W4NmiiWWINqR6gkuG2BiNMJ0M7u2NS8DKp3+c4Gx1hrXJUYDp5C9s8RDbdruR\n3VoJgfxxWKCKt/7I3xQRkBN+LQvwNilBCg8gJoOVXf3yoFBmQxbrzZ61Hr9Rrp84\nUSH9iS+DfqSXjTznrwQPZYTMVxq0Hz5ZHBj2N5BZJQKBgQDrYf26Fe/yVrIFBxcP\nNiicfeqXt0UOuunElt5KKLc5/dYF4s0bGy881f2q2IWKbEKAfXkVJUwDVDWt3O2W\n9ZpLr4WK9mW10fYz9m9fAVKXxXfCs+NgkGwzydK96H9YK9A7n0RC4S5HxNDRdhT+\ntGv9y2jv5E1PKqzw7i5h78YYLQKBgQDXTn8P/ZwDRYgc/QykXQbqu/RAqeWeu4Ee\ngz/sT9sjtdNgliCQWJgywwQTrbE8BGRqzqd8mtDdY8ilOa55NOIgWvBjeYzRP/9u\nQqcpAhhSP3qcuh9jn42GcXDs4TR72LVp1gMQeyrINnIwmXkY4Khdz0UuqpkbLTDD\nSyt2PWttrQKBgHvUy5UQYXGOpoz6k+kOxwK9Q6OZaR08vCsOa9d74BkEL4pdLSZr\ngMhyk8dDrc2K8tmCKSc0ve6qaKsVJXFbuFbE+m6G/i9PTEU+Co1itr7dxgmKdb6h\nfCsqrFH4dLZAJoaXXWQJ7z0Wj/0CMD1nUcDtOEGsS/ewLdd6lrAzYnXpAoGBALj7\nzTl86LT64XYeh+UTtCSrdbC1B/64FLiVha9P8PSefMzIT5QVOjaqzO7nVZY+I9SM\nVuQ802TTHYmvpFKo9/tahpzAyxbhSGGATMRz81d/CKZtVxit9ddj0eUDnKcnSr5y\nzFE1sU0xUiylP6D7LEzlDwiINGFgEzxHckD1hj5FAoGAeZMeWeKIi7uFcASGFL7d\nh3uCDocJyapcV4ifYQhqGdNmlTCHpbSI0CVCIYpNXPArvJu4BoPYvjfr0U5rTNpa\nj9ygWyei3lP7KW7rfg85Nc0hIabJUVp69B8hV3EzI7emFma42oX2wUyaUQo6dW5E\nNpzbgBIRl3U9vA39JfkSBFQ=\n-----END PRIVATE KEY-----\n",
//                 "client_email": "sa-tucker@krow-network-1533419444055.iam.gserviceaccount.com",
//                 "client_id": "102683241006256121091",
//                 "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//                 "token_uri": "https://oauth2.googleapis.com/token",
//                 "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//                 "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/sa-tucker%40krow-network-1533419444055.iam.gserviceaccount.com"
//               })
//         }
//     });
//   })

  


  

  app.post("/delete", (req, res, next) => {
    var accessTokenFromClient = req.query.token;
    var id = req.query.id;

    cognitoExpress.validate(accessTokenFromClient, function(err, response) {
        if (err) {
            errorHandler(next, 401, "incorrect access token")
            // res.send(401, new Error("incorrect access token"))
        } else {
            exec("aws cognito-idp admin-delete-user --user-pool-id us-east-2_THcotoVBG --username " + req.body.id, (error, stdout, stderr) => 
        {
            if (error) {
                // res.send(500, new Error("internal server error"))
                errorHandler(next, 500, "internal server error")
            } else {
                res.send(200, {success: "the applicant was deleted"})
            }
        })
        request.delete("http://18.220.46.51:3000/api/Applicant/" + id, {headers: {"x-api-key": "qLBrEwIv690nAbMfVHB965WC3KfoC1VpvkBjDUiBfVOG5mTzlUlwkckKLerAUxxv"}}, function(err, res2) {
            if (err) {
                // // console.log(err)
                errorHandler(next, 400, err)
            } else {
                res.send(200, res2.body)
            }
    })

        }
    });
  })

  app.get("/search", (req, res, next) => {
    var term = req.query.term;
    var key = req.query.key;
    request.get("http://18.220.46.51:4200/search?term=" + term + "&key=" + key, function(err, res2) {
        if (err) {
            // // console.log(err)
            errorHandler(next, 400, err)
        } else {
            res.send(200, res2.body)
        }
    })
    
  })

  app.get("/h", (req, res, next) => {
      console.log("h")
   var url = req.query.url
    request.get(url, {headers: {"x-api-key": "qLBrEwIv690nAbMfVHB965WC3KfoC1VpvkBjDUiBfVOG5mTzlUlwkckKLerAUxxv"}}, function(err, res2) {
        if (err) {
            // // console.log(err)
            res.send(400, errorHandler(next, 400, err))
            // res.status(400).send({status: 400, message: new Error(err)});
        } else {
            
            res.send(200, res2.body)
        }
    })
  })
//   https://us-18.api.mailchimp.com/3.0/lists/0d43791d4b
  app.post("/new-member", (req, res, next) => {
    var data = req.body
    var auth = new Buffer('any:eac99e13e104235d60828809af71d173-us18' ).toString('base64')

        request.post("https://us18.api.mailchimp.com/3.0/lists/0d43791d4b/members/", {headers: {"Authorization":"Basic " + auth}, json: data}, function(err, res2) {
            if (err) {
                errorHandler(next, 400, err)
            } else {
                res.send(200, res2.body)
            }
        })
    })
  

  app.get("/g", (req, res, next) => {
    var url = req.query.url
    var accessTokenFromClient = req.query.token;

    if (accessTokenFromClient == "share") {
        request.get(url, {headers: {"x-api-key": "qLBrEwIv690nAbMfVHB965WC3KfoC1VpvkBjDUiBfVOG5mTzlUlwkckKLerAUxxv"}}, function(err, res2) {
            if (err) {
                errorHandler(next, 400, err)
            } else {
                res.send(200, res2.body)
            }
        })
    } else {

    

    cognitoExpress.validate(accessTokenFromClient, function(err, response) {
        if (err) {
            errorHandler(next, 401, "incorrect access token")
        } else {
            request.get(url, {headers: {"x-api-key": "qLBrEwIv690nAbMfVHB965WC3KfoC1VpvkBjDUiBfVOG5mTzlUlwkckKLerAUxxv"}}, function(err, res2) {
                if (err) {
                    // // console.log(err)
                    errorHandler(next, 400, err)
                } else {
                    res.send(200, res2.body)
                }
            })
          }
        })
            //     if (err) res.send(400, {"res": "error"});
            //     else res.send(200, {"res": "success"})
            // })

            // qLBrEwIv690nAbMfVHB965WC3KfoC1VpvkBjDUiBfVOG5mTzlUlwkckKLerAUxxv
        
    }});

    app.post("/compare", (req, res, next) => {
        var url = req.query.url
        var accessTokenFromClient = req.query.token;
        var data = req.body
        // console.log(data)
    
        cognitoExpress.validate(accessTokenFromClient, function(err, response) {
            if (err) {
                errorHandler(next, 401, "incorrect access token")
            } else {
                request.post("http://35.237.230.100:5000/predict", {form: data}, function(err, res2) {
                    if (err) {
                        // // console.log(err)
                        errorHandler(next, 400, err)
                    } else {
                        res.send(200, res2.body)
                    }
                })
              }
            })
                //     if (err) res.send(400, {"res": "error"});
                //     else res.send(200, {"res": "success"})
                // })
    
                // qLBrEwIv690nAbMfVHB965WC3KfoC1VpvkBjDUiBfVOG5mTzlUlwkckKLerAUxxv
            
        });


    app.post("/p", (req, res, next) => {
        var url = req.query.url
        var accessTokenFromClient = req.query.token;
        var data = req.body
        // // console.log(data)
    
        cognitoExpress.validate(accessTokenFromClient, function(err, response) {
            if (err) {
                errorHandler(next, 401, "incorrect access token")
            } else {
                request.post(url, {headers: {"x-api-key": "qLBrEwIv690nAbMfVHB965WC3KfoC1VpvkBjDUiBfVOG5mTzlUlwkckKLerAUxxv"}, json: data}, function(err, res2) {
                    if (err) {
                        // // console.log(err)
                        errorHandler(next, 400, err)
                    } else {
                        res.send(200, res2.body)
                    }
                })
              }
            })
                //     if (err) res.send(400, {"res": "error"});
                //     else res.send(200, {"res": "success"})
                // })
    
                // qLBrEwIv690nAbMfVHB965WC3KfoC1VpvkBjDUiBfVOG5mTzlUlwkckKLerAUxxv
            
        });

    app.post("/query", (req, res, next) => {
        // var url = req.query.url
        var accessTokenFromClient = req.query.token;
        var data = req.body
        // var qry = req.body.query
        var url = req.body.url
        // // console.log(data)
    
        cognitoExpress.validate(accessTokenFromClient, function(err, response) {
            if (err) {
                res.send(401, new Error("incorrect access token"))
            } else {
                request.get(url, {headers: {"x-api-key": "qLBrEwIv690nAbMfVHB965WC3KfoC1VpvkBjDUiBfVOG5mTzlUlwkckKLerAUxxv"}}, function(err, res2) {
                    if (err) {
                        // // console.log(err)
                        errorHandler(next, 400, err)
                    } else {
                        res.send(200, res2.body)
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
                // console.log(err)
                errorHandler(next, 400, err)
            } else {
                res.send(200, res2.body)
            }
        })
    })

    app.post("/pu", (req, res, next) => {
        var url = req.query.url
        var accessTokenFromClient = req.query.token;
        var data = req.body
        // console.log(data)
    
        cognitoExpress.validate(accessTokenFromClient, function(err, response) {
            if (err) {
                res.send(401, {error: "incorrect access token"})
            } else {
                request.put(url, {headers: {"x-api-key": "qLBrEwIv690nAbMfVHB965WC3KfoC1VpvkBjDUiBfVOG5mTzlUlwkckKLerAUxxv"}, json: data}, function(err, res2) {
                    if (err) {
                        // console.log(err)
                        errorHandler(next, 400, err)
                    } else {
                        res.send(200, res2.body)
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
    // // console.log(req.body)
    var body = ""
    req.on("data", function(chunk) {
        body += chunk
    })
    // // console.log(body)
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
                errorHandler(next, 500, err)
            } else {
                res.send(200, {success: "sent"})
            }
        });
    })
})

app.post("/feedback", (req, res, next) => {
    // // console.log(req.body)
    var body = ""
    req.on("data", function(chunk) {
        body += chunk
    })
    // // console.log(body)
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
                errorHandler(next, 500, err)
            } else {
                res.send(200, {success: "sent"})
            }
        });
    })
})


  app.post("/applicant-request", (req, res, next) => {
    // // console.log(req.body)
    var body = ""
    req.on("data", function(chunk) {
        body += chunk
    })
    // // console.log(body)
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
                errorHandler(next, 500, err)
            } else {
                res.send(200, {success: "sent"})
            }
        });
    })
})

app.post("/request-verification", (req, res, next) => {
    // // console.log(req.body)
    // console.log("OK THIS IS JUST EPIC")
    var body = ""
    req.on("data", function(chunk) {
        body += chunk
    })
    // // console.log(body)
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
                errorHandler(next, 500, err)
            } else {
                res.send(200, {success: "sent"})
            

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
                // console.log(ddb_params)
                ddb.putItem(ddb_params, function(err, data) {
                    // console.log("test")
                    // console.log(data, err)
                })


            }
        });
    })
})

app.post("/share-resume", (req, res, next) => {
    // // console.log(req.body)
    var body = ""
    req.on("data", function(chunk) {
        body += chunk
    })
    // // console.log(body)
    var applicant_name = req.body.applicant_name
    var id = req.body.id

    var link = "https://www.krownetwork.com/applicant/profile-info/" + id

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
    ejs.renderFile(__dirname + "/templates/share.ejs", { name: applicant_name, link: link }, function (err, data) {
        var mailOptions = {
            from: "Krow Network No-Reply <notifications@krow.network>",
            to: req.body.to,
            subject: "Somebody Shared Their Resume With You!",
            html: data
        }
        sender.sendMail(mailOptions, function (err, info) {
            if (err) {
                errorHandler(next, 500, err)
            } else {
                res.send(200, {success: "sent"})
            }
        });
    })
})


app.post("/applicant-unrequest", (req, res, next) => {
    // // console.log(req.body)
    var body = ""
    req.on("data", function(chunk) {
        body += chunk
    })
    // // console.log(body)
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
                errorHandler(next, 500, err)
            } else {
                res.send(200, {success: "sent"})
            }
        });
    })
})

app.post("/hire-request", (req, res, next) => {
    // // console.log(req.body)
    var body = ""
    req.on("data", function(chunk) {
        body += chunk
    })
    // // console.log(body)
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
                errorHandler(next, 500, err)
            } else {
                res.send(200, {success: "sent"})
            }
        });
    })
})

app.post("/accept-hire", (req, res, next) => {
    // // console.log("accept-hire")
    // // console.log(req.body)
    var body = ""
    req.on("data", function(chunk) {
        body += chunk
    })
    // // console.log(body)
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
                errorHandler(next, 500, err)
            } else {
                res.send(200, {success: "sent"})
            }
        });
    })
})

https.createServer(options, app).listen(443, function (err) {
    if (err) {
      throw err
    }
    // // console.log(`worker ${process.pid} started`);

})
// app.listen(4200, () => console.log(`Example app listening on port ${port}!`))