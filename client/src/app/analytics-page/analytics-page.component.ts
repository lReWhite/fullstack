import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {AnalyticService} from "../shared/services/analytic.service";
import {AnalyticPage} from "../shared/iterfaces";
import {Subscription} from "rxjs";
import {Chart} from "chart.js"

@Component({
  selector: 'app-analytics-page',
  templateUrl: './analytics-page.component.html',
  styleUrls: ['./analytics-page.component.css']
})
export class AnalyticsPageComponent implements AfterViewInit, OnDestroy {
// @ts-ignore
  @ViewChild('gain') gainRef: ElementRef
// @ts-ignore
  @ViewChild('order') orderRef: ElementRef

  average:number
  pending = true
aSub: Subscription

  constructor(private service: AnalyticService) { }

  ngAfterViewInit() {
const gainConfig: any={
label: 'Выручка',
color:'rgb(255,99,132)'
}

    const orderConfig: any={
      label: 'Заказы',
      color:'rgb(54,162,2)'
    }



    this.aSub = this.service.getAnalytics().subscribe((data: AnalyticPage)=>{
      this.average =  data.average

gainConfig.labels = data.chart.map(item => item.label)
gainConfig.data =data.chart.map(item => item.gain)

      orderConfig.labels = data.chart.map(item => item.label)
      orderConfig.data =data.chart.map(item => item.order)


const gainCtx = this.gainRef.nativeElement.getContext('2d')
const orderCtx = this.orderRef.nativeElement.getContext('2d')
gainCtx.canvas.height = '300px'
orderCtx.canvas.height = '300px'
new Chart (gainCtx, createChartConfig(gainConfig))
new Chart (orderCtx, createChartConfig(orderConfig))


      this.pending = false
          })
  }
ngOnDestroy() {
  if (this.aSub) {
    this.aSub.unsubscribe()
  }
}
}

function createChartConfig({labels,data,label,color}) {
return{
type:'line',
options:{
responsive:true
},
data: {
labels,
datasets: [
  {
    label, data,
    borderColor: color,
    steppedLine: false,
    fill: false
  }
]
}
}
}
