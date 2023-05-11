import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { parseString } from 'xml2js';
@Component({
  selector: 'app-findtimetable',
  templateUrl: './findtimetable.component.html',
  styleUrls: ['./findtimetable.component.css']
})
export class FindtimetableComponent implements OnInit {
timeTableData: any
  constructor(private http: HttpClient) { }

  
log(val: any, comment: string) { console.log(comment,val); 
}

  makeRequest(login: any ) {
    const headers = new HttpHeaders({
     'X-RapidAPI-Key': '5714c61079msh3a2fe912e7e7648p1659edjsn6c89c2e1d637',
      'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com',
      //'Accept': 'application/json' // request JSON response
      //responseType: 'text' as 'json' 
    });

    const options = { headers, 
      responseType: 'text' as 'json'};

    const [year, month, day] = login.value.date.split('-');
    console.log(`${year}${month}${day}`);
    const date=`${year}${month}${day}`;
    this.http.get(`https://timetable-lookup.p.rapidapi.com/TimeTable/${login.value.from}/${login.value.to}/${date}/`, options)
    .subscribe(data => {
      parseString(data, (error: any, result: any) => {
        
        if (error) {
          console.error(error);
        } else {
         this.timeTableData = result;
          console.log(this.timeTableData);
        }
      });
    //this.timeTableData = data;
    //console.log(this.timeTableData);
  });
}
/*async makeRequest(login: any) {
  const headers = new HttpHeaders({
    'X-RapidAPI-Key': '5714c61079msh3a2fe912e7e7648p1659edjsn6c89c2e1d637',
    'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com',
    'Accept': 'application/json' 
  });

  const options = { headers };

  const [year, month, day] = login.value.date.split('-');
  console.log(`${year}${month}${day}`);
  const date = `${year}${month}${day}`;

  const url = `https://timetable-lookup.p.rapidapi.com/TimeTable/BOS/LAX/${date}/`;
  try {
    const response = await this.http.get(url, options).toPromise();
    this.timeTableData = response;
  } catch (error) {
    console.error(error);
  }
}*/

  ngOnInit(): void {
  }

}
