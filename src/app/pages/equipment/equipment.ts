import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipment.html',
  styleUrl: './equipment.scss',
})
export class Equipment implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle('Комплектация бань-бочек и квадратных бань | BANYA TUT');
    this.metaService.updateTag({
      name: 'description',
      content:
        'Полная комплектация бань-бочек и квадратных бань от BANYA TUT. Утеплитель, Г-образные полки, печь, козырек, крыльцо, сосновый стол, рундук, душ комплект, уличные ступени и многое другое.',
    });
    this.metaService.updateTag({
      name: 'keywords',
      content:
        'комплектация бань-бочек, комплектация квадратных бань, печь для бани, утеплитель, полки для бани, козырек, крыльцо, сосновый стол, рундук, душ комплект, уличные ступени',
    });
  }
}
