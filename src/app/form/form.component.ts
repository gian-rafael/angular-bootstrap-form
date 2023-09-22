import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { EmploymentStatus, FormData } from "../form.interface";

import { NgForm } from "@angular/forms";
import { Observable, Subscription } from "rxjs";

type EmploymentOptions = {
  name: string;
  value: EmploymentStatus;
};

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit, OnDestroy {
  @Input() formSubmitted: Observable<boolean>;
  @Output() formSubmit: EventEmitter<FormData> = new EventEmitter();

  currentForm?: NgForm;

  readonly CURRENT_DATE = new Date().toISOString().split("T")[0];

  formSubmitted$: Subscription;

  invalidDate: boolean = false;

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

  ngOnInit() {
    if (this.formSubmitted) {
      this.formSubmitted$ = this.formSubmitted.subscribe(
        (clearForm: boolean) => {
          if (this.currentForm && clearForm) {
            this.currentForm.resetForm();
            this.currentForm.setValue({
              ...this.currentForm.value,
              employment: "",
            });
          }
        }
      );
    }
  }

  ngOnDestroy() {
    this.formSubmitted$.unsubscribe();
  }

  onSubmit(formData: FormData, form?: NgForm) {
    this.currentForm = form;
    this.formSubmit.emit({ ...formData, mobile: `+63${formData.mobile}` });
  }

  handleDateChange(dateValue: string) {
    this.invalidDate =
      new Date(dateValue).getFullYear() >= new Date().getFullYear();
  }
}
