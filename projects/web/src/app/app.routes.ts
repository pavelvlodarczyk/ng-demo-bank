import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'main',
		loadComponent: () => import('./layout/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      {
        path: 'child',
        loadComponent: () => import('../../../../components/child/child').then(m => m.Child)
      }
    ],
  }];
