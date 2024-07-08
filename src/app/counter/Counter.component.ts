import { booleanAttribute, Component, Input } from "@angular/core";
import { changeValue, trimValue } from "./Counter.service";
import { CommonModule } from "@angular/common";
import { GetterInputComponent } from "../getter-input/getter-input.component";

@Component({
    standalone: true,
    imports:[CommonModule],
    selector: 'app-counter',
    templateUrl: './Counter.component.html',
    styleUrls: ['./Counter.component.scss'],
    inputs: ['count', 'message', 'showcounter', 'title: counterTitle'],
})
export default class CounterComponent extends GetterInputComponent{
    @Input({required: true, transform: changeValue, alias: 'dummynamecounter'}) count: string = '';
    @Input({transform: trimValue}) message: string = '';
    @Input({transform: booleanAttribute}) showcounter: boolean = false;
}
