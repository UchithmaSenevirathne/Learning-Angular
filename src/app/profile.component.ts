import { Component } from "@angular/core";

@Component({
    standalone: true,
    // type selector
    // selector: 'app-profile',

    // attribute selector
    // selector: '[app-profile]',

    // class selector
    // selector: '[app-profile]:not(p)',

    // multiple selector
    selector: 'app-profile, [app-profile]',

    template: '<h1>Profile Component</h1>',
    styleUrls: ['./profile.component.scss']
})

export default class ProfileComponent{

}