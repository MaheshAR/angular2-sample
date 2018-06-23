import {Component, Input, Output, EventEmitter} from '@angular/core';
import {trigger, animate, transition, style} from '@angular/animations';

@Component({
    selector: 'modal-window',
    templateUrl: './modalWindow.component.html',
    styleUrls: ['./modalWindow.component.scss'],
    animations: [
        trigger(
            'fadeInOut', [
              transition(':enter', [
                style({opacity: 0}),
                animate('200ms ease-in-out', style({opacity: 1}))
              ]),
              transition(':leave', [
                style({opacity: 1}),
                animate('200ms 100ms ease-in-out', style({opacity: 0}))
              ])
            ]
        ),
        trigger (
            'fadeInOutWithSlide', [
              transition(':enter', [
                style({opacity: 0, transform: 'translate3d(0,0px,0)'}),
                animate('200ms 100ms ease-in-out', style({opacity: 1, transform: 'translate3d(0,100px,0)' }))
              ]),
              transition(':leave', [
                style({opacity: 1, transform: 'translate3d(0,100px,0)'}),
                animate('200ms ease-in-out', style({opacity: 0, transform: 'translate3d(0,0px,0)'}))
              ])
            ]
          )
    ]
})

export class ModalWindowComponent{
    @Input() showModalWindow: boolean = false;
    @Output() closeModalWindow = new EventEmitter();

    bodyClick(){
        this.closeModalWindow.emit();
    }
}