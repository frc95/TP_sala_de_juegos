import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-tabla-anagrama',
  templateUrl: './tabla-anagrama.component.html',
  styleUrls: ['./tabla-anagrama.component.css']
})
export class TablaAnagramaComponent implements OnInit {

  @Input() mostrarTablaAnagrama: boolean;
  checked : boolean = false;

  displayedColumns: string[] = ['usuario', 'aciertos','Errores','tiempo','fecha'];
  dataSource;

  constructor(private db : StorageService) { }

  ngOnInit(): void {
    this.db.TraerListadoOrdenadoPorVictorias("anagrama").subscribe(doc =>{
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
      this.db.TraerTopPorVictorias("anagrama").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    }
    else
    {
      this.db.TraerListadoOrdenadoPorVictorias("anagrama").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    }
    
  }

}
