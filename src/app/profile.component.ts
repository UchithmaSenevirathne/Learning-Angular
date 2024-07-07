import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    standalone: true,
    // type selector
    // selector: 'app-profile',

    // attribute selector
    // selector: '[app-profile]',

    // class selector
    // selector: '[app-profile]:not(p)',

    // multiple selector
    // selector: 'app-profile, [app-profile]',

    selector: 'app-profile',

    // template: '<h1>Profile Component</h1>',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],

    // only global are affected
    // encapsulation: ViewEncapsulation.Emulated,

    //global style not affected
    // encapsulation: ViewEncapsulation.ShadowDom,

    //global and unique style affected
    // encapsulation: ViewEncapsulation.None,
})

export default class ProfileComponent{

}