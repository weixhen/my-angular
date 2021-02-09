import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap'

export const ModalOptionsConfig: NgbModalOptions = {
    //centered: true,
    keyboard: false,
    backdrop: 'static',
    windowClass: 'modal-opacity',
    backdropClass: 'modal-backdrop-custom'
}

export const ModalOptionsConfigXl: NgbModalOptions = {
    centered: true,
    keyboard: false,
    backdrop: 'static',
    windowClass: 'modal-opacity',
    backdropClass: 'modal-backdrop-custom',
    size: 'xl'
}

export const ModalOptionsConfigLg: NgbModalOptions = {
    centered: true,
    keyboard: false,
    backdrop: 'static',
    windowClass: 'modal-opacity',
    backdropClass: 'modal-backdrop-custom',
    size: 'lg'
}