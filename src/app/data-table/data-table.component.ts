import { Component, OnInit, Input } from "@angular/core";
import { DataSource } from "@angular/cdk/table";
import { BehaviorSubject, Observable } from "rxjs";

import * as data from "src/assets/car.json";
import { CommonServicesService } from "src/common-services.service";

@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.css"]
})
export class DataTableComponent implements OnInit {
  @Input() path: string = "test-local";
  @Input() filepath: string = "local-file";
  @Input() displayedColumns: any[] = [];

  // displayedColumns = ['name', 'company', 'bio', 'public_repos'];
  dataSource: MyDataSource;
  dataSubject = new BehaviorSubject<any[]>([]);

  constructor(private apiService: CommonServicesService) {}

  // ngOnInit() {
  //   this.dataSource = (data as any).default;
  // }

  ngOnInit() {
    this.dataSource = new MyDataSource(this.dataSubject);
    this.apiService.getData(this.path).subscribe({
      next: value => this.dataSubject.next([value])
    });
    this.dataSource = (data as any).default;
  }
  ngOnInitFile() {
    this.dataSource = (data as any).default;
  }
}

export class MyDataSource extends DataSource<any[]> {
  constructor(private subject: BehaviorSubject<any[]>) {
    super();
  }

  connect(): Observable<any[]> {
    return this.subject.asObservable();
  }

  disconnect(): void {}
}
