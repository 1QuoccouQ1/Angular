import { Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { DashbroadComponent } from './Components/dashbroad/dashbroad.component';
import { DsUserComponent } from './Components/ds-user/ds-user.component';
import { DsProductComponent } from './Components/ds-product/ds-product.component';
import { CreateProductComponent } from './Components/create-product/create-product.component';
import { ChangeProductComponent } from './Components/change-product/change-product.component';
import { CreateUserComponent } from './Components/create-user/create-user.component';
import { ChangeUserComponent } from './Components/change-user/change-user.component';
import { DstaskComponent } from './Components/dstask/dstask.component';
import { CreateTaskComponent } from './Components/create-task/create-task.component';
import { ChangeTaskComponent } from './Components/change-task/change-task.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    { path: "home", component: DashbroadComponent , canActivate: [AuthGuard] },
    { path: "User", component: DsUserComponent , canActivate: [AuthGuard]  },
    { path: "Task", component: DstaskComponent , canActivate: [AuthGuard]  },
    { path: "ChangeTask", component: ChangeTaskComponent , canActivate: [AuthGuard]  },
    { path: "CreateTask", component: CreateTaskComponent , canActivate: [AuthGuard]  },
    { path: "creartUser", component: CreateUserComponent , canActivate: [AuthGuard]  },
    { path: "ChangeUser", component: ChangeUserComponent , canActivate: [AuthGuard]  },
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