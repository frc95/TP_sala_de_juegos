import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-tabla-memotest',
  templateUrl: './tabla-memotest.component.html',
  styleUrls: ['./tabla-memotest.component.css']
})
export class TablaMemotestComponent implements OnInit {

  @Input() mostrarTablaMemotest: boolean;

  displayedColumns: string[] = ['usuario', 'tiempo' ,'fecha'];
  dataSource

  constructor(private db : StorageService) { }

  ngOnInit(): void {
    this.db.TraerListado("memotest").subscribe(doc =>{
      this.dataSource = new MatTableDataSource(doc);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
  }

}
