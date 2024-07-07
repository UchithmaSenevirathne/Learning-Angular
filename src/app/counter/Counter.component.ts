import { Component, Input } from "@angular/core";
import { changeValue, trimValue } from "./Counter.service";

@Component({
    standalone: true,
    selector: 'app-counter',
    templateUrl: './Counter.component.html',
    styleUrls: ['./Counter.component.scss'],
})
export default class CounterComponent{
    @Input({required: true, transform: changeValue}) count: number = 0;
    @Input({transform: trimValue}) message: string = '';
}
