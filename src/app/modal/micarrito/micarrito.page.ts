import {Component, Input, OnInit} from '@angular/core';
import {Producto} from "../../model/producto";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-micarrito',
  templateUrl: './micarrito.page.html',
  styleUrls: ['./micarrito.page.scss'],
})
export class MicarritoPage implements OnInit {

  @Input() productos: Array<Producto>;

  constructor(private modalController: ModalController) {

  }

  ngOnInit() {
  }

  async generarLlamada(){

  }

  async vaciarCarrito(){
    await this.modalController.dismiss('vaciar')
  }

  async cancelar(){
    await this.modalController.dismiss('');
  }

}
