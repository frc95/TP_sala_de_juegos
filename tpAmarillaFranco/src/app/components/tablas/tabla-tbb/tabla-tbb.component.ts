import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-tabla-tbb',
  templateUrl: './tabla-tbb.component.html',
  styleUrls: ['./tabla-tbb.component.css']
})
export class TablaTBBComponent implements OnInit {

  @Input() mostrarTablaTBB: boolean;

  displayedColumns: string[] = ['usuario', 'tiempo' ,'fecha'];
  dataSource;

  constructor(private db : StorageService) { }

  ngOnInit(): void {
    this.db.TraerListado("TBB").subscribe(doc =>{
      this.dataSource = new MatTableDataSource(doc);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
  }

}
