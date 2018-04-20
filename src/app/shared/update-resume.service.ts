import { Injectable } from '@angular/core';
import { ItemType } from './item-type-constructor';


@Injectable()
export class UpdateResumeService {
    updateMain(dom){
        var currAttribute = dom.localName.slice(11);
        var componentsList = dom.children[0].children[0].children;
        var json = {data: []};
        for(var i = 0; i < componentsList.length; i++){
            if(componentsList[i].children.length != 0){
                var existsEmpty = false;
                var componentInputs = componentsList[i].children[0].children[0].children[1].children[0].children[1].children[0].children;
                var currJson = [];
                for(var k = 0; k < componentInputs.length; k++){
                    var input = componentInputs[k].children[1].children[0];
                    var value = input.value;
                    if(value == ""){
                        input.setAttribute("style", "background-color: #ff4757; -webkit-text-fill-color: white");
                        input.addEventListener("keydown", function(input){
                            input.target.setAttribute("style", "background-color: #fff; -webkit-text-fill-color: #101010");
                        });
                        existsEmpty = true;
                    }
                    else {
                        input.setAttribute("style", "");
                        var currType = input.attributes[1].value;
                        var pushString = "'" + currType + "': '" + value + "',";
                        currJson.push({
                            type: currType,
                            value: value
                        });
                        console.log(currJson);
                    }
                }
                if(existsEmpty != true){
                    json.data.push(currJson);
                    this.updateData(json, currAttribute);
                }
            }
        }
    }

    updateData(jsonData, attribute){
        //TODO: Get data from server, compare, add
        console.log(attribute);
        console.log(jsonData);
    }

    

    updateSkills(dom){
        console.log("ServiceSkills");
        console.log(dom);
    }
}
