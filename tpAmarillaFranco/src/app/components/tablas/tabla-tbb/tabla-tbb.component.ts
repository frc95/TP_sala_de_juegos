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
  checked : boolean = false;
  checkedUsuario : boolean = false;

  displayedColumns: string[] = ['usuario', 'tiempo' ,'fecha'];
  dataSource;

  constructor(private db : StorageService) { }

  ngOnInit(): void {
    this.db.TraerListadoOrdenadoPorTiempo("TBB","desc").subscribe(doc =>{
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
      this.db.TraerPartidasTopUserTiempo("TBB","desc").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    }
    else if(this.checked==false && this.checkedUsuario==false)
    {
      this.db.TraerTopPorTiempo("TBB","desc").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    }
    else if(this.checked==true && this.checkedUsuario==true)
    {
      this.db.TraerPartidasUser("TBB").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    }
    else if(this.checked==true)
    {
      this.db.TraerListadoOrdenadoPorTiempo("TBB","desc").subscribe(doc =>{
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
      this.db.TraerPartidasTopUserTiempo("TBB","desc").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    }
    else if(this.checkedUsuario==false)
    {
      this.db.TraerPartidasUser("TBB").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    }
    else if(this.checkedUsuario==true && this.checked==true)
    {
      this.db.TraerTopPorTiempo("TBB","desc").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    }
    else if(this.checkedUsuario==true)
    {
      this.db.TraerListadoOrdenadoPorTiempo("TBB","desc").subscribe(doc =>{
        this.dataSource = new MatTableDataSource(doc);
      });
    }
    
  }

}
