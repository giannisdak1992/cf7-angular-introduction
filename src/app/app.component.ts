import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = 'Ioannis';

  person = {
    givenName: 'Ioannis',
    surName: 'Ntakoumis',
    age: 33,
    email: 'intakoumis@aueb.gr',
  };
}
