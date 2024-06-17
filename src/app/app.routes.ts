import { Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { LogoutComponent } from './Components/logout/logout.component';
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
    { path: "User", component: DsUserComponent , canActivate: [AuthGuard]  },
    { path: "Product", component: DsProductComponent , canActivate: [AuthGuard]  },
    { path: "changeProduct", component: ChangeProductComponent , canActivate: [AuthGuard]  },
    { path: "creartProduct", component: CreateProductComponent  , canActivate: [AuthGuard] },
    { path: "resgister", component: RegisterComponent  },
    { path: "login", component: LoginComponent  },
    { path: "logout", component: LogoutComponent  },
    {path:"", redirectTo:"login", pathMatch:"full"},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
// , canActivate: [AuthGuard]