import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { CertificatesComponent } from './certificates/certificates.component.spec';
import { ExpComponent } from './exp/exp.component';
import { CodingComponent } from './coding/coding.component';
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'] ,
  templateUrl: './app.component.html',
  
  standalone: true,
  imports: [
    HomeComponent,
    CodingComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    CertificatesComponent,
    ContactComponent,
    ExpComponent
  ]
})
export class AppComponent {}
