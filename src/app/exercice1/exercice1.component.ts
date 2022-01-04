import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public imgSrc = "https://c.tenor.com/69iFB2D3CGgAAAAC/curious-watching.gif";
  public txtAlt = "Who's there?";
  public imgWidth = "400";

  public changeImg(imgSrc: string): void {
    this.imgSrc = imgSrc;
  }

  surnom: string;

  constructor() {
    this.surnom = "Joe l'embrouille";
  }

  ngOnInit(): void {}
}
