import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "../home/home.component";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { LoginComponent } from "../login/login.component";


const page: Routes = [
    {   
        path: '', children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '', component: HomeComponent},
            { path: '', component: HeaderComponent, outlet: 'header' },
            { path: '', component: FooterComponent, outlet: 'footer' },
            { path: '', component: SidebarComponent, outlet: 'sidebar' },

        ]
    },
    {
        path: '', children: [
            { path: 'login', component: LoginComponent}
            
        ]

    },
    {
        path: '', children: [

        ]

    }
]
@NgModule({

    imports: [
        RouterModule.forRoot(page),
    ],


    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoatingModule { }
