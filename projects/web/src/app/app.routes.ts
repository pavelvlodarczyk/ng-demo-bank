import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./layout/view-main/view-main').then(m => m.ViewMain),
    children: [
      {
        path: '',
        loadComponent: () => import('../../../../components/child/child').then(m => m.Child)
      }
    ],
  }];
