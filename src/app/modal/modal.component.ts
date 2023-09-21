import {
  Component,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  EventEmitter,
} from "@angular/core";
import { FormData } from "../form.interface";

type Fields = Array<[keyof FormData, any]>;

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
})
export class ModalComponent implements OnChanges {
  @Input() formData?: FormData;
  @Output() proceed: EventEmitter<void> = new EventEmitter();

  data: Fields = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes.formData.currentValue) {
      this.data = Object.entries(changes.formData.currentValue) as Fields;
    }
  }

  clearForm() {
    this.proceed.emit();
  }
}
