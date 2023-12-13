import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ProductosService} from "./services/productos.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'servicio1';
  productos : any
  constructor( private productosService: ProductosService) {
  }

  ngOnInit(): void{
    this.productos=this.productosService.getProductos()
  }

}
