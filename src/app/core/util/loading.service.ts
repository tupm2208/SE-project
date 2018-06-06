import { Injectable } from '@angular/core';

declare var $: any;

@Injectable()
export class LoadingService {

  private html = `<div class="image-container" style="  position: fixed;
                                                        z-index: 99999999;
                                                        top: 0;
                                                        bottom: 0;
                                                        left: 0;
                                                        text-align: center;
                                                        right: 0;
                                                        background-color: #eaefef;
                                                        opacity: 0.91;"> 
                    <img class="jpg-image" style="position: relative; top: calc(50% - 30px); " width=100 height=100 src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" />
                </div>`
  constructor() { }

  public show(id?) {

    if(!id) {

      let temp = $("app-root").parent().append(this.html);
    } else {
        let temp = $('#' + id).append(this.html);
        $("#" + id).css("position", "relative");
    }
  }

  public hide(id?) {

    if (!id) {

        $('body .image-container').remove();
    } else {

        $("#" + id).css("position", "");
        $('#' + id + " .image-container").remove();
    }
  }
}
