import { Component, OnInit } from '@angular/core';
import { ServceService } from './service/servce.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
   
  }
   

}
