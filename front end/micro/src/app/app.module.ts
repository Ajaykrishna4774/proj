import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ImportDataComponent } from './admin/import-data/import-data.component';
import { ManageCompanyComponent } from './admin/manage-company/manage-company.component';
import { ManageExchangeComponent } from './admin/manage-exchange/manage-exchange.component';
import { UpdateIopDetailsComponent } from './admin/update-iop-details/update-iop-details.component';
import { CompareCompanyComponent } from './user/compare-company/compare-company.component';
import { CompareSectorsComponent } from './user/compare-sectors/compare-sectors.component';
import { IopsComponent } from './user/iops/iops.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './userlist/userlist.component';
 import { DataTablesModule} from 'angular-datatables';
import { AddcompanyComponent } from './addcompany/addcompany.component';
import { UpdatecompanyComponent } from './updatecompany/updatecompany.component';
import { AddipoComponent } from './addipo/addipo.component';
import { UpdateipoComponent } from './updateipo/updateipo.component';
import { DeleteipoComponent } from './deleteipo/deleteipo.component';
import { StockComponent } from './stock/stock.component';
import { SectorComponent } from './sector/sector.component';
import { AddsectorComponent } from './addsector/addsector.component';
import { AddstockexchangeComponent } from './addstockexchange/addstockexchange.component';
import { StockpriceComponent } from './stockprice/stockprice.component';
import { AddstockpriceComponent } from './addstockprice/addstockprice.component'; 
import { HighchartsChartModule } from 'highcharts-angular';

import { HighchartsService } from './user/compare-company/HighchartsService.service';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    AdminComponent,
    UserComponent,
    ImportDataComponent,
    ManageCompanyComponent,
    ManageExchangeComponent,
    UpdateIopDetailsComponent,
    CompareCompanyComponent,
    CompareSectorsComponent,
    IopsComponent,
    AdminLoginComponent,
    UserListComponent,
    AddcompanyComponent,
    UpdatecompanyComponent,
    AddipoComponent,
    UpdateipoComponent,
    DeleteipoComponent,
    StockComponent,
    SectorComponent,
    AddsectorComponent,
    AddstockexchangeComponent,
    StockpriceComponent,
    AddstockpriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,  
    ReactiveFormsModule, 
    DataTablesModule,HighchartsChartModule

  ],
  providers: [HighchartsService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
