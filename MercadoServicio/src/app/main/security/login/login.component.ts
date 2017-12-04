import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "ms-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: []
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private router: Router) {}

  login(email, password) {
    //this.authenticate.login(this.email, this.password);
  }

  ngOnInit() {}
}
