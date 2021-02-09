import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-bootstrap-spinner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; 
import { GeneralPopupMessageComponent } from '../shared/shared-popup/general-popup-message/general-popup-message.component'
import { ModalOptionsConfig } from '../shared/shared-popup/modal-options-config'

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private modalService: NgbModal) { }

  ngOnInit(): void {
    //this.spinner.show();
 
    //setTimeout(() => {
      /** spinner ends after 5 seconds */
      //this.spinner.hide();
    //}, 1000);
  }

  save(): void {
    const modalRef = this.modalService.open(GeneralPopupMessageComponent, ModalOptionsConfig);
    modalRef.componentInstance.success_message = 'Save successful!';
    modalRef.componentInstance.show_success = true;
  }

}
