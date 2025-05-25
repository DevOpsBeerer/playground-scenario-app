import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { jwtDecode } from 'jwt-decode';
import { map, Observable } from 'rxjs';
import { LayoutComponent } from '../../layout/layout/layout.component';
import { JsonViewerComponent } from '../../shared/components/json-viewer/json-viewer.component';
import { BoxComponent } from '../../shared/components/box/box.component';
import { BoxValueComponent } from '../../shared/components/box-value/box-value.component';
import { KeyRoundIcon } from 'lucide-angular';

@Component({
  selector: 'app-token-view',
  imports: [LayoutComponent, JsonViewerComponent, AsyncPipe, BoxComponent, BoxValueComponent],
  templateUrl: './token-view.component.html',
  styleUrl: './token-view.component.scss'
})
export class TokenViewComponent {
  readonly KeyRoundIcon = KeyRoundIcon
  private oidcSecurityService: OidcSecurityService = inject(OidcSecurityService);

  idToken$: Observable<any> = this.oidcSecurityService.getIdToken().pipe(map(token => { const decoded: any = jwtDecode(token); console.log(decoded); return decoded; }));
  accessToken$: Observable<any> = this.oidcSecurityService.getAccessToken().pipe(map(token => { const decoded: any = jwtDecode(token); return decoded; }));
}
