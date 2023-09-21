import { Component } from "@angular/core";
import { FormData } from "./form.interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  formData: FormData;

  handleSubmit(data: FormData) {
    this.formData = data;
  }
}
