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

const formDataFieldMapping = {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email Address",
  mobile: "Mobile Number",
  gender: "Gender",
  birthday: "Birthday",
  employment: "Employment Status",
};

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
})
export class ModalComponent implements OnChanges {
  @Input() formData?: FormData;
  @Output() proceed: EventEmitter<void> = new EventEmitter();

  readonly formDataFieldMapping = {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email Address",
    mobile: "Mobile Number",
    gender: "Gender",
    birthday: "Birthday",
    employment: "Employment Status",
  };

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
