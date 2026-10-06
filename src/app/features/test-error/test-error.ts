import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-test-error',
  imports: [MatButton],
  templateUrl: './test-error.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './test-error.css',
})
export class TestError {
  baseUrl = environment.apiUrl;
  private http = inject(HttpClient);
  validatonErrors = signal<string[] | undefined>(undefined);

  get404Error() {
    this.http.get(this.baseUrl + 'buggy/notfound').subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }

  get400Error() {
    this.http.get(this.baseUrl + 'buggy/badrequest').subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }
  get401Error() {
    this.http.get(this.baseUrl + 'buggy/unauthorized').subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }
  get500Error() {
    this.http.get(this.baseUrl + 'buggy/internalerror').subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }
  get400ValidationError() {
    this.http.post(this.baseUrl + 'buggy/validationerror', {}).subscribe({
      next: (response) => console.log(response),
      error: (error) => this.validatonErrors.set(error),
    });
  }
}
