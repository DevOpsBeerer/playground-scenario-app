import { Component, input, InputSignal } from '@angular/core';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';

@Component({
  selector: 'app-box-value',
  imports: [LucideAngularModule],
  templateUrl: './box-value.component.html',
  styleUrl: './box-value.component.scss'
})
export class BoxValueComponent {
  label: InputSignal<string> = input.required();
  value: InputSignal<string | string[]> = input.required();
  variant: InputSignal<"info" | "warning" | "danger" | "success"> = input<"info" | "warning" | "danger" | "success">("info");
  variantStyle: InputSignal<"normal" | "box"> = input<"normal" | "box">("normal");
  icon: InputSignal<LucideIconData | null> = input<LucideIconData | null>(null);
}
