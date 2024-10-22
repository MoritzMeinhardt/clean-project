import {
  ChangeDetectionStrategy,
  Component,
  signal
} from '@angular/core';
import {
  CommonModule,
  NgOptimizedImage
} from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'clean-services',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatIcon],
  templateUrl: './services.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
  services = signal([
    {
      title: 'Arbeitsanweisungen erstellen.',
      description: 'Wir erstellen detaillierte Arbeitsanweisungen und Prozessbeschreibungen sowie Leitfäden für das Risikomanagement.',
      image: 'Arbeitsanweisungen_erstellen.webp',
      icon: 'checklist',
    },
    {
      title: 'Prozesse optimieren.',
      description: 'Unsere umfassende Prozessoptimierung umfasst die Analyse und Verknüpfung aller Risikomanagementbestandteile. Dadurch können wir Ihre internen Prozesse effizienter gestalten und Ihre Gesamtperformance verbessern.',
      image: 'prozessoptimierung.webp',
      icon: 'engineering',
    },
    {
      title: 'Kapital & Geschäftsplanung erstellen.',
      description: 'Wir unterstützen Ihre strategische Planung und erstellen auf dieser Basis eine umfassende Kapitalplanung. Dabei stellen wir die richtigen Parameter bereit und planen die Geschäftsjahre auf Basis eines rollierenden 3- bis 4-Jahres-Horizonts. Dies ermöglicht eine präzise Planung des weiteren Geschäftsverlaufs und eine exakte Berechnung der entsprechenden Risikopotenziale. Wir berücksichtigen dabei sowohl die normative als auch die ökonomische Perspektive, um Ihnen einen präziseren Steuerungsimpuls zu geben.',
      image: 'stresstest.webp',
      icon: 'savings',
    },
    {
      title: 'Stresstests durchführen.',
      description: 'Unsere Stresstests sind darauf ausgelegt, Ihnen eine umfassende Sicht auf die Risikopotenziale zu bieten. Durch Prozessoptimierung, präzise Parametrisierung, detaillierte Darstellung und umfassende Berichterstattung sowie genaue Kalkulationen stellen wir sicher, dass Ihre Bank bestens vorbereitet ist.',
      image: 'stresstest.webp',
      icon: 'quiz',
    },
  ]);

  services2 = signal([
    {
      title: 'Risikoinventur',
      description: 'Unsere umfassende Prozessoptimierung umfasst die Analyse und Verknüpfung aller Risikomanagement- bestandteile. Dadurch können wir Ihre internen Prozesse effizienter gestalten und Ihre Gesamtperformance verbessern.',
      image: 'Risikoinventur.webp',
      icon: 'inventory',
    },
    {
      title: 'Risikoberichtserstattung',
      description: 'Unsere MaRisk-konforme Risikoberichterstattung sichert Ihre Daten und integriert effektive Kontrollmechanismen.\n' +
        'Wir analysieren und optimieren den Berichterstattungsprozess, um die Effizienz zu maximieren.',
      image: 'prozessoptimierung.webp',
      icon: 'report',
    },
    {
      title: 'Einzelrisikobewertung',
      description: 'Wir analysieren die Berechnungsweise der Einzelrisikoarten und optimieren diese mithilfe unseres Tools.\n' +
        'Dies sorgt für präzisere und effizientere Risikoanalysen.',
      image: 'prozessoptimierung.webp',
      icon: 'flood',
    },
    {
      title: 'Effektive Tool-Unterstützung für Ihre Risikomanagementprozesse.',
      description: 'Wir bieten eine maßgeschneiderte Implementierung unseres Tools in Ihre bestehenden Risikomanagementsysteme an. Dazu gehören die nahtlose Datenanknüpfung an Ihre Kontrollsysteme und die Integration von Kredit-, Liquiditäts-, Marktpreis- und OpRisk-Daten. Wir passen das Tool funktional an Ihr bestehendes System an, kalibrieren die Risikoauswertung und Berichterstattung und validieren das System. Dabei legen wir großen Wert auf eine individuell angepasste Berichterstattung und die Erstellung spezifischer Stresstestszenarien.',
      image: 'prozessoptimierung.webp',
      icon: 'hardware',
    },
  ]);
}
