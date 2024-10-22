import { NgOptimizedImage } from '@angular/common';
import {
  Component,
  inject
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AgChartComponent } from './ag-chart.component';
import { AngularMaterialTestComponent } from './angular-material-test.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { ThemeService } from './theme.service';

@Component({
  standalone: true,
  imports: [RouterModule, NgOptimizedImage, AngularMaterialTestComponent, AgChartComponent, FooterComponent, ServicesComponent, MatIcon],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'clean-project';

  readonly #themeService = inject(ThemeService);

  toggleTheme() {
    this.#themeService.setCurrentTheme(this.#themeService.getCurrentTheme()() === 'light' ? 'dark' : 'light');
  }
}
