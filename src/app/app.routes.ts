import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'home',
  loadComponent: () => import('./Views/home/home.component').then(m => m.HomeComponent)
  },
  {path:'about',
      loadComponent: () => import('./Views/about/about.component').then(m => m.AboutComponent)
    
  },
  {path:'contact',
      loadComponent: () => import('./Views/contact/contact.component').then(m => m.ContactComponent)

  },
    {path:'homec',
          loadComponent: () => import('./Views/homec/homec.component').then(m => m.HomecComponent)

      },
  {
    path:'**',
    redirectTo:'',
    pathMatch:'full'
  }

  
];
