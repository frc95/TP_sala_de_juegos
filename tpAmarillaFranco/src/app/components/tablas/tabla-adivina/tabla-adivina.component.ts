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
  checkedUsuario : boolean = false;

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
    console.log(this.checked);
    console.log(this.checkedUsuario);
    if(this.checked==false && this.checkedUsuario==true)
    {
      this.db.TraerPartidasTopUserVictoria("adivina").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    }
    else if(this.checked==false && this.checkedUsuario==false)
    {
      this.db.TraerTopPorVictorias("adivina").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    }
    else if(this.checked==true && this.checkedUsuario==true)
    {
      this.db.TraerPartidasUser("adivina").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    }
    else if(this.checked==true)
    {
      this.db.TraerListadoOrdenadoPorVictorias("adivina").subscribe(doc =>{
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
      this.db.TraerPartidasTopUserVictoria("adivina").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    }
    else if(this.checkedUsuario==false)
    {
      this.db.TraerPartidasUser("adivina").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    }
    else if(this.checkedUsuario==true && this.checked==true)
    {
      this.db.TraerTopPorVictorias("adivina").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    }
    else if(this.checkedUsuario==true)
    {
      this.db.TraerListadoOrdenadoPorVictorias("adivina").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    } 
  }

}
