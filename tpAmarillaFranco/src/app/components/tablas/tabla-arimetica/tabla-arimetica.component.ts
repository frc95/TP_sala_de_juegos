import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-tabla-arimetica',
  templateUrl: './tabla-arimetica.component.html',
  styleUrls: ['./tabla-arimetica.component.css']
})
export class TablaArimeticaComponent implements OnInit {

  @Input() mostrarTablaArimetica: boolean;

  displayedColumns: string[] = ['usuario', 'victorias', 'tiempo' ,'fecha'];
  dataSource

  constructor(private db : StorageService) { }

  ngOnInit(): void {
    this.db.TraerListado("agilidad").subscribe(doc =>{
      this.dataSource = new MatTableDataSource(doc);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
  }

}
