import { NgModule } from '@angular/core';
import { Routes, RouterModule, NavigationStart, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DocumentsComponent } from './documents/documents.component';
import { AtividadesComponent } from './atividades/atividades.component';
import { EntregaComponent } from './entrega/entrega.component';
import { AuthService } from './service/auth.service';
 

const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, children: [
    {path: 'documents', component: DocumentsComponent},
    {path: 'activities', component: AtividadesComponent},
    {path: 'delivery', component: EntregaComponent}
  ]},
  {path: '', redirectTo: "/login", pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

    constructor(private authService: AuthService,
      private router: Router) {
      this.configureRouteListener()
    }

  configureRouteListener() {
  this.router.events.subscribe( event => {

  if (event instanceof NavigationStart) {
      
      if (event.url.startsWith("/home") && !this.authService.isUserAuth()) {
          this.router.navigateByUrl("/login")
      } else if (event.url == "/login" || event.url == "/" && this.authService.isUserAuth()) {
          this.router.navigateByUrl("/home")
      }
  }

  })
  }

}

export const routingComponents = [HomeComponent, 
  LoginComponent, 
  DocumentsComponent, 
  AtividadesComponent, 
  DocumentsComponent,
  EntregaComponent]
