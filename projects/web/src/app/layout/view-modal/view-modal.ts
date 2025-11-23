import { Component, ElementRef, ViewChild, AfterViewInit, inject } from '@angular/core';
import { Router, RouterOutlet, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-bank-view-modal',
  imports: [RouterOutlet],
  templateUrl: './view-modal.html',
  styleUrl: './view-modal.scss',
})
export class ViewModal implements AfterViewInit {
  @ViewChild('dialogRef', { static: true }) dialogRef!: ElementRef<HTMLDialogElement>;

  protected router = inject(Router);
  protected route = inject(ActivatedRoute);
  outletName?: string;

  ngAfterViewInit() {
    this.dialogRef.nativeElement.showModal();
    this.outletName = this.route.snapshot.data['outletName'];
  }

  close() {
    // domyślnie zamykamy modal, ale można użyć outletName do obsługi różnych outletów
    if (this.outletName) {
      this.router.navigate(['/main', { outlets: { [this.outletName]: null } }]);
    } else {
      this.router.navigate(['/main', { outlets: { modal: null, modal_1: null } }]);
    }
    this.dialogRef.nativeElement.close();
  }
}
