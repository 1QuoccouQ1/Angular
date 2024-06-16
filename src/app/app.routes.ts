import { Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { DashbroadComponent } from './Components/dashbroad/dashbroad.component';
import { DsUserComponent } from './Components/ds-user/ds-user.component';
import { DsProductComponent } from './Components/ds-product/ds-product.component';
import { CreateProductComponent } from './Components/create-product/create-product.component';
import { ChangeProductComponent } from './Components/change-product/change-product.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    { path: "home", component: DashbroadComponent , canActivate: [AuthGuard] },
    { path: "User", component: DsUserComponent  },
    { path: "Angular/Product", component: DsProductComponent  },
    { path: "changeProduct", component: ChangeProductComponent  },
    { path: "creartProduct", component: CreateProductComponent  },
    { path: "resgister", component: RegisterComponent  },
    { path: "login", component: LoginComponent  },
    {path:"", redirectTo:"login", pathMatch:"full"},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }