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
  checked : boolean = false;
  checkedUsuario : boolean = false;

  displayedColumns: string[] = ['usuario', 'victorias', 'tiempo' ,'fecha'];
  dataSource;

  constructor(private db : StorageService) { }

  ngOnInit(): void {
    this.db.TraerListadoOrdenadoPorVictorias("agilidad").subscribe(doc =>{
      this.dataSource = new MatTableDataSource(doc);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
  }

  MostrarTop()
  {
    console.log(this.checked);
    console.log(this.checkedUsuario);
    if(this.checked==false && this.checkedUsuario==true)
    {
      this.db.TraerPartidasTopUserVictoria("agilidad").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    }
    else if(this.checked==false && this.checkedUsuario==false)
    {
      this.db.TraerTopPorVictorias("agilidad").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    }
    else if(this.checked==true && this.checkedUsuario==true)
    {
      this.db.TraerPartidasUser("agilidad").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    }
    else if(this.checked==true)
    {
      this.db.TraerListadoOrdenadoPorVictorias("agilidad").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    }
    
  }

  MostrarPartidasUser()
  {
    console.log(this.checked);
    console.log(this.checkedUsuario);
    if(this.checked==true && this.checkedUsuario==false)
    {
      this.db.TraerPartidasTopUserVictoria("agilidad").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    }
    else if(this.checkedUsuario==false)
    {
      this.db.TraerPartidasUser("agilidad").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    }
    else if(this.checkedUsuario==true && this.checked==true)
    {
      this.db.TraerTopPorVictorias("agilidad").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    }
    else if(this.checkedUsuario==true)
    {
      this.db.TraerListadoOrdenadoPorVictorias("agilidad").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    } 
  }

}
