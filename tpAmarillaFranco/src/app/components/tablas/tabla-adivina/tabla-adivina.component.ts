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

  displayedColumns: string[] = ['usuario', 'victorias', 'fecha'];
  dataSource

  constructor(private db : StorageService) { }

  ngOnInit(): void {
    this.db.TraerListado("adivina").subscribe(doc =>{
      this.dataSource = new MatTableDataSource(doc);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
  }

}
