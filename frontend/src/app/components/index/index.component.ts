import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  userDetails;
  constructor(private userService: UsuarioService, private router: Router) { }


  ngOnInit() {
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }
}
