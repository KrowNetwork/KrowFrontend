import { Component, OnInit, ElementRef, ViewChild  } from '@angular/core';
import { CustomHttpService } from '../service/custom-http.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { ThrowStmt } from '../../../../node_modules/@angular/compiler';
import { text } from '../../../../node_modules/@angular/core/src/render3/instructions';

enum FeatureType {
  PAGE = 1,
  BLOCK = 2,
  PARA = 3,
  WORD = 4,
  SYMBOL = 5,
}

enum Breaks {
  UNKNOWN = 0,
  SPACE = "SPACE",
  SURE_SPACE = "SURE_SPACE",
  EOL_SURE_SPACE = "EOL_SURE_SPACE",
  HYPHEN = "HYPHEN",
  LINE_BREAK = "LINE_BREAK",
}
@Component({
  selector: 'app-resume-parser',
  templateUrl: './resume-parser.component.html',
  styleUrls: ['./resume-parser.component.css']
})


export class ResumeParserComponent implements OnInit {
  @ViewChild('layout') canvasRef: ElementRef;
  selectedFile: File
  url = "http://support.lexmark.com/library/LEXMARK/Blank%20Page.jpg"
  constructor(
    // public http: CustomHttpService
    public http: HttpClient
  ) { }
  source: any;
  canvas: any;
  ngOnInit() {
    this.canvas = this.canvasRef.nativeElement;
    let context = this.canvas.getContext('2d');

    this.source = new Image();
    this.source.onload = () =>
    {
        context.drawImage(this.source, 0, 0);
        context.beginPath();
 
    };
    this.source.src = this.url
    // context.drawImage(this.source.src, 0, 0)
  }

