var express = require("express")
var path = require("path")
var nodeMailer = require("nodemailer")
var ejs = require("ejs")
var app = express()
var bodyParser = require("body-parser");

var port = 4200
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use(bodyParser.urlencoded({ extended: false }))
  // parse application/json
  app.use(bodyParser.json())

  app.post("/applicant-request", (req, res, next) => {
    console.log(req.body)
    var body = ""
    req.on("data", function(chunk) {
        body += chunk
    })
    console.log(body)
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
                console.log(err);
            } else {
                console.log('Message sent: ' + info.response);
            }
        });
    })
    res.send({"response": "success"})
})

app.post("/applicant-unrequest", (req, res, next) => {
    console.log(req.body)
    var body = ""
    req.on("data", function(chunk) {
        body += chunk
    })
    console.log(body)
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
                console.log(err);
            } else {
                console.log('Message sent: ' + info.response);
            }
        });
    })
    res.send({"response": "success"})
})

app.post("/hire-request", (req, res, next) => {
    console.log(req.body)
    var body = ""
    req.on("data", function(chunk) {
        body += chunk
    })
    console.log(body)
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
                console.log(err);
            } else {
                console.log('Message sent: ' + info.response);
            }
        });
    })
    res.send({"response": "success"})
})

app.post("/aceept-hire", (req, res, next) => {
    console.log(req.body)
    var body = ""
    req.on("data", function(chunk) {
        body += chunk
    })
    console.log(body)
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
                console.log(err);
            } else {
                console.log('Message sent: ' + info.response);
            }
        });
    })
    res.send({"response": "success"})
})

app.listen(port, function (err) {
    if (err) {
      throw err
    }
    console.log(`worker ${process.pid} started`);

})