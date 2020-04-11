import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { ImportDataComponent } from './admin/import-data/import-data.component';
import { ManageCompanyComponent } from './admin/manage-company/manage-company.component';
import { ManageExchangeComponent } from './admin/manage-exchange/manage-exchange.component';
import { UpdateIopDetailsComponent } from './admin/update-iop-details/update-iop-details.component';
import { UserComponent } from './user/user.component';
import { CompareCompanyComponent } from './user/compare-company/compare-company.component';
import { CompareSectorsComponent } from './user/compare-sectors/compare-sectors.component';
import { IopsComponent } from './user/iops/iops.component';
import { combineLatest } from 'rxjs';
import { UserListComponent } from './userlist/userlist.component';
import { AddcompanyComponent } from './addcompany/addcompany.component';
import { UpdatecompanyComponent } from './updatecompany/updatecompany.component';
import { AddipoComponent } from './addipo/addipo.component';
import { AddsectorComponent } from './addsector/addsector.component';
import { SectorComponent } from './sector/sector.component';
import { Stockexchange } from './stockexchange';
import { AddstockexchangeComponent } from './addstockexchange/addstockexchange.component';
import { StockpriceComponent } from './stockprice/stockprice.component';
import { AddstockpriceComponent } from './addstockprice/addstockprice.component';

const routes: Routes = [{path:"navbar",component:NavbarComponent},
  {path:"", component:HomepageComponent},
  {path:"homepage", component:HomepageComponent},
  {path:"login", component:LoginComponent},
{path:"signup", component:SignupComponent},
{path:"admin-login", component:AdminLoginComponent},
{path:"admin", component:AdminComponent},
{path:"import-data", component:ImportDataComponent},
{path:"manage-company", component:ManageCompanyComponent},
{path:"manage-exchange", component:ManageExchangeComponent},
{path:"update-iop-details", component:UpdateIopDetailsComponent},
{path:"user", component:UserComponent},
{path:"addcompany",component:AddcompanyComponent},
{path:"updatecompany",component:UpdatecompanyComponent},
{path:"compare-company", component:CompareCompanyComponent},
{path:"compare-sectors", component:CompareSectorsComponent},
{path:"iops", component:IopsComponent},
{path:"addipo",component:AddipoComponent},
{path:"addsector",component:AddsectorComponent},
{path:"addstockexchange",component:AddstockexchangeComponent},
{path:"stockprice",component:StockpriceComponent},
{path:"addstockprice",component:AddstockpriceComponent},
{path:"sector",component:SectorComponent},
{path:"userlist",component:UserListComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
