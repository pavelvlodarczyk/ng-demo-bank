
# Modal - Usage Documentation

## Introduction
Modals in this application are launched via named `router-outlet` in the `app.html` or `view-main.html` file. This allows for generic, dynamic modal display from anywhere in the app.

## Structure
In `app.html` (or `view-main.html`), there are three router-outlets for modals:

```html
<router-outlet name="modal_0"></router-outlet>
<router-outlet name="modal"></router-outlet>
<router-outlet name="modal_1"></router-outlet>
```

Each outlet supports a different elevation level (e.g., modal_0, modal, modal_1).

## Routing
In `app.routes.ts`:

```typescript
{
  path: 'modal-0',
  outlet: 'modal_0',
  loadComponent: () => import('./layout/view-modal/view-modal').then(m => m.ViewModal),
  data: { outletName: 'modal_0' },
  // ...
},
{
  path: 'modal',
  outlet: 'modal',
  loadComponent: () => import('./layout/view-modal/view-modal').then(m => m.ViewModal),
  data: { outletName: 'modal' },
  // ...
},
{
  path: 'modal-1',
  outlet: 'modal_1',
  loadComponent: () => import('./layout/view-modal/view-modal').then(m => m.ViewModal),
  data: { outletName: 'modal_1' },
  // ...
}
```

## Opening a Modal
To open a modal, navigate:

```typescript
this.router.navigate(['/main', { outlets: { modal_0: ['modal-0'] } }]); // lowest elevation
this.router.navigate(['/main', { outlets: { modal: ['modal'] } }]);     // middle elevation
this.router.navigate(['/main', { outlets: { modal_1: ['modal-1'] } }]); // highest elevation
```

## Closing a Modal
In the modal component (`ViewModal`), closing is handled by:

```typescript
this.router.navigate(['/main', { outlets: { [this.outletName]: null } }]);
```

## Elevation Levels
- `modal_0` – lowest elevation (e.g., base dialog)
- `modal` – middle elevation (e.g., popup, overlay)
- `modal_1` – highest elevation (e.g., nested modal, overlay above another modal)

## Recommendations
- Use the appropriate outlet depending on context (e.g., `modal_1` for overlays above other modals).
- The modal component is generic and automatically opens the dialog when loaded via router.
- You can pass data to the modal via route parameters or a service.

## Example
```typescript
// Open modal_0
this.router.navigate(['/main', { outlets: { modal_0: ['modal-0'] } }]);

// Open modal
this.router.navigate(['/main', { outlets: { modal: ['modal'] } }]);

// Open modal_1
this.router.navigate(['/main', { outlets: { modal_1: ['modal-1'] } }]);
```

## Closing
In the modal component:
```typescript
close() {
  this.router.navigate(['/main', { outlets: { [this.outletName]: null } }]);
}
```

## Summary
Modals are fully managed by Angular Router, allowing dynamic invocation, closing, and support for multiple elevation levels.