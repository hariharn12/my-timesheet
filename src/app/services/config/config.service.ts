import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  API_BASE_URL = `${environment.API_HOST}${environment.API_BASE}`;
  constructor() { }
}
