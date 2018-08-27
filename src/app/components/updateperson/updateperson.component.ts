import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateperson',
  templateUrl: './updateperson.component.html',
  styleUrls: ['./updateperson.component.css']
})
export class UpdatepersonComponent implements OnInit {

  person;
  countryList: any[];

  constructor(private personService: PersonService, private route: ActivatedRoute, private router: Router) { 
    this.countryList = [
      {
        name: 'India',
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

  ngOnInit() {
    let id = this.route.snapshot.queryParamMap.get('id')
    this.personService.getPerson(id)
    .subscribe(result=>{
      this.person = result
    })
  }

  updatePerson(formData){
    let id = this.route.snapshot.queryParamMap.get('id')
    this.personService.updatePerson(formData, id)
      .subscribe(results => {
        alert('Update person susccessfully..!')
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 500);
    })
  }

}
