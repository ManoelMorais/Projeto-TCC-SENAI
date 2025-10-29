import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  constructor(private http: HttpClient) { }

  reverseGeocode(latitude: number, longitude: number): Observable<any> {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
    return this.http.get(url);
  }
  reverseGeocodeGoogle?(latitude: number, longitude: number): Observable<any> {
    return this.http.get('');
  }
}
