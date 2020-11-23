import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StorageService } from '../../../services/storage.service';


@Component({
  selector: 'app-tabla-ppt',
  templateUrl: './tabla-ppt.component.html',
  styleUrls: ['./tabla-ppt.component.css']
})
export class TablaPPTComponent implements OnInit {

  @Input() mostrarTablaPPT: boolean;

  displayedColumns: string[] = ['usuario','puntos', 'victorias', 'derrotas', 'empates', 'fecha'];
  dataSource

  constructor(private db : StorageService) { }

  ngOnInit(): void {
    this.db.TraerListado("PPT").subscribe(doc =>{
      this.dataSource = new MatTableDataSource(doc);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
  }

}
