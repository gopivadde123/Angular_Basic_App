import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AboutComponent } from './about/about.component';
import { DashboardService } from '../dashboard.service';

@NgModule({
  declarations: [DashboardComponent, MyProfileComponent, AboutComponent],
  imports: [CommonModule],
  exports: [DashboardComponent, MyProfileComponent, AboutComponent],
  providers: [DashboardService], // "DashboardService" add in child module or can add in root option default one
})
export class AdminModule {}
