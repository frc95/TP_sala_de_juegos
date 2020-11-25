import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-tabla-adivina',
  templateUrl: './tabla-adivina.component.html',
  styleUrls: ['./tabla-adivina.component.css']
})
export class TablaAdivinaComponent implements OnInit {

  @Input() mostrarTablaAdivina: boolean;
  checked : boolean = false;

  displayedColumns: string[] = ['usuario', 'victorias', 'fecha'];
  dataSource

  constructor(private db : StorageService) { }

  ngOnInit(): void {
    this.db.TraerListadoOrdenadoPorVictorias("adivina").subscribe(doc =>{
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
      this.db.TraerTopPorVictorias("adivina").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    }
    else
    {
      this.db.TraerListadoOrdenadoPorVictorias("adivina").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    }
    
  }

}
