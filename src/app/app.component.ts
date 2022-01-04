import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  public affichageConsole(event: Event): void {
    console.log("clic");
  }
}
