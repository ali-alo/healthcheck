import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-health-check',
  templateUrl: './health-check.component.html',
  styleUrls: ['./health-check.component.css']
})
export class HealthCheckComponent implements OnInit {
  public result?: Result;
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Result>(environment.baseUrl +
      'api/health').subscribe({
        next: result => this.result = result,
        error: err => console.error(err)
      });
  }

}

interface Result {
  checks: Check[];
  totalStatus: string;
  totalResponseTime: number;
}

interface Check {
  name: string;
  responseTime: number;
  status: string;
  description: string;
}
