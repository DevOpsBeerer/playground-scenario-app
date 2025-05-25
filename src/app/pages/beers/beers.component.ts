import { AsyncPipe } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { IApiResponse } from '../../core/models/internal/api-response.model';
import { IBeer } from '../../core/models/internal/beer.model';
import { IResponseArray } from '../../core/models/internal/response-array.model';
import { BeerApiService } from '../../core/services/beer-api.service';
import { LayoutComponent } from '../../layout/layout/layout.component';
import { ErrorBoxComponent } from '../../shared/components/error-box/error-box.component';
import { BeerCardComponent } from './beer-card/beer-card.component';
import { BoxComponent } from '../../shared/components/box/box.component';
import { BoxValueComponent } from '../../shared/components/box-value/box-value.component';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { KeyRoundIcon } from 'lucide-angular';

@Component({
  selector: 'app-beers',
  imports: [LayoutComponent, BeerCardComponent, AsyncPipe, ErrorBoxComponent, BoxComponent, BoxValueComponent],
  templateUrl: './beers.component.html',
  styleUrl: './beers.component.scss'
})
export class BeersComponent implements OnDestroy {
  readonly KeyRoundIcon = KeyRoundIcon
  private readonly securitService: OidcSecurityService = inject(OidcSecurityService);

  isAuthenticated$: Observable<boolean> = this.securitService.isAuthenticated();
  private beerApi: BeerApiService = inject(BeerApiService);

  private subscription: Subscription | null = null;

  beers$: Observable<IApiResponse<IResponseArray<IBeer>>> = this.beerApi.list().pipe(tap((beers) => { this.beerResponse = beers; }));
  beerResponse: IApiResponse<IResponseArray<IBeer>> | null = null;
  error: IApiResponse<{}> | null = null;

  ngOnDestroy(): void {
    this._clear();
  }

  deleteBeer(beerId: string): void {
    this._clear();
    this.beerApi.delete(beerId).subscribe((data) => {
      this.error = data;
    });
  }

  private _clear(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
