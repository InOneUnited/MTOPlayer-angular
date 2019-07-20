import { Component, OnInit } from "@angular/core";

@Component({
  selector: "mto-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {
  constructor() {}

  elements: any = [
    { id: 1, first: "Mark", last: "Otto", handle: "@mdo" },
    { id: 2, first: "Jacob", last: "Thornton", handle: "@fat" },
    { id: 3, first: "Larry", last: "the Bird", handle: "@twitter" }
  ];

  headElements = ["ID", "First", "Last", "Handle"];

  images = [1, 2, 3].map(() => "../../../assets/img/back.jpg");
  imageDescriptions = [
    {
      label: "First slide label",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      label: "Second slide label",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      label: "Third slide label",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
    }
  ];

  ngOnInit() {}
}
