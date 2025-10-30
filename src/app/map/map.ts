import { Component, OnInit } from '@angular/core';
import { MapService } from '../map-service/map-service';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.html',
  styleUrls: ['./map.scss']
})
export class Map implements OnInit {
  lat: number = 0;
  long: number = 0;
  enderecoDetalhado: string = 'Buscando localização...';

  constructor(private mapService: MapService) {}

  ngOnInit() {
    this.getCurrentLocation();
  }

  getCurrentLocation() {
    if (!navigator.geolocation) {
      this.enderecoDetalhado = 'Geolocation não suportada neste navegador.';
      return;
    }

    this.enderecoDetalhado = 'Obtendo coordenadas...';

    const options: PositionOptions = { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 };

    navigator.geolocation.getCurrentPosition((position) => {
      this.lat = position.coords.latitude;
      this.long = position.coords.longitude;

      this.enderecoDetalhado = 'Coordenadas obtidas. Buscando endereço...';
      this.getDetailedAddress(this.lat, this.long);
    }, (error) => {
      console.error('Erro ao obter a localização:', error);
      switch (error.code) {
        case error.PERMISSION_DENIED:
          this.enderecoDetalhado = 'Permissão de localização negada.';
          break;
        case error.POSITION_UNAVAILABLE:
          this.enderecoDetalhado = 'Localização indisponível.';
          break;
        case error.TIMEOUT:
          this.enderecoDetalhado = 'Tempo esgotado ao obter localização.';
          break;
        default:
          this.enderecoDetalhado = 'Erro ao obter localização.';
      }
    }, options);
  }

  getDetailedAddress(latitude: number, longitude: number) {
    this.mapService.reverseGeocode(latitude, longitude).subscribe({
      next: (response: any) => {
        if (response && response.display_name) {
          this.enderecoDetalhado = response.display_name;

          const addr = response.address || {};
          const rua = addr.road || addr.pedestrian || addr.cycleway || '';
          const numero = addr.house_number || '';
          const bairro = addr.suburb || addr.neighbourhood || '';
          const cidade = addr.city || addr.town || addr.village || '';
          const estado = addr.state || '';

          const partes = [rua ? `${rua}${numero ? ', ' + numero : ''}` : '', bairro, cidade, estado].filter(Boolean);
          if (partes.length) {
            this.enderecoDetalhado = partes.join(' - ');
          }
        } else {
          this.enderecoDetalhado = 'Endereço não encontrado para estas coordenadas.';
        }
      },
      error: (err: any) => {
        console.error('Erro na Geocodificação Reversa:', err);
        this.enderecoDetalhado = 'Erro ao consultar serviço de localização.';
      }
    });
  }
}
