import { Injectable } from '@angular/core';
import { ItemType } from './item-type-constructor';


@Injectable()
export class UpdateResumeService {
    updateMain(dom){
        var currAttribute = dom.localName.slice(11);
        var componentsList = dom.children[0].children[0].children;
        var existsEmpty = false;
        var json = {data: []};
        for(var i = 0; i < componentsList.length; i++){
            if(componentsList[i].children.length != 0){
                var componentInputs = componentsList[i].children[0].children[0].children[1].children[0].children[1].children[0];
                var currJson = [];
                for(var k = 0; k < componentInputs.length; k++){
                    var input = componentInputs[k].children[1].children[0];
                    var value = input.value;
                    if(value == ""){
                        input.setAttribute("style", "background-color: #ff4757; -webkit-text-fill-color: white");
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
                if(existsEmpty == true){
                    return;
                }
                else{
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
