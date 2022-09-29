import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EntrarComponent } from "./entrar.component";




const routes: Routes = [
    { path: '', component: EntrarComponent },
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class EntrarRoutingModule {}