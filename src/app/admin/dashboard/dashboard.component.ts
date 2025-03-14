import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  Designation: string = '';
  Username: string = '';
  NoOfTeamMembers: number = 0;
  TotalCostOfAllProjects: number = 0;
  PendingTasks: number = 0;
  UpComingProjects: number = 0;
  ProjectCost: number = 0;
  CurrentExpenditure: number = 0;
  AvailableFunds: number = 0;
  ToDay: Date = new Date();

  Clients: string[] = [];
  Projects: string[] = [];
  Years: number[] = [];
  TeamMembersSummary: any = [];
  TeamMembers: any = [];
  // Inject the service to the component
  // 'constructor' is a special method in the class executes when obj creates for the class
  // when user in dashboard route sys creates obj for Dashboard com class
  // At that time the construcotr executes automatically
  // inject dashboardService
  // 'dashboardService:' is reference variable inorder to make these reference variable as property of current
  // working class add keyword 'private' and provide data type 'DashboardService'
  // import the DashboardService
  // access variable 'DashboardService' from any method of the dashboard component
  // because it is the property of the dashboard component
  constructor(private dashboardService: DashboardService) {}
  ngOnInit(): void {
    this.Designation = 'Team Leader';
    this.Username = 'Scott Smith';
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;
    this.ToDay = new Date();
    this.Clients = [
      'ABC Infotech Ltd',
      'DEF Software Solution',
      'ABC VaioTech Ltd',
    ];
    this.Projects = [
      'Project A',
      'Project B',
      'Project C',
      'Project D',
      'Project E',
    ];
    for (var i = 2019; i >= 2010; i--) {
      this.Years.push(i);
    }
    // this.TeamMembersSummary = [
    //   {
    //     Region: 'East',
    //     TeamMembersCount: 20,
    //     TemporarilyUnavailableMembers: 4,
    //   },
    //   {
    //     Region: 'West',
    //     TeamMembersCount: 30,
    //     TemporarilyUnavailableMembers: 6,
    //   },
    //   {
    //     Region: 'North',
    //     TeamMembersCount: 40,
    //     TemporarilyUnavailableMembers: 1,
    //   },
    //   {
    //     Region: 'South',
    //     TeamMembersCount: 10,
    //     TemporarilyUnavailableMembers: 8,
    //   },
    // ];
    // 'this.dashboardService.getTeamMembersSummary()' automatically invokes get data from service
    this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();
    this.TeamMembers = [
      {
        Region: 'East',
        Members: [
          { ID: 1, Name: 'Ford', Status: 'Available' },
          { ID: 2, Name: 'Miller', Status: 'Available' },
          { ID: 3, Name: 'Indica', Status: 'Busy' },
          { ID: 4, Name: 'Tesla', Status: 'Busy' },
        ],
      },
      {
        Region: 'West',
        Members: [
          { ID: 1, Name: 'Ford_West', Status: 'Available' },
          { ID: 2, Name: 'Mille_West', Status: 'Available' },
          { ID: 3, Name: 'Indica_West', Status: 'Busy' },
          { ID: 4, Name: 'Tesla_West', Status: 'Busy' },
        ],
      },
      {
        Region: 'North',
        Members: [
          { ID: 1, Name: 'Ford_N', Status: 'Available' },
          { ID: 2, Name: 'Miller_N', Status: 'Available' },
          { ID: 3, Name: 'Indica_N', Status: 'Busy' },
          { ID: 4, Name: 'Tesla_N', Status: 'Busy' },
        ],
      },
      {
        Region: 'South',
        Members: [
          { ID: 1, Name: 'Ford_S', Status: 'Available' },
          { ID: 2, Name: 'Miller_S', Status: 'Available' },
          { ID: 3, Name: 'Indica_S', Status: 'Busy' },
          { ID: 4, Name: 'Tesla_S', Status: 'Busy' },
        ],
      },
    ];
  }
  onProjectChange($event: any) {
    console.log($event.target);
    if ($event.target.innerHTML == 'Project A') {
      this.ProjectCost = 2212;
      this.CurrentExpenditure = 40000;
      this.AvailableFunds = 38000;
    } else if ($event.target.innerHTML == 'Project B') {
      this.ProjectCost = 7000;
      this.CurrentExpenditure = 2400;
      this.AvailableFunds = 90000;
    } else if ($event.target.innerHTML == 'Project C') {
      this.ProjectCost = 5000;
      this.CurrentExpenditure = 1908;
      this.AvailableFunds = 3200;
    } else if ($event.target.innerHTML == 'Project D') {
      this.ProjectCost = 3400;
      this.CurrentExpenditure = 4300;
      this.AvailableFunds = 8000;
    } else if ($event.target.innerHTML == 'Project E') {
      this.ProjectCost = 6500;
      this.CurrentExpenditure = 7800;
      this.AvailableFunds = 15000;
    }
  }
}
