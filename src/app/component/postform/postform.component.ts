import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServceService } from 'src/app/service/servce.service';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.scss']
})
export class PostformComponent implements OnInit {
  postObj : any;
  word : any;
postform = new FormGroup({
  first_name : new FormControl() ,
  last_name : new FormControl(),
  email : new FormControl()

})

  constructor(private _service : ServceService , private _rout: Router) { }

  ngOnInit(): void {
  }


  post(){
      this._service.createPost(this.postform.value).subscribe(res=>{
      this.postObj = res;
      this._rout.navigate(['dashboard'])
    }) 
  }
};
