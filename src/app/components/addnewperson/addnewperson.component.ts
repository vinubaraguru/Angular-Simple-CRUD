import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { Router } from '@angular/router';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'addnewperson',
  templateUrl: './addnewperson.component.html',
  styleUrls: ['./addnewperson.component.css']
})
export class AddnewpersonComponent implements OnInit {

  countryList: any[];

  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit() {

    this.countryList = [
      {
        name:'India',
        code: 'IN'
      },
      {
        name: 'USA',
        code: 'US'
      },
      {
        name: 'Australia',
        code: 'AUS'
      },
      {
        name: 'Brazil',
        code: 'BRZ'
      },
      {
        name: 'Russia',
        code: 'RUS'
      },
      {
        name: 'Srilanka',
        code: 'SL'
      },
      {
        name: 'Canada',
        code: 'CAN'
      }
    ]
  }

  createPerson(formData){
    this.personService.createNewPerson(formData)
      .subscribe(results => {
        alert('Added new person susccessfully..!')
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1000);
      })
    }
}
