import {Component, Input, OnChanges, SimpleChanges, AfterContentInit, 
    AfterContentChecked, ContentChild, TemplateRef, ViewChild, ElementRef, AfterViewInit, OnInit} from '@angular/core';
import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';

//let count = 0;

@Component({
    selector: 'dummy',
    template: `
                <ng-content select="header"></ng-content>
                <div #viewChild2>hai</div>
                <div *ngIf="show" #viewChild3>
                    <ng-container *ngTemplateOutlet="template;context:{$implicit:'hai12'}">
                    </ng-container>
                </div>
                <button (click)="btnClick()">Show Counter</button>
                <ng-content select="[footer]"></ng-content>
            `
})
export class DummyComponent implements OnInit, AfterViewInit, AfterContentInit, AfterViewChecked{
    show: boolean = true;
    @ContentChild(TemplateRef) template: TemplateRef<any>;
    @ContentChild('viewChild1') element1: ElementRef;
    @ViewChild('viewChild2') element2: ElementRef;
    @ViewChild('viewChild3') element3: TemplateRef<any>;

    ngOnInit(){
        console.log('on init');
    }

    ngAfterViewInit(){
        console.log(`el2: ${this.element2}`);
        console.log(`el3: ${this.element3}`);
    }

    ngAfterContentInit(){
        console.log(`el1: ${this.element1}`);
    }

    ngAfterViewChecked(){
        console.log('view on/off');
    }

    btnClick(){
        this.show = !this.show;
    }
}