import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-bank-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  imports: [RouterLink],
})
export class Header {}
