import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

declare let $: any;

@Injectable()
export class FormatService {

  constructor() { }

  formatDate(getTimeItem) {
    
    getTimeItem = getTimeItem - 0;

    let d = new Date(getTimeItem);
    let day: any = d.getDate();
    let month: any = d.getMonth() + 1;
    let year = d.getFullYear();
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }

    return day + "/" + month + "/" + year;
  };

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

  statusType(type) {

    switch(type) {

      case 1: return "Chưa Duyệt";
      case 2: return "Đã Đặt Hàng";
      case 3: return "Chưa Thanh Toán";
      case 4: return "Đã Thanh Toán";
      case 5: return "Chưa Về Kho Nhật"
      case 6: return "Về Kho Nhật";
      case 7: return "Về Kho Việt Nam";
      case 8: return "Hoàn Tất";
      default: return "Chưa Đặt Trạng Thái";
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
