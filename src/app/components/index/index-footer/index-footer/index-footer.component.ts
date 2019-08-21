import { Component } from "@angular/core";

@Component({
  selector: "mto-index-footer",
  templateUrl: "./index-footer.component.html",
  styleUrls: ["./index-footer.component.scss"]
})
export class IndexFooterComponent {
  constructor() {}

  elements: any = [
    { first: "Mark", last: "Otto", handle: "@mdo" },
    { first: "Jacob", last: "Thornton", handle: "@fat" }
  ];
}
