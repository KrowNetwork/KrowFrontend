import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CustomHttpService } from "./custom-http.service";
import { S3Service } from "./s3.service"

@Injectable()
export class UpdateResumeService {
    constructor(private http: CustomHttpService, public s3service: S3Service) { }

    user: string;
    guid() {

        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
      }
    
      s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }

    async updateMain(dom, skills_arr=undefined, z=undefined){
        var currAttribute = dom.localName.slice(11);
        var componentsList = dom.children[0].children[0].children;
        console.log('update main called')
        console.log(componentsList)
        var updateButton = dom.children[0].children[1].children[1];
        var json = {data: []};
        this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
        for(var i = 0; i < componentsList.length; i++){
            var currentComponent = componentsList[i].children[0].children[0];
            if(currentComponent.tagName != 'DIV'){
                var existsEmpty = false;
                var componentInputs = currentComponent.children[1].children[0].children[1].children[0].children;
                var currJson = [];
                var itemClass = "network.krow.resume." + currAttribute[0].toUpperCase() + currAttribute.slice(1);
                if(itemClass.slice(-1) == 's'){
                    itemClass = itemClass.slice(0, -1);
                }
                currJson.push({type:"$class", value:itemClass});
                for(var k = 0; k < componentInputs.length; k++){
                    var input = componentInputs[k].children[1].children[0];
                    //console.log('input',input)
                    if(componentInputs.length == 4){
                        var value = input.value;
                    } else {
                        if(k === componentInputs.length-1 && input.value == ""){
                            var value = null;
                        } else if(k === componentInputs.length-1){
                            console.log('here',componentInputs[k].children[1])
                            if(input.getAttribute("secret") == "fileName"){
                                var value = input.value.split(/(\\|\/)/g).pop();
                                currJson.push({
                                    type: "fileUrl",
                                    value: "https://s3.us-east-2.amazonaws.com/krow-network-experience-files/files/" + i + "-" + this.user + "-" + value
                                });
                            } else {
                                console.log('checked?', componentInputs[k].children[1].children[0].children[1].getAttribute("ng-reflect-model"))
                                if(componentInputs[k].children[1].children[0].children[1].getAttribute("ng-reflect-model") == "true"){
                                    //if true -- delete file from aws
                                    this.deleteFile(componentInputs[k].children[1].children[0].children[0].getAttribute("href")) 
                                    currJson.push({
                                        type: "fileUrl",
                                        value: null
                                    });
    
                                    currJson.push({
                                        type: "fileName",
                                        value: null
                                    });
                                    console.log('deleting file...')
                                } 
                                continue;
                            }
                            
                        } else {
                            var value = input.value;
                        }
                    }
                   

                    if(value == ""){
                        input.setAttribute("style", "background-color: #ff4757; -webkit-text-fill-color: #fff");
                        input.addEventListener("keydown", function(input){
                            input.target.setAttribute("style", "background-color: #fff; -webkit-text-fill-color: #101010");
                        });
                        existsEmpty = true;
                        updateButton.innerText = "UPDATE";
                    }
                    else {
                        
                        // var currType = input.attributes[1].value;
                        var currType = input.getAttribute("secret");
                        // console.log(currType)
                        if(currAttribute == "experience" && currType == "skills"){
                            // value = "PROFESSIONALWORK";
                            
                            value = skills_arr[0]
                            skills_arr.shift()
                            //console.log("v", value)
                            currJson.push({
                                type: "verified",
                                value: false
                            })
                            currJson.push({
                                type: "verifyID",
                                value: this.guid()
                            })
                        }
                        // console.log(currType, value)
                        //console.log(z)
                        if (currType == "present") {
                            value = z[0]
                            z.shift()
                            if (value == "true" || value == true) {
                                currJson.push({
                                    type: currType,
                                    value: true
                                });
                            } else {
                                currJson.push({
                                    type: currType,
                                    value: false
                                });
                           } 
                        } else {
                            currJson.push({
                                type: currType,
                                value: value
                            });

                        }
                        
                        
                        
                    }
                }
                if(existsEmpty != true){
                    json.data.push(currJson);
                }
                else{
                    return;
                }
            }
            if(i == componentsList.length - 1){
                console.log('json',json)
                return this.updateData(updateButton, json, currAttribute);
            }
        }
        for(var j = 0; j < componentsList.length; j++){
            var currentComponent = componentsList[j].children[0].children[0];
            if(currentComponent.tagName == 'DIV'){
                if(j == componentsList.length){
                    var node = document.createElement("ng-template");
                    componentsList[j].parentNode.appendChild(node);
                    componentsList[j].parentNode.removeChild(componentsList[j]);
                }
                else{
                    componentsList[j].parentNode.removeChild(componentsList[j]);
                    j -= 1;
                }
            }
        }
    }

    deleteFile(url){
        let user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");

        let path = url.split('/');
        const bucketName = 'krow-network-experience-files';
        let s3 = this.s3service.getBucket(bucketName);
        s3.deleteObject({ 
            Key: "files/" + path[path.length-1],
            Bucket: bucketName,
          }, function (err, data) {
              if (err) {
                console.log(err, 'there was an error uploading your file');
              } else {
                console.log(data)
              }
        });
    }


    updateData(updateButton, jsonData, attribute){
        console.log(attribute)
        updateButton.style.pointerEvents = 'none';
        updateButton.innerText = "Updating...";
        this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");

        var url = "http://18.220.46.51:3000/api/Applicant/" + this.user;

        this.http.get(url).subscribe(
            data => {
                console.log('this data', data)
                // console.log(data['resume'])
                if(data == null || data == undefined){
                    data = new ArrayBuffer(16);
                    data["resume"] = {}
                }

                if(attribute == "skills"){
                    data["resume"][attribute] = [];
                    jsonData.forEach(element => {
                        data["resume"][attribute].push(element);
                    });
                }
                else{
                   
                    console.log(jsonData)
                    var newData = new Array();
                    for(var i = 0; i < jsonData.data.length; i++){
                        var dataInstance = jsonData.data[i];
                        var currObj = new Object();
                        for(var k = 0; k < dataInstance.length; k++){
                            currObj[dataInstance[k].type] = dataInstance[k].value;
                        }
                        newData.push(currObj);
                    }
                    if (attribute == "experience") {
                        console.log("yerr")
                        if (newData.length != 0) {
                            for (var i = 0; i < data['resume'][attribute].length; i += 1) {
                                
                                // if (newData[i].verified !== undefined || data['resume'][attribute][i].verified !== undefined) {
                                //     newData[i].verified = data['resume'][attribute][i].verified
                                //     newData[i].verifyID = data['resume'][attribute][i].verifyID
                                // }
                                // if (data['resume'][attribute][i].present === undefined) {
                                //     newData[i].present = false
                                // }
                            }
                        }
                    } 
                    console.log(newData)
                    console.log(data)
                    data["resume"][attribute] = [];
                    newData.forEach(element => {
                        console.log(element)

                        data["resume"][attribute].push(element);
                    });
                    }
                    
                

                // Get timestamp and change data timestamp
                var timestamp = new Date();
                data["lastUpdated"] = timestamp;
                data["resume"]["lastUpdated"] = timestamp;
                console.log(data)
                // if (data['resume']['experiences'])
                return this.postData(data, url, updateButton);

            }, // Catch Errors
            (err: HttpErrorResponse) => {
                alert("Could not get data!");
                updateButton.innerText = "UPDATE";
                if (err.error instanceof Error) {
                    // console.log("Client-side error occured.");
                } else {
                    // console.log("Server-side error occured.");
                }
            }
        );
    }

    postData(data, url, updateButton){
        console.log("Posting Data");
        console.log(data)
        // Update entry
        this.http.put(url, data).subscribe(
            data => {
                console.log(data)
                updateButton.setAttribute("style", "display: none");
                updateButton.innerText = "UPDATE";
                updateButton.style.pointerEvents = 'auto';
                return 'done'
            }, // Catch Errors
            (err: HttpErrorResponse) => {
                alert("Could not post data!");
                updateButton.innerText = "UPDATE";
                if (err.error instanceof Error) {
                    // console.log("Client-side error occured.");
                } else {
                    // console.log("Server-side error occured.");
                }
                // console.log(err)
            }
        );
    }

    updateSkills(dom){
        var attribute = "skills";
        var updateButton = dom.children[0].children[1].children[0];
        var objArray = [];
        var childrenElements = dom.children[0].children[0].children[0].children[0].children;
        for(var i = 0; i < childrenElements.length - 1; i++){
            var currentElementValue = childrenElements[i].children[1].value;
            var obj = {
                ["$class"]:"network.krow.resume.Skill",
                ["skill"]:currentElementValue
            };
            objArray.push(obj);
        }
        this.updateData(updateButton, objArray, attribute);
    }
}