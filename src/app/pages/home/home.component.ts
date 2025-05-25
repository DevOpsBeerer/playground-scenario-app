import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy } from '@angular/core';
import { BeerIcon, KeyRound } from 'lucide-angular';
import { Observable, Subscription } from 'rxjs';
import { IApiResponse } from '../../core/models/internal/api-response.model';
import { IAppConfig } from '../../core/models/internal/app-config';
import { IBeer } from '../../core/models/internal/beer.model';
import { IResponseArray } from '../../core/models/internal/response-array.model';
import { BeerApiService } from '../../core/services/beer-api.service';
import { DynamicConfigurationService } from '../../core/services/dynamic-configuration.service';
import { LayoutComponent } from '../../layout/layout/layout.component';
import { BoxValueComponent } from '../../shared/components/box-value/box-value.component';
import { BoxComponent } from '../../shared/components/box/box.component';

@Component({
  selector: 'app-home',
  imports: [LayoutComponent, BoxComponent, BoxValueComponent, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnDestroy {
  readonly BeerIcon = BeerIcon;
  readonly KeyIcon = KeyRound;
  private beerApi: BeerApiService = inject(BeerApiService);
  private dynamicConfiguration: DynamicConfigurationService = inject(DynamicConfigurationService)
  private http: HttpClient = inject(HttpClient)

  private subscription: Subscription | null = null;

  beers$: Observable<IApiResponse<IResponseArray<IBeer>>> = this.beerApi.list();
  error: IApiResponse<{}> | null = null;

  configuration: IAppConfig = this.dynamicConfiguration.getConfig();
  auth$: Observable<any> = this.http.get<any>("/auth.json")

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
