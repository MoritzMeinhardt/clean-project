import {
  Injectable,
  signal
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class ThemeService {

  readonly #currentTheme = signal(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  readonly currentTheme$ = toObservable(this.#currentTheme);

  getCurrentTheme() {
    return this.#currentTheme.asReadonly();
  }

  setCurrentTheme(theme: 'light' | 'dark') {
    // Whenever the user explicitly chooses light mode
    if (document.querySelector(':root')?.classList.contains('dark')) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }

    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector(':root')?.classList.add('dark');
    } else {
      document.querySelector(':root')?.classList.remove('dark');
    }

    // Whenever the user explicitly chooses to respect the OS preference
    //localStorage.removeItem('theme')
    this.#currentTheme.set(theme);
  }
}
