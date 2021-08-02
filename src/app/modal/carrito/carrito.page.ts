import {Component, Input, OnInit} from '@angular/core';
import {Producto} from "../../model/producto";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  @Input() producto: Producto;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async agregarAlCarrito(){
    await this.modalController.dismiss(this.producto)
  }

  async cancelar(){
    await this.modalController.dismiss('pass');
  }

}
