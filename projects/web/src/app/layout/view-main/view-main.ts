import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { TabBarsComponent } from "../navigation/tab-bars/tab-bars";
import { Sidebar } from "../navigation/sidebar/sidebar";
import { TabViews } from "../navigation/tab-views/tab-views";

@Component({
  selector: 'app-bank-view-main',
  imports: [Header, Footer, RouterOutlet, TabBarsComponent, Sidebar, TabViews],
  templateUrl: './view-main.html',
  styleUrl: './view-main.scss',
})
export class ViewMain {

}
