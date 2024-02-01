import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-switch-version-button',
  standalone: true,
  imports: [],
  templateUrl: './switch-version-button.component.html',
  styleUrl: './switch-version-button.component.scss'
})
export class SwitchVersionButtonComponent implements OnInit {

  constructor(private router: Router){
  }

  checked = false;

  toggleCheck = () => {
    this.checked = !this.checked;

    if(this.checked){
      this.router.navigate(["/premium"])
    } else {
      this.router.navigate(["/simple"])
    }
  }

  ngOnInit() {
    const url = window.location.pathname
    if(url.includes("premium")){
      this.checked = true
    }
  }
}
