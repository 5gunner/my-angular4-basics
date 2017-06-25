import { ScientistHomeComponent } from './scientists/scientist-home/scientist-home.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { NgModule } from '@angular/core';
import { EditScientistComponent } from './scientists/edit-scientist/edit-scientist.component';
import { NewScientistComponent } from './scientists/new-scientist/new-scientist.component';
import { RouterModule, RouterState, Routes } from '@angular/router';

export const appRoutes: Routes = [
    { path: '', component: ScientistHomeComponent, pathMatch: 'full' },
    { path: 'new-scientist', canActivate: [AuthGuardService], component: NewScientistComponent },
    { path: 'edit-scientist/:id', canActivate: [AuthGuardService], component: EditScientistComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
