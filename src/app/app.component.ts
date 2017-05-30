import { Component } from '@angular/core';
import { ApplicationService } from './application.service';
import { Application } from './application'





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApplicationService]
})
export class AppComponent {

    title = '';
    error: any;
    shibUID: string; // '804051483';//'804051483';//'203251136';
    show = false;
    searchText: string;
    sortColumn: string = '-formDate';
    sortIconClass: string;
    errorMessage: any = '';

    isFaculty: boolean;
    isSAO: boolean;
    isASAnalyst: boolean;
    isASDirector: boolean;
    isDean: boolean;
    isFS: boolean;
    isAnonymous: boolean = false;
    
    myApplications: Application[];
    colleagueApplications: Application[];
    gradApplications: Application[];
    archivedApplications: Application[];
    directordeanApplications: Application[];
    programfacultyApplications: Application[];
    
    constructor(
        private applicationService: ApplicationService, private http: Http) {   
        this.sortIconClass = "glyphicon glyphicon-triangle-bottom";
   }

    ngOnInit() {
        this.getApplications();
    }

    callSearchValue(e, srcText: string) {
        e = e || window.event;
        var code = e.keyCode;
        
        if ((code >= 48 && code <= 57) || (code >= 65 && code <= 90)) {
            this.searchText = srcText;
            this.show = true;
        }        
    }

    getApplications() {
        this.applicationService.getAllApplications().subscribe(
            data => {
                this.isFaculty = data.isFaculty
                this.isSAO = data.isSAO
                this.isASAnalyst = data.isASAnalyst
                this.isASDirector = data.isASDirector
                this.isDean = data.isDean
                this.isFS = data.isFS
                this.isAnonymous = data.isAnonymous
                this.myApplications = data.myApplications
                this.colleagueApplications = data.applicationsByColleagues
                this.gradApplications = data.applicationsByGraduateDivision
                this.directordeanApplications = data.applicationsByDirectorAndDeans
                this.programfacultyApplications = data.applicationsByProgramOrFaculty
                this.archivedApplications = data.archivedApplications
            });
    }

    selectedClass(order: any): string {
        return "glyphicon glyphicon-chevron-" + order;
    }

    getSortedClass(columnName: string) {
        if (this.sortColumn.endsWith(columnName))
            return this.sortIconClass;
        else
            return "fa fa-sort";
    }

    getSortedStyle(columnName: string) {
        if (this.sortColumn.endsWith(columnName))
            return "color:white";
        else
            return "color:#5881A5";
    }

    sortBy(col: string) {
        this.sortIconClass = "glyphicon glyphicon-triangle-top";
        if (this.sortColumn != undefined) {
            if (!this.sortColumn.startsWith('-')) {
                this.sortColumn = '-' + col;
                this.sortIconClass = "glyphicon glyphicon-triangle-bottom"
            }
            else
                this.sortColumn = col;
        }
        else {
            this.sortColumn = col;
        }
    }

}

