import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../../../../service/modal.service';
import { CustomHttpService } from '../../../../service/custom-http.service'
import { HttpErrorResponse } from '../../../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-share-link-popup',
  templateUrl: './share-link-popup.component.html',
  styleUrls: ['./share-link-popup.component.css']
})
export class ShareLinkPopupComponent implements OnInit {
    @Input() name: String;
    user: string;
    email = false;
    addr: String;
    constructor(
      public modalService: ModalService,
      public http: CustomHttpService
    ){
      this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
    }
    ngOnInit() {
        
    }
    copy() {
      var textToCopy = "https://www.krownetwork.com/applicant/profile-info/" + this.user;
      var result = this.copyTextToClipboard(textToCopy);
    }

    copyTextToClipboard(text) {
      var txtArea = document.createElement("textarea");
      txtArea.id = 'txt';
      txtArea.style.position = 'fixed';
      txtArea.style.top = '0';
      txtArea.style.left = '0';
      txtArea.style.opacity = '0';
      txtArea.value = text;
      document.body.appendChild(txtArea);
      txtArea.select();
    
      try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
        if (successful) {
          return true;
        }
      } catch (err) {
        console.log('Oops, unable to copy');
      } finally {
        document.body.removeChild(txtArea);
      }
      return false;
    }

    sendLink(){

    }
    
    close(){
      this.modalService.destroy()
    }

    showEmail() {
      this.email = true
      console.log(this.name)
    }

    send(addr) {
      var data = {
        applicant_name: this.name,
        id: this.user,
        to: addr
      }

      this.http.post("https://api.krownetwork.com/share-resume", data).subscribe(
        d => { 
          this.close()
          }, (err: HttpErrorResponse) => {
        })
      }
    
}