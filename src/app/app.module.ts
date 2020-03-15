import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./topnavbar/topnavbar.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { SidenavComponent } from "./sidenav/sidenav.component";

import { MatSortModule } from "@angular/material/sort";

import { HttpClientModule, HttpClient } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

// import { MatCheckboxModule } from "@angular/material/checkbox";
// import { MatSlideToggleModule } from "@angular/material/slide-toggle";

// import { MatButtonToggleModule } from "@angular/material/button-toggle";

// import { MatAutocompleteModule } from "@angular/material/autocomplete";
// import { MatCardModule } from "@angular/material/card";
// import { MatChipsModule } from "@angular/material/chips";
// import { MatExpansionModule } from "@angular/material/expansion";
// import { MatInputModule } from "@angular/material/input";
// import { MatListModule } from "@angular/material/list";

// import { MatMenuModule } from "@angular/material/menu";

// // import {MatNativeDateModule } from "@angular/material/datepicker";
// import { MatProgressBarModule } from "@angular/material/progress-bar";
// import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

// import { MatRadioModule } from "@angular/material/radio";
// // import { MatRippleModule } from "@angular/material/";

// import { MatSelectModule } from "@angular/material/select";
// // ,
// import { MatSidenavModule } from "@angular/material/sidenav";

// import { MatSliderModule } from "@angular/material/slider";
// import { MatSnackBarModule } from "@angular/material/snack-bar";

// import { MatStepperModule } from "@angular/material/stepper";

// import { MatTabsModule } from "@angular/material/tabs";
// import { MatTooltipModule } from "@angular/material/tooltip";

// import { MatTreeModule } from "@angular/material/tree";
// import { MatDatepickerModule } from "@angular/material/datepicker";
// import { MatDialogModule } from "@angular/material/dialog";
// import { MatGridListModule } from "@angular/material/grid-list";
// import { MatRippleModule } from "@angular/material/core";
import { MatTableModule } from "@angular/material/table";
// import { FormsModule } from "@angular/forms";
// import { FlatTreeControl } from "@angular/cdk/tree";
// import {
//   MatTreeFlattener,
//   MatTreeFlatDataSource
// } from "@angular/material/tree";
// import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";

import { MaterialModule } from "./material-module";
import { StaticnavComponent } from "./staticnav/staticnav.component";
import { DummyComponent } from "./dummy/dummy.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { DataTableComponent } from "./data-table/data-table.component";
import { CommonServicesService } from "src/common-services.service";
import { StaticDataComponent } from './static-data/static-data.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    SidenavComponent,
    StaticnavComponent,
    DummyComponent,
    DataTableComponent,
    StaticDataComponent
  ],
  imports: [
    MatSortModule,
    HttpClientModule,
    MatPaginatorModule,
    // FlatTreeControl,
    // MatTreeFlattener,
    // MatTreeFlatDataSource,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule,
    //FormsModule,
    //MatAutocompleteModule,
    MatButtonModule,
    // MatButtonToggleModule,
    // MatCardModule,
    // MatCheckboxModule,
    // MatChipsModule,
    // MatDatepickerModule,
    // MatDialogModule,
    // MatExpansionModule,
    // MatGridListModule,
    // MatInputModule,
    // MatListModule,
    // MatMenuModule,
    // MatProgressBarModule,
    // MatProgressSpinnerModule,
    // MatRadioModule,
    // MatRippleModule,
    // MatSelectModule,
    // MatSidenavModule,
    // MatSlideToggleModule,
    // MatSliderModule,
    // MatSnackBarModule,
    // MatStepperModule,
    MatTableModule,
    // MatTabsModule,
    MatToolbarModule,
    // MatTooltipModule,
    // MatTreeModule,
    // StaticsidenavComponent,
    MatIconModule,
    MaterialModule
  ],
  providers: [CommonServicesService],

  bootstrap: [AppComponent]
})
export class AppModule {}
