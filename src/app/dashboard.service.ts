import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root' // This service is available globally and whole project available.
// })
@Injectable() // here removed because want to use only particular module
// then add 'DashboardService' in any child module in providers in metadata
export class DashboardService {
  // constructor() { }
  // 'any[]' return type
  getTeamMembersSummary(): any[] {
    var TeamMembersSummary = [
      {
        Region: 'East',
        TeamMembersCount: 20,
        TemporarilyUnavailableMembers: 4,
      },
      {
        Region: 'West',
        TeamMembersCount: 30,
        TemporarilyUnavailableMembers: 60,
      },
      {
        Region: 'North',
        TeamMembersCount: 40,
        TemporarilyUnavailableMembers: 1,
      },
      {
        Region: 'South',
        TeamMembersCount: 10,
        TemporarilyUnavailableMembers: 8,
      },
    ];
    return TeamMembersSummary;
  }
}
