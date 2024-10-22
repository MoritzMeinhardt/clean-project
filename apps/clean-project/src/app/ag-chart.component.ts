import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal
} from '@angular/core';
import {
  CommonModule,
  CurrencyPipe
} from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AgCharts } from 'ag-charts-angular';
import { AgChartTheme, AgChartOptions } from 'ag-charts-community';
import { getData } from './ag-chart.data';
import { ThemeService } from './theme.service';

const agChartThemeLight: AgChartTheme = {
  palette: {
    fills: ["#0f766e", "#d97706"],
    strokes: ["black"],
  },
};

const agChartThemeDark: AgChartTheme = {
  baseTheme: 'ag-default-dark',
  palette: {
    fills: ["#0f766e", "#d97706"],
    strokes: ["white"],
  },
};

@Component({
  selector: 'clean-ag-chart',
  standalone: true,
  imports: [
    CommonModule,
    AgCharts,
  ],
  providers: [CurrencyPipe],
  templateUrl: './ag-chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgChartComponent {
  // Chart Options
  public chartOptions = signal<AgChartOptions>({
    theme: agChartThemeLight,
    title: {
      text: `Value at Risk`,
    },
    subtitle: {
      text: "Confidence Level: 2.89%",
    },
    data: getData(-10, 10),
    series: [
      {
        type: "line",
        xKey: "x",
        xName: "Returns",
        yKey: "y",
        yName: "Frequency",
        interpolation: { type: "smooth" },
        marker: { enabled: false },
        tooltip: { enabled: false },
      },
      {
        type: 'line', // use 'line' series
        xKey: 'xConstant',
        yKey: 'y',
        yName: 'Value at Risk',
        marker: { enabled: false },
        tooltip: { showArrow: false, renderer: () => `<div class="bg-slate-100 p-2 rounded-lg">Value at Risk</div>` },
      },
    ],
    background: { visible: false },
  });

  readonly #themeService = inject(ThemeService);

  constructor() {
    this.#themeService.currentTheme$.pipe(takeUntilDestroyed()).subscribe(theme => {
      this.chartOptions.set({...this.chartOptions(), theme: theme === 'dark' ? agChartThemeDark : agChartThemeLight});
    })
  }
}