  onFileChanged(event) {
    if(event.target.files && event.target.files[0]) { 
      var reader = new FileReader();
      reader.onload = (event:any) => {
        this.onUpload()
        this.url = event.target.result
      }
      reader.readAsDataURL(event.target.files[0]);
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile)
      // this.onUpload()
    }
  }
  rects = []
  dragBox: any
  hasDragBox = false
  onUpload() {
    console.log(this.selectedFile)
    if(this.selectedFile != null){
      
      let headers = new Headers();
      headers.append('Content-Type', 'multipart/form-data');
      // headers.append('authentication', `${student.token}`);
      // let options = new RequestOptions({ headers: headers });

      const formData = new FormData();
      formData.append('filepath', this.selectedFile, this.selectedFile.name);
      console.log(formData.get("filepath"))
      this.http.post("https://api.krownetwork.com/ocr/doesnotmatter", formData).subscribe(
      // this.http.post("http://localhost:2000/ocr/doesnotmatter.jpg", formData).subscribe(
      data => {
        console.log(data)
        var boxes = this.get_document_bounds(data, FeatureType.PARA)
        console.log(boxes)
        
        let context = this.canvas.getContext('2d');

        this.source = new Image();
        this.source.onload = () =>
        {
            var x_conversion_factor = this.source.width / 395
            var y_conversion_factor = this.source.height / 642
            context.drawImage(this.source, 0, 0, 395, 642);
            context.beginPath();

            boxes.forEach(box => {
              var x1 = box[0].vertices[0]["x"]
              var y1 = box[0].vertices[0]["y"]
              var x2 = box[0].vertices[2]["x"] - x1
              var y2 = box[0].vertices[2]["y"] - y1
              x1 = Math.floor(x1 / x_conversion_factor)
              x2 = Math.floor(x2 / x_conversion_factor)
              y1 = Math.floor(y1 / y_conversion_factor)
              y2 = Math.floor(y2 / y_conversion_factor)
              context.rect(x1, y1, x2, y2);
              this.rects.push({x: x1, y: y1, w: x2, h:y2, text: box[1]})
              context.lineWidth = .5;
              context.stroke();

              


            })

            
            
        };
        this.source.src = this.url
        var self = this
        console.log(this.canvas)
        this.canvas.addEventListener('mousedown', function(e) {
          
          console.log(e)
          console.log('mousedown: ' + e.offsetX + '/' + e.offsetY);
          var rect = self.collides(self.rects, e.offsetX, e.offsetY);
          var text = rect.text
          if (rect) {
            self.dragBox = document.createElement('textarea');
            // selBox.offsetX = e.offsetX + "px"
            self.dragBox.style.position = 'fixed';
            self.dragBox.style.height = "115px"
            self.dragBox.style.width = "200px"
            self.dragBox.style.left = self.getMousePos(e).x + 1 + "px";
            self.dragBox.style.top = self.getMousePos(e).y + 1 + "px";
            // selBox.style.opacity = '0';
            self.dragBox.value = rect.text;
            document.getElementById("masonry").insertBefore(self.dragBox, this.canvas);
            // selBox.focus();
            // selBox.select();
            document.execCommand('copy');
            self.hasDragBox = true

            document.addEventListener("mousemove", function(mm) {
              self.dragBox.style.left = self.getMousePos(mm).x + 1 + "px";
              self.dragBox.style.top = self.getMousePos(mm).y + 1 + "px";
            })

            document.addEventListener("mouseup", function(mu) {
              document.getElementById("masonry").removeChild(self.dragBox)
              self.hasDragBox = false
            })
            var tarr = document.getElementsByClassName("experiences")[0].getElementsByTagName("textarea")
            
            // tarr[tarr.length-1].ad
            

          //  ta.addEventListener("mouseup", function(mu) {
          //     console.log("mouseup")
          //     console.log(selBox.value)
          //     ta.textContent = selBox.value
          //     document.body.removeChild(selBox)
          //   })
            // document.body.removeChild(selBox);?W
            
          } else {
              console.log('no collision');
          }
        }, false);
        // this.canvas.addEventListener('click', function(e) {
          
        //   console.log(e)
        //   console.log('mousedown: ' + e.offsetX + '/' + e.offsetY);
        //   var rect = self.collides(self.rects, e.offsetX, e.offsetY);
        //   var text = rect.text
        //   if (rect) {
        //     let selBox = document.createElement('textarea');
        //     selBox.style.position = 'fixed';
        //     selBox.style.left = '0';
        //     selBox.style.top = '0';
        //     selBox.style.opacity = '0';
        //     selBox.value = rect.text;
        //     document.body.appendChild(selBox);
        //     selBox.focus();
        //     selBox.select();
        //     document.execCommand('copy');
        //     document.body.removeChild(selBox);
            
        //   } else {
        //       console.log('no collision');
        //   }
        // }, false);
      }
    )
   }
    
    // } 
    // this.http
  }

  onMouseUp(e) {
    if (this.hasDragBox) {
      e.srcElement.value += " " + this.dragBox.value 
    }
  }

  addNewExperience() {
    console.log("a")
    var div = document.createElement("div")
    div.setAttribute("class", "pf-field")
    div.setAttribute("id", "experiences")

    var expBox = document.createElement("textarea")
    expBox.placeholder =  "Drag any experiences directly from the resume into this box"
    expBox.style.height = "115px"
    expBox.style.minHeight = "115px"
    expBox.style.padding = "12px 12px;"
    // expBox.setAttribute("(mouseup)", "onMouseUp($event)")
    var self = this
    expBox.addEventListener("mouseup", function (e) {
      self.onMouseUp(e)
    })

    var textinput = document.createElement("input")
    textinput.type = "text"
    textinput.placeholder = "Add the title here"
    textinput.style.marginTop = "10px"

    var trashcan = document.createElement("i")
    trashcan.setAttribute("class", "fa fa-trash")
    trashcan.setAttribute("aria-hidden", "true")
    trashcan.style.position = "absolute"
    trashcan.addEventListener("click", function(e) {
      self.delete_exp(e)
    })

    div.appendChild(textinput)
    div.appendChild(expBox)
    div.appendChild(trashcan)
    document.getElementsByClassName("experiences")[0].appendChild(div)
    // document.getElementsByClassName("experiences")[0].appendChild(trashcan)
  }

  addNewEducation() {
    console.log("a")
    var div = document.createElement("div")
    div.setAttribute("class", "pf-field")
    div.setAttribute("id", "education")

    var eduBox = document.createElement("textarea")
    eduBox.placeholder =  "Drag any education directly from the resume into this box"
    eduBox.style.height = "115px"
    eduBox.style.minHeight = "115px"
    eduBox.style.padding = "12px 12px;"
    // expBox.setAttribute("(mouseup)", "onMouseUp($event)")
    var self = this
    eduBox.addEventListener("mouseup", function (e) {
      self.onMouseUp(e)
    })

    // var textinput = document.createElement("input")
    // textinput.type = "text"
    // textinput.placeholder = "Add the title here"
    // textinput.style.marginTop = "10px"

    var trashcan = document.createElement("i")
    trashcan.setAttribute("class", "fa fa-trash")
    trashcan.setAttribute("aria-hidden", "true")
    trashcan.style.position = "absolute"
    trashcan.addEventListener("click", function(e) {
      self.delete_edu(e)
    })

    // div.appendChild(textinput)
    div.appendChild(eduBox)
    div.appendChild(trashcan)
    document.getElementsByClassName("education")[0].appendChild(div)
    // document.getElementsByClassName("experiences")[0].appendChild(trashcan)
  }
  
  onDragEnd(event: DragEvent) {
    console.log('drag end', event);
    // Show dragged element again
    // event.target.style.opacity = 1;
  }

  getMousePos(evt) {
    var doc = document.documentElement || document.body;
    var pos = {
        x: evt.clientX,
        y: evt.clientY 
    };
    return pos;

}

  collides(rects, x, y) {
    var isCollision: any;
    var text = ""
    for (var i = 0, len = rects.length; i < len; i++) {
        var left = rects[i].x, right = rects[i].x+rects[i].w;
        var top = rects[i].y, bottom = rects[i].y+rects[i].h;
        // text = rects[i].text
        if (right >= x
            && left <= x
            && bottom >= y
            && top <= y) {
              // console.log(rects[i])
            isCollision = rects[i];
        }
    }
    return isCollision;
}

  delete_exp(e) {
    document.getElementsByClassName("experiences")[0].removeChild(e.srcElement.parentElement)
  }
  delete_edu(e) {
    document.getElementsByClassName("education")[0].removeChild(e.srcElement.parentElement)
  }

  get_document_bounds(document, feature) {
    var bounds = []
    // var bounds = []
    console.log(document)
    document.pages.forEach(page => {
      page.blocks.forEach(block => {
        block.paragraphs.forEach(paragraph => {
          var para = ""
          var line = ""

          paragraph.words.forEach(word => {
            word.symbols.forEach(symbol => {
              if (feature == FeatureType.SYMBOL)
                  bounds.push(symbol.boundingBox)
              line += symbol.text 
              // console.log(symbol)
              // console.log(line)
              if (symbol.property !== null) {
                if (symbol.property.detectedBreak !== null) {
                  // console.log(line)
                  if (symbol.property.detectedBreak.type == Breaks.SPACE) {
                    // console.log("a " + line)                    
                    line += " "
                    // console.log(line)
                  }
                  if (symbol.property.detectedBreak.type == Breaks.EOL_SURE_SPACE) {
                      line += " "
                      para += line
                      
                      line = ""
                  }
                  if (symbol.property.detectedBreak.type == Breaks.LINE_BREAK) {
                      para += line
                      line = ""
                  }
                }
              }
              
            })
            // console.log(para)
            if (feature == FeatureType.WORD)
                bounds.push(word.boundingBox)
          })
          if (feature == FeatureType.PARA)
              bounds.push([paragraph.boundingBox, para])
        })
        if (feature == FeatureType.BLOCK)
            bounds.push(block.boundingBox)
      })
      if (feature == FeatureType.PAGE)
          bounds.push(page.boundingBox)
    });
    console.log(bounds)
    return bounds
  }

}
