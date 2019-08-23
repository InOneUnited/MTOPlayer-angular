import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class IndexService {
  constructor() {}

  public getIndexCarouselImages(): string[] {
    return [1, 2, 3].map(() => "assets/img/back.jpg");
  }

  public getIndexCarouselImageDescriptions(): Object[] {
    return [
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

  public getIndexFooterFacebookData(): Object[] {
    return [
      { link: "mat@facebook", label: "Mati Mazurczak" },
      { link: "daro@facebook", label: "Daro Domanski" },
      { link: "krzychu@facebook", label: "Krzychu Jodlowski" }
    ];
  }

  public getIndexFooterEmailsData(): Object[] {
    return [
      { name: "Mati", email: "mati@mati" },
      { name: "Daro", email: "daro@daro" },
      { name: "Krzych", email: "krzych@krzych" }
    ];
  }
}
