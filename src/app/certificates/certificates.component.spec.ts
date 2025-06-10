import { Component } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {
  certificates = [
    {
      title: 'Angular Developer',
      image: 'assets/certificates/angular.png',
      link: 'https://your-link.com/angular'
    },
    {
      title: 'Spring Boot Expert',
      image: 'assets/certificates/spring.png',
      link: 'https://your-link.com/spring'
    },
    {
      title: 'AWS Certified',
      image: 'assets/certificates/aws.png',
      link: 'https://your-link.com/aws'
    }
  ];

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
