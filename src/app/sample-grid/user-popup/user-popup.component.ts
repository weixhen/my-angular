import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GeneralPopupMessageComponent } from '../../shared/shared-popup/general-popup-message/general-popup-message.component'
import { GeneralPopupConfirmComponent } from '../../shared/shared-popup/general-popup-confirm/general-popup-confirm.component'
import { ModalOptionsConfig } from '../../shared/shared-popup/modal-options-config'
import { HttpService } from '../../shared/shared-services/http-service/http-service.service'


@Component({
  selector: 'app-user-popup',
  templateUrl: './user-popup.component.html',
  styleUrls: ['./user-popup.component.css']
})
export class UserPopupComponent implements OnInit {
  @Input() user_id: number | undefined;
  selected_name: string | undefined;
  selected_username: string | undefined;
  selected_email: string | undefined;
  selected_phone: string | undefined;
  selected_website: string | undefined;
  selected_id: number | undefined;
  btn_update_text = 'Edit'
  disable_edit = true;
  constructor(private httpservice: HttpService, public activeModal: NgbActiveModal,  private modalService: NgbModal) { }

  ngOnInit(): void {
    if (this.user_id == undefined){
      const modalRef = this.modalService.open(GeneralPopupMessageComponent, ModalOptionsConfig);
      modalRef.componentInstance.info_message = 'No user profile found';
      modalRef.componentInstance.show_info = true;
    } else {
      this.httpservice.request_general_get('https://jsonplaceholder.typicode.com/users/' + this.user_id).subscribe((data: any) => {
        this.selected_name = data.name;
        this.selected_email = data.email;
        this.selected_phone = data.phone;
        this.selected_username = data.username;
        this.selected_website = data.website;
        this.selected_id = data.id;
      });
    }
  }

  close(): void {
    this.activeModal.close();
  }

  update(): void {
    this.disable_edit = false;
  }

  cancel(): void {
    this.disable_edit = true;
  }

  save(): void {
    const modalRef = this.modalService.open(GeneralPopupConfirmComponent, ModalOptionsConfig);
    modalRef.componentInstance.confirm_message = 'Are you sure you want to save?';
    modalRef.result.then(result => {
      if (result == 'yes'){
        const modalRef = this.modalService.open(GeneralPopupMessageComponent, ModalOptionsConfig);
        modalRef.componentInstance.success_message = 'Save successful.';
        modalRef.componentInstance.show_success = true;
        
        this.activeModal.close('refresh');
      }
    })
  }

  delete(): void{
    const modalRef = this.modalService.open(GeneralPopupConfirmComponent, ModalOptionsConfig);
    modalRef.componentInstance.confirm_message = 'Are you sure you want to delete user ' + this.selected_name + '?';
    modalRef.result.then(result => {
      if (result == 'yes'){
        alert('placeholder to delete post id =' + this.selected_id)
        this.activeModal.close('refresh');
      }
    })
  }

}
