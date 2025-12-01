import { Component, ElementRef, ViewChild, AfterViewInit, inject } from '@angular/core';
import { Router, RouterOutlet, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-bank-view-modal',
  imports: [RouterOutlet],
  templateUrl: './view-modal.html',
  styleUrl: './view-modal.scss',
})
export class ViewModal implements AfterViewInit {
  @ViewChild('dialogRef', { static: true }) 
  protected dialogRef!: ElementRef<HTMLDialogElement>;

  protected router = inject(Router);
  protected route = inject(ActivatedRoute);
  protected outletName?: string;

  public ngAfterViewInit(): void {
    this.dialogRef.nativeElement.showModal();
    this.outletName = this.route.snapshot.data['outletName'];

    // Ensure dialog starts with enter animation (fallback without @starting-style)
    const dialog = this.dialogRef.nativeElement;
    dialog.classList.remove('closing');
    // next frame – add 'opened' to trigger CSS transition to visible state
    requestAnimationFrame(() => {
      dialog.classList.add('opened');
    });
  }

  protected close(): void {
    const dialog = this.dialogRef.nativeElement;
    // Trigger exit transition
    dialog.classList.remove('opened');
    dialog.classList.add('closing');

    // After CSS transition completes, perform navigation and close
    const onEnd = (ev: TransitionEvent) => {
      // Only act on opacity or transform transition end of the dialog itself
      if (ev.target !== dialog) return;
      if (ev.propertyName !== 'opacity' && ev.propertyName !== 'transform') return;

      dialog.removeEventListener('transitionend', onEnd);

      if (this.outletName) {
        this.router.navigate(['/main', { outlets: { [this.outletName]: null } }]);
      } else {
        this.router.navigate(['/main', { outlets: { modal: null, modal_1: null, modal_0: null } }]);
      }
      dialog.close();
    };

    dialog.addEventListener('transitionend', onEnd, { once: false });
  }
}
