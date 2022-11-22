import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ToasterComponent } from './common/components/toaster/toaster.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HighchartsChartModule } from 'highcharts-angular';
import { DepartmentsComponent } from './departments/departments.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SpinnerDirective } from './common/directives/spinner.directive';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    ToasterComponent,
    DepartmentsComponent,
    SpinnerDirective,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    HighchartsChartModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
