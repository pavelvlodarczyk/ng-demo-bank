import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bank-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  toggleFlip(event: Event) {
    const target = event.currentTarget as HTMLElement | null;
    if (!target) return;
    target.classList.toggle('flipped');
  }
}
