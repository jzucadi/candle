import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterPipe implements PipeTransform {
    transform(application: any, args: string[]): any {
        let filter = args[0];

        var month_names = new Array("January", "February", "March",
            "April", "May", "June", "July", "August", "September",
            "October", "November", "December");

        if (filter && Array.isArray(application)) {
            let filterKeys = Object.keys(filter);
            return application.filter(item =>
                filterKeys.reduce((memo, keyName) =>
                    memo && (item.studentName.toString().toLowerCase().indexOf(filter["searchString"].toString().toLowerCase()) > -1
                        || (item.staffName != null && item.staffName.toString().toLowerCase().indexOf(filter["searchString"].toString().toLowerCase()) > -1)
                        || item.formType.toString().toLowerCase().indexOf(filter["searchString"].toString().toLowerCase()) > -1
                        || month_names[(new Date(item.formDate)).getMonth()].toLowerCase().indexOf(filter["searchString"].toString().toLowerCase()) > -1
                        || item.studentUID.toString().toLowerCase().indexOf(filter["searchString"].toString().toLowerCase()) > -1
                        || item.term.toString().toLowerCase().indexOf(filter["searchString"].toString().toLowerCase()) > -1
                    )
                    , true)

            );
        } else {
            return application;
        }
    }

}