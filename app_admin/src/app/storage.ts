import { InjectionToken } from '@angular/core';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Broweser Storage', {
    providedIn: 'root',
    factory: () => localStorage
});