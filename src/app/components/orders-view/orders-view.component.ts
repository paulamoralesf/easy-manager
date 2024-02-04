import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.interface';

@Component({
  selector: 'app-orders-view',
  templateUrl: './orders-view.component.html',
  styleUrls: ['./orders-view.component.scss']
})
export class OrdersViewComponent implements OnInit {
  orders: Order[]=[]
  selectedOrder:Order={
    bill:'',
    brand:'',
    color:'',
    description:'',
    gamma:'',
    is_photosensible:false,
    material:'',
    perforations:'',
    type:'',
    client_uuid:'',
    seller_uuid:''
  }
  columns=Object.keys(this.selectedOrder).map(key=>key)


  constructor() { }

  ngOnInit(): void {


  }

}
