import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: '', loadChildren: './index/index.module#IndexPageModule' },
  { path: 'inicio-sesion', loadChildren: './inicio-sesion/inicio-sesion.module#InicioSesionPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
