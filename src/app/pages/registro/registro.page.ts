import { Component, OnInit } from '@angular/core';
import {Persona} from "../../model/persona";
import {FirebaseService} from "../../firebase.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  persona: Persona;

  constructor(private firebase: FirebaseService, private route: Router) {
    this.persona = new Persona();
  }

  ngOnInit() {
  }

  async crearUsuario(){
    await this.firebase.addDocument('cliente', JSON.parse(JSON.stringify(this.persona)));
    await this.regresarLogin();
  }

  async regresarLogin(){
    await this.route.navigate(['login'])
  }


}
