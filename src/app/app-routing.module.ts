import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DocumentsComponent } from './documents/documents.component';
import { AtividadesComponent } from './atividades/atividades.component';


const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'documents', component: DocumentsComponent},
  {path: 'atividades', component: AtividadesComponent},
  {path: '', redirectTo: "/login", pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent, 
  LoginComponent, 
  DocumentsComponent, 
  AtividadesComponent, 
  DocumentsComponent]
