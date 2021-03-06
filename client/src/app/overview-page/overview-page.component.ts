import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AnalyticService} from "../shared/services/analytic.service";
import {Observable} from "rxjs";
import {OverviewPage} from "../shared/iterfaces";
import {MaterialInstance, MaterialService} from "../shared/classes/material.service";

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css']
})
export class OverviewPageComponent implements OnInit, OnDestroy,AfterViewInit {

// @ts-ignore
  @ViewChild('tapTarget') tapTargetRef:ElementRef
tapTarget: MaterialInstance
data$: Observable<OverviewPage>
yesterday= new Date()


  constructor(private  service: AnalyticService) { }

  ngOnInit() {
 this.data$ = this.service.getOverview()
this.yesterday.setDate(this.yesterday.getDate()-1)
  }
  ngOnDestroy()  {
    this.tapTarget.destroy()
  }
  ngAfterViewInit() {
this.tapTarget = MaterialService.initTapTarget(this.tapTargetRef)
  }
  openInfo(){
    this.tapTarget.open()
  }

}
