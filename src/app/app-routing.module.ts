import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { DummyComponent } from "./dummy/dummy.component";
import { StaticDataComponent } from "./static-data/static-data.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "contact", component: HomeComponent },
  { path: "about", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "dummy", component: DummyComponent },
  { path: "static", component: StaticDataComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
