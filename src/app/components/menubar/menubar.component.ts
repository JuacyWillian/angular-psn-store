import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  isLoggedIn!: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn;
    this.authService.onLoginChange.subscribe(
      (isLoggedIn) => {
        this.isLoggedIn = isLoggedIn
        debugger
      }
    )
  }

  doLogout() {
    console.log(this.isLoggedIn);
    this.authService.doLogOut();
    console.log(this.isLoggedIn);
    this.router.navigate(['']);
  }
}
