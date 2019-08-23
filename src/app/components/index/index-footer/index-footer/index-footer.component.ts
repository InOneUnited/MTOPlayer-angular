import { Component } from "@angular/core";
import { IndexService } from "../../services/index.service";

@Component({
  selector: "mto-index-footer",
  templateUrl: "./index-footer.component.html",
  styleUrls: ["./index-footer.component.scss"]
})
export class IndexFooterComponent {
  private indexService: IndexService;
  public facebook: Object[];
  public emails: Object[];

  constructor(indexService: IndexService) {
    this.indexService = indexService;
    this.facebook = this.indexService.getIndexFooterFacebookData();
    this.emails = this.indexService.getIndexFooterEmailsData();
  }
}
