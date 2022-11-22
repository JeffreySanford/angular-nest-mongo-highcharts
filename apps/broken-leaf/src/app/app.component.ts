import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@broken-leaf/api-interfaces';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from './common/services/notifications/notification.service';

@Component({
  selector: 'broken-leaf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  count: any[] = [];
  hello$ = this.http.get<Message>('/api/hello');
  message: any;
  loading = true;

  constructor(private http: HttpClient, private notifyService: NotificationService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.hello$.subscribe(
      (next: Message) => {
        this.loading = false;
        this.cd.detectChanges();
        this.notifyService.showSuccess(next.message, 'API Message')
      }, (error) => {
        this.notifyService.showError(error.message, 'API Message')
        console.log('Error fired.')
      });
  }
}