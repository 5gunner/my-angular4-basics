import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-scientist',
  templateUrl: './edit-scientist.component.html',
  styleUrls: ['./edit-scientist.component.sass']
})
export class EditScientistComponent implements OnInit {
  public param;
  constructor(private routeParam: ActivatedRoute) { }

  ngOnInit() {
    this.routeParam.params.subscribe((param: Params) => {
      this.param = param['id'];
    });
  }

}
