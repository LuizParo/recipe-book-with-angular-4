import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector : 'app-header',
    templateUrl : './header.component.html'
})
export class HeaderCompoment {
    @Output() featureSelected: EventEmitter<string> = new EventEmitter<string>();

    onSelect(feature: string): void {
        this.featureSelected.emit(feature);
    }
}