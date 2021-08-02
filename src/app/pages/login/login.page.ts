import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../../firebase.service";
import {Persona} from "../../model/persona";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private persona: Persona

  constructor(private firebase: FirebaseService, private route: Router) {
    this.persona = new Persona();
  }

  ngOnInit() {
  }

  async verificarCredenciales(){
    this.firebase.firebase.collection('cliente').get().toPromise().then(e=>{
      e.forEach(e1 =>{
        if((e1.data() as Persona).correo === this.persona.correo && (e1.data() as Persona).password === this.persona.password){
          this.route.navigate(['inicio'])
        }
      })
    })
  }

  async registrarte(){
    await this.route.navigate(['registro'])
  }

}
