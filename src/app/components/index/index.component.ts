import { Component } from "@angular/core";

@Component({
  selector: "mto-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent {
  constructor() {}

  images = [1, 2, 3].map(() => "assets/img/back.jpg");
  imageDescriptions = [
    {
      label: "First slide label",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis aspernatur at similique et? Incidunt, officia accusantium cum delectus earum ad fugit placeat ipsum odit harum quo voluptatem. Sit, aliquid minus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis aspernatur at similique et? Incidunt, officia accusantium cum delectus earum ad fugit placeat ipsum odit harum quo voluptatem. Sit, aliquid minus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis aspernatur at similique et? Incidunt, officia accusantium cum delectus earum ad fugit placeat ipsum odit harum quo voluptatem. Sit, aliquid minus. " +
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis aspernatur at similique et? Incidunt, officia accusantium cum delectus earum ad fugit placeat ipsum odit harum quo voluptatem. Sit, aliquid minus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis aspernatur at similique et? Incidunt, officia accusantium cum delectus earum ad fugit placeat ipsum odit harum quo voluptatem. Sit, aliquid minus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis aspernatur at similique et? Incidunt, officia accusantium cum delectus earum ad fugit placeat ipsum odit harum quo voluptatem. Sit, aliquid minus. "
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
}
