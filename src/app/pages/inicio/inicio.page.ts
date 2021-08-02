import { Component, OnInit } from '@angular/core';
import {Producto} from "../../model/producto";
import {FirebaseService} from "../../firebase.service";
import {ModalController} from "@ionic/angular";
import {CarritoPage} from "../../modal/carrito/carrito.page";
import {MicarritoPage} from "../../modal/micarrito/micarrito.page";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  productos: Array<Producto>;

  private carrito: Array<Producto>;

  constructor(private firebase: FirebaseService, private modalController: ModalController) {
    this.productos = new Array<Producto>();
    this.carrito = new Array<Producto>();
    this.getProductos();
  }

  ngOnInit() {
  }

  private getProductos(){
    this.firebase.firebase.collection('producto').get().toPromise().then(e=>{
      e.forEach(e1=>{
        let objProducto = e1.data() as Producto;
        this.productos.push(objProducto);
      })
    })
  }

  async abrirProducto(producto: Producto){
    const modal = await this.modalController.create({
      component: CarritoPage,
      componentProps: {
        'producto': producto
      }
    });
    modal.onDidDismiss().then((response)=>{
      if(response.data !== 'pass'){
        this.carrito.push(response.data as Producto);
      }
    });
    await modal.present();
  }

  async abrirMiCarrito(){
    const modal = await this.modalController.create({
      component: MicarritoPage,
      componentProps:{
        'productos': this.carrito
      }
    });
    modal.onDidDismiss().then((response)=>{
      if(response.data === 'vaciar'){
        this.carrito = new Array<Producto>();
      }
    });
    await modal.present();
  }

}
