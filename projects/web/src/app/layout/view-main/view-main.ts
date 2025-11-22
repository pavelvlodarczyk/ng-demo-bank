import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-bank-view-main',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './view-main.html',
  styleUrl: './view-main.scss',
})
export class ViewMain {

}
