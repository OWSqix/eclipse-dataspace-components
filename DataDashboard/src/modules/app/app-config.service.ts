import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { firstValueFrom } from 'rxjs';

export interface AppConfig {
  managementApiUrl: string;
  catalogUrl: string;
  storageAccount: string;
  storageExplorerLinkTemplate: string;
  theme: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  config?: AppConfig;

  constructor(private http: HttpClient, private locationStrategy: LocationStrategy) {}

  async loadConfig(): Promise<void> {
    const appConfigUrl = this.locationStrategy.prepareExternalUrl('assets/config/app.config.json');
    
    try {
      const data = await firstValueFrom(this.http.get<AppConfig>(appConfigUrl));
      this.config = data;
    } catch (error) {
      console.error('Failed to load application configuration', error);
    }
  }

  getConfig(): AppConfig | undefined {
    return this.config;
  }
}
