import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'personslist',
  templateUrl: './personslist.component.html',
  styleUrls: ['./personslist.component.css']
})
export class PersonslistComponent implements OnInit {

  personsList: any[];

  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit() {
    this.personService.getListOfPersons()
      .subscribe( results => {
        this.personsList = results;
        console.log(results[0]);
      })
  }

  editPerson(person) {
    console.log(person);
    this.router.navigate(['/updateperson'],
      {
        queryParams:
          { id: person.id }
      });
  }
}
