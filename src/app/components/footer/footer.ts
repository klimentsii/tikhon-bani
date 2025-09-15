import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

declare var ymaps: any;

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer implements OnInit, AfterViewInit {
  
  ngOnInit() {
    // Проверяем, загружена ли библиотека Яндекс карт
    if (typeof ymaps !== 'undefined') {
      this.initMap();
    } else {
      // Если библиотека еще не загружена, ждем её загрузки
      this.waitForYmaps();
    }
  }

  ngAfterViewInit() {
    // Дополнительная проверка после инициализации компонента
    if (typeof ymaps !== 'undefined' && !this.isMapInitialized()) {
      this.initMap();
    }
  }

  private waitForYmaps() {
    const checkYmaps = () => {
      if (typeof ymaps !== 'undefined') {
        this.initMap();
      } else {
        setTimeout(checkYmaps, 100);
      }
    };
    checkYmaps();
  }

  private isMapInitialized(): boolean {
    return document.getElementById('yandex-map')?.hasChildNodes() || false;
  }

  private initMap() {
    if (this.isMapInitialized()) {
      return; // Карта уже инициализирована
    }

    ymaps.ready(() => {
      // Координаты Березовского района, Брестская область
      const map = new ymaps.Map('yandex-map', {
        center: [52.689344, 25.322071], // Точные координаты BANYA TUT
        zoom: 10,
        controls: ['zoomControl', 'fullscreenControl']
      });

      // Добавляем маркер
      const placemark = new ymaps.Placemark([52.689344, 25.322071], {
        balloonContent: 'BANYA TUT<br/>Брестская область, Березовский район',
        hintContent: 'BANYA TUT'
      }, {
        preset: 'islands#greenDotIcon'
      });

      map.geoObjects.add(placemark);
    });
  }
}
