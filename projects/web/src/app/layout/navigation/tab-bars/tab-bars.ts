import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-bank-tab-bars',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './tab-bars.html',
  styleUrls: ['./tab-bars.scss'],
})
export class TabBarsComponent {}

