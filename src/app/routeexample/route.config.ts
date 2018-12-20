import { Routes } from "@angular/router";
import { AComponent } from "./a.component";
import { BComponent } from "./b.component";
import { CComponent } from "./c.component";
import { LoginComponent } from "./login.component";

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'a', component: AComponent },
    { path: 'b', component: BComponent },
    { path: 'c', component: CComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: LoginComponent }
];