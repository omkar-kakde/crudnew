import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServceService } from 'src/app/service/servce.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  allData : any;
  getObj : any;
  constructor(private _service : ServceService , private _rout : Router){
     
  }
 ngOnInit(): void {
   this.getData()
   
 }
 title = 'crudthree';

  getData(){
    this._service.getAllData().subscribe(upcoming=>{
     console.log(upcoming);
     this.allData = upcoming
    })  
  }

deleteById(id:string){
   this._service.delete(id).subscribe(res =>{
     console.log(res);
     this.getData()
   })

 
} 

 getByIdData(id:string){ 
  this._rout.navigate(['view',id])
}

newinfo(){
  this._rout.navigate(['postform'])
}

UpdateByIdData(){
  this._rout.navigate(['updateform'])
}

};
