import {catchError, map, tap } from 'rxjs/operators';
import {throwError} from 'rxjs';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

private employeeUrl="https://api.employee.new/dept/value.json?search=city:"
getdata(selectedtype): Observable<employee[]> {
return this.http.get<employee[]>(this.employeeUrl+selectedtype)
      .pipe(
  catchError(this.errorHandler)); 
}

errorHandler(error: HttpErrorResponse)
{
return throwError(error.message || 'Server Error')
}


//employeecomponent.ts

employeedata:any=[];
public errorMsg;
ngOnInit(){
this.dataService.getdata(this.search).subscribe(data =>this.employeedata=data,
                            error =>this.errorMsg=error);
}
