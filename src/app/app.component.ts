import { Component } from "@angular/core";
import { FormData } from "./form.interface";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  formData: FormData;
  formSubmitted: BehaviorSubject<boolean> = new BehaviorSubject(false);

  handleSubmit(data: FormData) {
    this.formData = data;
  }

  handleProceed() {
    this.formSubmitted.next(true);
  }
}
