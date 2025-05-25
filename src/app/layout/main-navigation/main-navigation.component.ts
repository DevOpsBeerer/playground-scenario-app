import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, ShieldIcon } from 'lucide-angular';

@Component({
  selector: 'app-main-navigation',
  imports: [RouterLink, RouterLinkActive, LucideAngularModule],
  templateUrl: './main-navigation.component.html',
  styleUrl: './main-navigation.component.scss'
})
export class MainNavigationComponent {
  readonly shieldIcon = ShieldIcon
}
