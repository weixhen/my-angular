import { Component, OnInit } from '@angular/core';
import { ButtonRendererComponent } from '../shared/ag-grid-renderer/button-renderer/button-renderer.component'
import { HttpService } from '../shared/shared-services/http-service/http-service.service'
import { GeneralPopupMessageComponent } from '../shared/shared-popup/general-popup-message/general-popup-message.component'
import { GeneralPopupConfirmComponent } from '../shared/shared-popup/general-popup-confirm/general-popup-confirm.component'
import { UserPopupComponent } from './user-popup/user-popup.component'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalOptionsConfig } from '../shared/shared-popup/modal-options-config'
import { ModalOptionsConfigLg } from '../shared/shared-popup/modal-options-config'  

@Component({
  selector: 'app-sample-grid',
  templateUrl: './sample-grid.component.html',
  styleUrls: ['./sample-grid.component.css']
})
export class SampleGridComponent implements OnInit {
  rowData: any = [];
  users = [];
  selected_user: any ;
  frameworkComponents: any;
  columnDefs = [
    {
      headerName: '',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onView: this.onGridBtnView.bind(this),
        onDelete: this.onGridBtnDelete.bind(this),
        label: 'View'
      },
      width: 100
    },
    { field: 'id', hide: true},
    { field: 'name', headerName: 'Name', width: 300},
    { field: 'username', headerName: 'Username', width: 150},
    { field: 'email', headerName: 'Email', width: 300},
  ];
  defaultColDef = {
    resizable: true,
    sortable: true
  };

  constructor(private httpservice: HttpService, private modalService: NgbModal) { 
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    }
  }


  ngOnInit(): void {
    this.httpservice.request_general_get('https://jsonplaceholder.typicode.com/users').subscribe((data: any) => {
      this.users = data;
    });
  }

  search(): void {
    var selected_user = ''
    if (this.selected_user){
      selected_user = this.selected_user
    }
    this.httpservice.request_general_get('https://jsonplaceholder.typicode.com/users/' + selected_user).subscribe((data: any) => {
      if (data.length){
        this.rowData = data; 
      } else {
        if (data){
          var _data: any = [];
          _data.push(data)
          this.rowData = _data;
        } else {
          const modalRef = this.modalService.open(GeneralPopupMessageComponent, ModalOptionsConfig);
          modalRef.componentInstance.info_message = 'No record found';
          modalRef.componentInstance.show_info = true;
        }
        
      }
    });
  }

  reset(): void {
    this.selected_user = undefined;
    this.rowData = [];
  }

  onGridBtnView(e: any) {
    const modalRef = this.modalService.open(UserPopupComponent, ModalOptionsConfigLg);
    modalRef.componentInstance.user_id = e.rowData.id;
    modalRef.result.then(result =>{
      if (result == 'refresh'){
        this.search();
      }
    })
  }

  onGridBtnDelete(e: any) {
    const modalRef = this.modalService.open(GeneralPopupConfirmComponent, ModalOptionsConfig);
    modalRef.componentInstance.confirm_message = 'Are you sure you want to delete user ' + e.rowData.name + '?'
    modalRef.result.then(result => {
      if (result == 'yes'){
        alert('placeholder to delete post id =' + e.rowData.id)
      }
    })
  }

  



}
