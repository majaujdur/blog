import { Component, OnInit } from '@angular/core';
import { RazmenaPodatakaService } from '../../services/razmena-podataka.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(
    private servisZaRazmenuPodataka : RazmenaPodatakaService
  ) { }

  public podaciIzServisa : any[];

  ngOnInit() {
    this.servisZaRazmenuPodataka.trenutniPodatak.subscribe(data=>{
      this.podaciIzServisa=data;
    })
  }

}
