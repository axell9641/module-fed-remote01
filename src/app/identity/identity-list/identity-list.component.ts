import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DidJwk, IdentitiesService, ListIdentitiesResponse } from '../services/identities.service';

@Component({
  selector: 'app-identity-list',
  templateUrl: './identity-list.component.html',
  styleUrls: ['./identity-list.component.scss']
})
export class IdentityListComponent implements OnInit , AfterViewInit {
  result: ListIdentitiesResponse;
  displayedColumns: string[] = ['did', 'date'];
  dataSource = new MatTableDataSource<DidJwk>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private indetityService: IdentitiesService) { }

  ngOnInit(): void {
    this.indetityService.getIdentities('').subscribe (result => {
      this.result = result;
      this.dataSource.data = this.result.didJwk;
    });
  }

  ngAfterViewInit(): void {
    this.configureTable();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private configureTable(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
