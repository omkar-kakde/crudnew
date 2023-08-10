import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServceService } from 'src/app/service/servce.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  getId : any;
  getData : any;
  getD : any;
  constructor(private _rout : ActivatedRoute ,
              private _router : Router,
              private _service : ServceService) { }

  ngOnInit(): void {
       this.getId = +this._rout.snapshot.params['viewid']
      console.log(this.getId);
     this.getByIdData(this.getId);
  } 
  
  getByIdData(id:string){
    this._service.getById(id).subscribe(res=>{
   this.getData = res;
   console.log("getting data");
   console.log(this.getData);
   
   
}
)
}

back(){
  this._router.navigate(['dashboard'])
}
  
    
  }
  


