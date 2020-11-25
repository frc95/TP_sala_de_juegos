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
  checked : boolean = false;

  displayedColumns: string[] = ['usuario','puntos', 'victorias', 'derrotas', 'empates', 'fecha'];
  dataSource

  constructor(private db : StorageService) { }

  ngOnInit(): void {
    this.db.TraerListadoOrdenadoPorPuntos("PPT").subscribe(doc =>{
      this.dataSource = new MatTableDataSource(doc);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
  }

  MostrarTop()
  {
    if(this.checked==false)
    {
      this.db.TraerTopPorPuntos("PPT").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    }
    else
    {
      this.db.TraerListadoOrdenadoPorPuntos("PPT").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    }
    
  }

}
