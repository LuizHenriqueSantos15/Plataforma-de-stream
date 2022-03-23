import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'plataformaStream';

  canais = [{nome: 'Samuel Murad', foto: 'https://yt3.ggpht.com/ytc/AKedOLQ3udwGIHbmDA13relKoMDoGAP9UMXufQ8OFN-8-A=s176-c-k-c0x00ffffff-no-rj-mo', link: 'https://www.youtube.com/c/SamuelMurad'} , {nome: 'Heitor Castro', foto: 'https://yt3.ggpht.com/ytc/AKedOLR4UQYShyomkDch7ta0vOdoAAZs3O4MT7y9RGw42Q=s88-c-k-c0x00ffffff-no-rj' , link: 'https://www.youtube.com/c/HeitorCastroMaisqueMusica'}, {nome: 'Cifra Club', foto: 'https://yt3.ggpht.com/sJhZHpsMKEdot6feTdfPVbVwtxTAP61KZv_S1Q9vwTEHURWUiXiO02kEQ-MiK9RFpUY41c3CpQ=s176-c-k-c0x00ffffff-no-rj-mo' , link:'https://www.youtube.com/c/cifraclub'}, {nome: 'Asafes', foto: 'https://yt3.ggpht.com/ytc/AKedOLSvxhD78v99e7T2QnBHmXQ9QoXBdVfMCYcEgTRa=s88-c-k-c0x00ffffff-no-rj', link:'https://www.youtube.com/channel/UC6UbUR9ywy89emM9eN005Kg'}]
}
