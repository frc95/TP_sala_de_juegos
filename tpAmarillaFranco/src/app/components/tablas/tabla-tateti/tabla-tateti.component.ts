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
  checked : boolean = false;
  checkedUsuario : boolean = false;

  displayedColumns: string[] = ['usuario','puntos','victorias', 'derrotas', 'empates','fecha'];
  dataSource

  constructor(private db : StorageService) { }

  ngOnInit(): void {
    this.db.TraerListadoOrdenadoPorPuntos("tateti").subscribe(doc =>{
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
      this.db.TraerPartidasTopUserPuntos("tateti").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    }
    else if(this.checked==false && this.checkedUsuario==false)
    {
      this.db.TraerTopPorPuntos("tateti").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    }
    else if(this.checked==true && this.checkedUsuario==true)
    {
      this.db.TraerPartidasUser("tateti").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    }
    else if(this.checked==true)
    {
      this.db.TraerListadoOrdenadoPorPuntos("tateti").subscribe(doc =>{
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
      this.db.TraerPartidasTopUserPuntos("tateti").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    }
    else if(this.checkedUsuario==false)
    {
      this.db.TraerPartidasUser("tateti").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    }
    else if(this.checkedUsuario==true && this.checked==true)
    {
      this.db.TraerTopPorPuntos("tateti").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    }
    else if(this.checkedUsuario==true)
    {
      this.db.TraerListadoOrdenadoPorPuntos("tateti").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    } 
  }

}
