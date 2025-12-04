import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TabViews } from "../tab-views/tab-views";

@Component({
  selector: 'app-bank-sidebar',
  imports: [RouterLink, RouterLinkActive, TabViews, RouterOutlet],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {

}
