import { ChangeDetectionStrategy, Component, input, Input, InputSignal, signal } from '@angular/core';
import { Beer, CircleAlert, Info, LucideAngularModule, ShieldAlert, ShieldCheck } from 'lucide-angular';

@Component({
  selector: 'app-box',
  imports: [LucideAngularModule],
  templateUrl: './box.component.html',
  styleUrl: './box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxComponent {
  readonly InfoIcon = Info
  readonly CircleAlertIcon = CircleAlert
  readonly ShieldAlertIcon = ShieldAlert
  readonly ShieldCheckIcon = ShieldCheck
  readonly BeerIcon = Beer

  variant: InputSignal<"info" | "warning" | "danger" | "success"> = input<"info" | "warning" | "danger" | "success">("info");

  title: InputSignal<string> = input.required();
  subtitle: InputSignal<string> = input.required();
}
