import { Component } from "@angular/core";
import { IndexService } from "./services/index.service";

@Component({
  selector: "mto-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent {
  private indexService: IndexService;
  public images: string[];
  public imageDescriptions: Object[];

  constructor(indexService: IndexService) {
    this.indexService = indexService;
    this.images = this.indexService.getIndexCarouselImages();
    this.imageDescriptions = this.indexService.getIndexCarouselImageDescriptions();
  }
}
