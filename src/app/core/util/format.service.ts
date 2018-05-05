import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

declare let $: any;

@Injectable()
export class FormatService {

  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  constructor() { }

  formatDate(time) {

    if(!time) time = null;

    let d = new Date(time);
    let day: any = d.getDate();
    let month: any = this.monthNames[d.getMonth()];
    let year = d.getFullYear();
   
    return month + ' ' + day + ', ' + year; 
  };

  formatDateTime(time) {
    if(!time) time = null;

    let d = new Date(time);
    let day: any = d.getDate();
    let month: any = this.monthNames[d.getMonth()];
    let year = d.getFullYear();
    let hour = d.getHours();
    let Hour = ("0" + hour).slice(-2);
    let minute = d.getMinutes();
    let Minute = ("0" + minute).slice(-2); 
    return month + ' ' + day + ', ' + year + ' at ' + Hour + ':' + Minute;

  }

  formatData(src, mainProp, level?) {

    level = level? level: 1;

    let flag = {};

    for(let index = 0; index < src.length; index++) {

      let element = src[index];
      
      let ob ={};

      let name = '';

      for(let e in element) {

        let arr = e.split('.');

        let len = arr.length;

        if(len - 1 >= level) {

          ob[arr[len-1]] = element[e];

          arr.pop(); 
          name = arr.join('.');

          delete element[e];
        }
      }

      let subFlag = flag[element[mainProp]];

      if(subFlag) {

        src[subFlag][name].push(ob);
        src.splice(index, 1);
        index--;
      } else {

        flag[element[mainProp]] = index + "";
        element[name] = [ob];
      }
    };
  }

  copyObject(src, des) {

    for(let e in src) {

      des[e] = src[e];
    }
  }

  convertToArrayObservable(methodCallback, array, compareCallback, params?, property?):  Array<Observable<any>> {

    let res: Array<Observable<any>>  = [];

    array.forEach(element => {
      
      if(compareCallback(element)) {

        params[property] = element[property]

        res.push(methodCallback(params));
      }
    });

    return res;
  }
}
