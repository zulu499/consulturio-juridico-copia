import { Routes } from '@angular/router';
import { GlobalConstants } from '@shared/models/global-constants';
import { resolverExtUrl } from '@shared/services/ext-url-resolver.service';
import { authGuard } from '@shared/guards/auth-guard.service';
import { environment } from '../environments/environment';
import { DemoPageComponent } from './modules/dashboard/components/dashboard/demo-page.component';
import { LoginComponent } from './components/login/login.component';
import { UsuariosExternosComponent } from './components/usuarios-externos/usuarios-externos.component';

const nombrePagina = GlobalConstants.nombrePagina;
const default_role = environment.default_role;

//Para pedir login inmediato se deben activar el resolver y el guard de la ruta
export const routes: Routes = [
  {
    path: `dashboard`,
    //resolve: { url: resolverExtUrl },
    //canActivate: [authGuard],
    component: LoginComponent,
    title: nombrePagina,
    data: { expectedRoles: [default_role] },
  },
  {
    path: 'usuarios-externos',
    component: UsuariosExternosComponent, // Define el componente que renderizará esta ruta
    title: 'Usuarios Externos',
    // Si necesitas restricciones de acceso, puedes añadir `resolve` o `canActivate` aquí.
  },
  {
    path: 'unauthorized',
    loadComponent: () =>
      import('./shared/components/unauthorized/unauthorized.component'),
  },
  {
    //A esta ruta llega el codigo para generar el token, por lo cual debe coincidir
    //con la ruta registrada en GZRASCR_REDIRECT_URI. Para este caso es: 'http://localhost:4200/authorize'
    path: 'authorize',
    loadComponent: () =>
      import('./shared/components/redirect/redirect.component'),
  },
  {
    path: 'redirect',
    loadComponent: () =>
      import('./shared/components/redirect/redirect.component'),
  },
  {
    path: 'waitAuth',
    resolve: {
      url: resolverExtUrl,
    },
    data: { expectedRoles: [default_role] },
    canActivate: [authGuard],
    loadComponent: () =>
      import('./shared/components/espera-auth/espera-auth.component'),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: `dashboard` },
];
