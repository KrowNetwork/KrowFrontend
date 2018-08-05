import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CustomHttpService } from "./custom-http.service";

@Injectable()
export class UpdateResumeService {
    constructor(private http: CustomHttpService) { }

    user: string;

    async updateMain(dom){
        var currAttribute = dom.localName.slice(11);
        var componentsList = dom.children[0].children[0].children;
        // console.log(componentsList)
        var updateButton = dom.children[0].children[1].children[1];
        var json = {data: []};
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
                    var value = input.value;
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
                        if(currAttribute == "experience" && currType == "type"){
                            value = "PROFESSIONALWORK";
                        }
                        currJson.push({
                            type: currType,
                            value: value
                        });
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
                this.updateData(updateButton, json, currAttribute);
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

    updateData(updateButton, jsonData, attribute){
        updateButton.style.pointerEvents = 'none';
        updateButton.innerText = "Updating...";
        this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");

        var url = "http://18.220.46.51:3000/api/Applicant/" + this.user;

        this.http.get(url).subscribe(
            data => {
                if(attribute == "skills"){
                    data["resume"][attribute] = [];
                    jsonData.forEach(element => {
                        data["resume"][attribute].push(element);
                    });
                }
                else{
                    var newData = new Array();
                    for(var i = 0; i < jsonData.data.length; i++){
                        var dataInstance = jsonData.data[i];
                        var currObj = new Object();
                        for(var k = 0; k < dataInstance.length; k++){
                            currObj[dataInstance[k].type] = dataInstance[k].value;
                        }
                        newData.push(currObj);
                    }
                    data["resume"][attribute] = [];
                    newData.forEach(element => {
                        data["resume"][attribute].push(element);
                    });
                }

                // Get timestamp and change data timestamp
                var timestamp = new Date();
                data["lastUpdated"] = timestamp;
                data["resume"]["lastUpdated"] = timestamp;
                // console.log(data)
                this.postData(data, url, updateButton);
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
        // console.log("Posting Data");
        // console.log(data)
        // Update entry
        this.http.put(url, data).subscribe(
            data => {
                updateButton.setAttribute("style", "display: none");
                updateButton.innerText = "UPDATE";
                updateButton.style.pointerEvents = 'auto';
            }, // Catch Errors
            (err: HttpErrorResponse) => {
                // alert("Could not post data!");
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
