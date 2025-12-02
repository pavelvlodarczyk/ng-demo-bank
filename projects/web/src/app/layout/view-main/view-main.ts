import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { TabBarsComponent } from "../navigation/tab-bars/tab-bars";

@Component({
  selector: 'app-bank-view-main',
  imports: [Header, Footer, RouterOutlet, TabBarsComponent],
  templateUrl: './view-main.html',
  styleUrl: './view-main.scss',
})
export class ViewMain {

}
