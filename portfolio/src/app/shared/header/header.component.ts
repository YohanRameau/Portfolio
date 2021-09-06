import { Component, OnInit } from '@angular/core';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "github",
      domSanitizer.bypassSecurityTrustResourceUrl("../../assets/svg/github.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "linkedin",
      domSanitizer.bypassSecurityTrustResourceUrl("../../assets/svg/linkedin.svg")
    );

  }

  ngOnInit(): void {
  }

}
