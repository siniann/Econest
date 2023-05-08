import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-unavailable',
  templateUrl: './unavailable.component.html',
  styleUrls: ['./unavailable.component.css']
})
export class UnavailableComponent {
  ngOnInit(): void {
    //home
    var options = {
      strings: [
        'Website under construction', 'Econest Building Solutions',
      ],
      typeSpeed: 50,
      backSpeed: 20,
      loop: true,
    };
    var typed = new Typed('.typed', options);
    typed.reset(true);
  }
}