import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-tabla-tateti',
  templateUrl: './tabla-tateti.component.html',
  styleUrls: ['./tabla-tateti.component.css']
})
export class TablaTatetiComponent implements OnInit {

  @Input() mostrarTablaTateti: boolean;

  displayedColumns: string[] = ['usuario','puntos','victorias', 'derrotas', 'empates','fecha'];
  dataSource

  constructor(private db : StorageService) { }

  ngOnInit(): void {
    this.db.TraerListado("tateti").subscribe(doc =>{
      this.dataSource = new MatTableDataSource(doc);
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
  }

}
