import { AsyncPipe } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-user-menu',
  imports: [AsyncPipe],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss'
})
export class UserMenuComponent implements OnDestroy {
  private readonly securitService: OidcSecurityService = inject(OidcSecurityService);

  isAuthenticated$: Observable<boolean> = this.securitService.isAuthenticated();
  email: string = this.securitService.userData().userData?.name;

  logoutSubscription: Subscription | null = null;

  ngOnDestroy(): void {
    if (this.logoutSubscription) {
      this.logoutSubscription.unsubscribe();
    }
  }

  logout(): void {
    this.logoutSubscription = this.securitService.logoffAndRevokeTokens().subscribe(_ => {
      console.debug('Logged out successfully');
    });
  }

  login(): void {
    this.securitService.authorize();
  }
}
