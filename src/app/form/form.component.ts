import { Component, EventEmitter, Output } from "@angular/core";
import { EmploymentStatus, FormData } from "../form.interface";

import { NgForm } from "@angular/forms";

type EmploymentOptions = {
  name: string;
  value: EmploymentStatus;
};

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent {
  @Output() formSubmit: EventEmitter<FormData> = new EventEmitter();

  employmentOptions: EmploymentOptions[] = [
    {
      name: "Unemployed",
      value: "unemployed",
    },
    {
      name: "Full-Time",
      value: "full-time",
    },
    {
      name: "Part-Time",
      value: "part-time",
    },
  ];

  constructor() {}

  onSubmit(formData: FormData) {
    this.formSubmit.emit({...formData, mobile: `+63${formData.mobile}`});
  }
}
