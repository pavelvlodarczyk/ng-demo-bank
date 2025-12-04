import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main/about',
    pathMatch: 'full',
  },
	{
		path: 'main',
		loadComponent: () => import('./layout/view-main/view-main').then(m => m.ViewMain),
    children: [
      {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full',
      },
      {
        path: 'about',
        loadComponent: () => import('../../../../components/dashboard/dashboard').then(m => m.Dashboard)
      },
      {
        path: 'a',
        loadComponent: () => import('../../../../components/child/child').then(m => m.Child)
      },
      {
        path: 'modal-0',
        outlet: 'modal_0',
        loadComponent: () => import('./layout/view-modal/view-modal').then(m => m.ViewModal),
        data: { outletName: 'modal_0' },
        children: [
          {
            path: '',
            loadComponent: () => import('../../../../components/child/child').then(m => m.Child)
          }
        ]
      },
      {
        path: 'modal',
        outlet: 'modal',
        loadComponent: () => import('./layout/view-modal/view-modal').then(m => m.ViewModal),
        data: { outletName: 'modal' },
        children: [
          {
            path: '',
            loadComponent: () => import('../../../../components/child/child').then(m => m.Child)
          }
        ]
      },
      {
        path: 'modal-1',
        outlet: 'modal_1',
        loadComponent: () => import('./layout/view-modal/view-modal').then(m => m.ViewModal),
        data: { outletName: 'modal_1' },
        children: [
          {
            path: '',
            loadComponent: () => import('../../../../components/child/child').then(m => m.Child)
          }
        ]
      },
      {
        path: 'menu',
        outlet: 'sidebar',
        loadComponent: () => import('./layout/navigation/sidebar/main-menu/main-menu').then(m => m.MainMenu),
      },
      {
        path: 'ulubione',
        outlet: 'sidebar',
        loadComponent: () => import('./layout/navigation/sidebar/favourite/favourite').then(m => m.Favourite),
      },
      {
        path: 'tab1',
        outlet: 'aside',
        loadComponent: () => import('./layout/navigation/sidebar/main-menu/main-menu').then(m => m.MainMenu),
      },
      {
        path: 'tab2',
        outlet: 'aside',
        loadComponent: () => import('./layout/navigation/sidebar/favourite/favourite').then(m => m.Favourite),
      }
    ],
  }];
