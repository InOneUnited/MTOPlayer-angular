import { Component } from "@angular/core";

@Component({
  selector: "mto-index-footer",
  templateUrl: "./index-footer.component.html",
  styleUrls: ["./index-footer.component.scss"]
})
export class IndexFooterComponent {
  constructor() {}

  facebook: any = [
    { link: "mat@facebook", label: "Mati Mazurczak" },
    { link: "daro@facebook", label: "Daro Domanski" },
    { link: "krzychu@facebook", label: "Krzychu Jodlowski" }
  ];

  emails: any = [
    { name: "Mati", email: "mati@mati" },
    { name: "Daro", email: "daro@daro" },
    { name: "Krzych", email: "krzych@krzych" }
  ];
}
