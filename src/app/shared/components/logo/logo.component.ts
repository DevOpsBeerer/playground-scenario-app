import { Component, inject } from '@angular/core';
import { DynamicConfigurationService } from '../../../core/services/dynamic-configuration.service';
import { BeerIcon, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-logo',
  imports: [LucideAngularModule],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {
    readonly BeerIcon = BeerIcon;
}
