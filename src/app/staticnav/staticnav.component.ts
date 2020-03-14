import { FlatTreeControl } from "@angular/cdk/tree";
import { Component, OnInit } from "@angular/core";
import {
  MatTreeFlatDataSource,
  MatTreeFlattener
} from "@angular/material/tree";

interface FoodNode {
  name: string;
  children?: FoodNode[];
  path: string;
}

const TREE_DATA: FoodNode[] = [
  {
    name: "BLT",
    path: "dummy",
    children: [
      {
        name: "Search",
        path: "home",
        children: [
          { name: "Home", path: "home" },
          { name: "login", path: "login" },
          { name: "login", path: "dummy" }
        ]
      },
      {
        name: "Upload",
        path: "dummy",
        children: [
          { name: "Home", path: "home" },
          { name: "Home", path: "login" }
        ]
      }
    ]
  }
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: "app-staticnav",
  templateUrl: "./staticnav.component.html",
  styleUrls: ["./staticnav.component.css"]
})
export class StaticnavComponent implements OnInit {
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      path: node.path,
      level: level
    };
  };
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable
  );
  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void {}
}
