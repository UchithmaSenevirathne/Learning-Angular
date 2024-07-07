import { booleanAttribute, Component, Input } from "@angular/core";
import { changeValue, trimValue } from "./Counter.service";
import { CommonModule } from "@angular/common";

@Component({
    standalone: true,
    imports:[CommonModule],
    selector: 'app-counter',
    templateUrl: './Counter.component.html',
    styleUrls: ['./Counter.component.scss'],
})
export default class CounterComponent{
    @Input({required: true, transform: changeValue}) count: string = '';
    @Input({transform: trimValue}) message: string = '';
    @Input({transform: booleanAttribute}) showcounter: boolean = false;
}
