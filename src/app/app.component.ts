import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map, tap } from "rxjs/operators";
import { DeserializeArray, JsonArray } from "cerializr";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-navigation";

  constructor(private http: HttpClient) {}
}
