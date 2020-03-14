import {
  ChangeDetectorRef,
  Component,
  Injectable,
  OnInit
} from "@angular/core";
import { NestedTreeControl } from "@angular/cdk/tree";
import {
  MatTreeFlattener,
  MatTreeNestedDataSource
} from "@angular/material/tree";
import { BehaviorSubject } from "rxjs";

export class GameNode {
  children: BehaviorSubject<GameNode[]>;
  constructor(
    public item: string,
    children?: GameNode[],
    public parent?: GameNode
  ) {
    this.children = new BehaviorSubject(children === undefined ? [] : children);
  }
}
const TREE_DATA = [
  new GameNode("BLT", [
    new GameNode("Search", [
      new GameNode("Exception"),
      new GameNode("Exclusion"),
      new GameNode("Specal request")
    ]),
    new GameNode("Misc", [
      new GameNode("node1"),
      new GameNode("node2"),
      new GameNode("node3")
    ]),
    new GameNode("Misc1", [
      new GameNode("node1"),
      new GameNode("node2"),
      new GameNode("node3")
    ])
  ])
  // new GameNode("Search", [
  //   new GameNode(`Cnode1`, [
  //     new GameNode(`Cnode12`),
  //     new GameNode(`Cnode13`),
  //     new GameNode(`Cnode14`)
  //   ]),
  //   new GameNode("node21"),
  //   new GameNode("Cnode21"),
  //   new GameNode("cnode22")
  // ])
];

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"]
})
export class SidenavComponent implements OnInit {
  //recursive: boolean = false;
  levels = new Map<GameNode, number>();
  treeControl: NestedTreeControl<GameNode>;

  dataSource: MatTreeNestedDataSource<GameNode>;
  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.treeControl = new NestedTreeControl<GameNode>(this.getChildren);
    this.dataSource = new MatTreeNestedDataSource();
    this.dataSource.data = TREE_DATA;
  }
  getChildren = (node: GameNode) => {
    return node.children;
  };

  hasChildren = (index: number, node: GameNode) => {
    return node.children.value.length > 0;
  };
  ngOnInit(): void {}
}
