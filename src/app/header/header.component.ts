import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})

export class HeaderComponent {

    @Output() navFeature=new EventEmitter<string>();

    onSend(feature:string) {
        this.navFeature.emit(feature);
    }

}