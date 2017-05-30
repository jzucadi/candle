import { Component, OnInit, Input } from '@angular/core';
import { Inject } from '@angular/core';

import { Application } from '../application';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'my-review',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent {

    @Input('subtitle') subtitleName: string;
    @Input() applications: Application;
    @Input('searchText') searchText: string;
    @Input('sortColumn') sortColumn: string;
    @Input('showArchive') show: boolean;

    //show = false;
    selectedApplication: Application;
    RedirectURL: string;
    filteredData: Application[];
    onSelect(application: Application) {
        this.selectedApplication = application;
    }

    toggleArchive() {
        this.show = !this.show;
    }

    constructor( @Inject('RedirectURL') private redirectURL: string) {
        this.RedirectURL = redirectURL;       
    }
    
    isSearchTextEmpty() {
        return (this.searchText.length === 0);
    }

    //constructor(searchText)
    //{
    //    //this.searchText = searchText;
    //}

    //groups = [
    //    {
    //        "name": "pencils",
    //        "items": ["red pencil", "blue pencil", "yellow pencil"]
    //    },
    //    {
    //        "name": "rubbers",
    //        "items": ["big rubber", "small rubber"]
    //    },
    //];

}
