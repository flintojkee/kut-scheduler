import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from '@root/environments/environment';

@Component({
  selector: 'kut-telegram-login-widget',
  templateUrl: './telegram-login-widget.component.html',
  styleUrls: ['./telegram-login-widget.component.scss']
})
export class TelegramLoginWidgetComponent implements AfterViewInit {

  @ViewChild('script', {static: true}) script: ElementRef;

  convertToScript() {
    const element = this.script.nativeElement;
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?5';
    script.setAttribute('data-telegram-login', 'KutSchedulerBot');
    script.setAttribute('data-size', 'large');
    // Callback function in global scope
    script.setAttribute('data-onauth', 'loginViaTelegram(user)');
    script.setAttribute('data-request-access', 'write');
    element.parentElement.replaceChild(script, element);
  }
//   <script
//   async
//   src="https://telegram.org/js/telegram-widget.js?7"
//   data-telegram-login="KutSchedulerBot"
//   data-size="large"
//   data-radius="20"
//   data-auth-url="https://kut-scheduler-api.herokuapp.com/api/v1/login"
//   data-request-access="write"
// ></script>
  ngAfterViewInit() {
    this.convertToScript();
  }

}
