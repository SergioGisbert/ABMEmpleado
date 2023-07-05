import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit,Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Empleado } from 'src/app/models/empleados';
import { EmpleadoService } from 'src/app/services/empleado.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { MensajeConfirmacionComponent } from '../shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent implements OnInit, AfterViewInit{
  
  displayedColumns: string[] = ['nombreCompleto', 'correo','estadoCivil', 'fechaIngreso', 'sexo', 'telefono', 'acciones'];
  dataSource = new MatTableDataSource();
  lisEmpleados: Empleado[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private _liveAnnouncer: LiveAnnouncer, private empleadoServices: EmpleadoService,
    public snackBar: MatSnackBar) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cargarEmpleados(){
    this.lisEmpleados = this.empleadoServices.getEmpleados();
    this.dataSource = new MatTableDataSource(this.lisEmpleados);
  }

  eliminarEmpleado(index: number){
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width: '350px',
      data: {mensaje: '¿Esta seguro que desea eliminarel empleado?'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === 'aceptar'){
        this.empleadoServices.eliminarEmpleado(index)
        this.cargarEmpleados();
        this.snackBar.open('El empleado fue eliminado con exito','',{duration: 30000, })
      }
    });
  }

  editarEmpleado(index: number){

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
     this.cargarEmpleados();
  }

}
