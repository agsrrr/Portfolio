import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule], // 👈 Add this line
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Eduverse',
      description: 'Academic networking platform for graduate students and advisors.',
      link: '#'
    },
    {
      title: 'TrackItHackIt',
      description: 'Finance tracker to manage spending, income, and budgets.',
      link: '#'
    }
  ];
}
