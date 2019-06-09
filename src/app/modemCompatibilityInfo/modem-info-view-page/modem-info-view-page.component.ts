import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import {Router} from '@angular/router';
import { UpdateViewService } from '../updateViewService/update-view.service';
import { UpdateInfoModel } from '../updateInfoDetail/update.info';
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';
import { ExcelService } from '../../export-service/excel.service';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-modem-info-view-page',
  templateUrl: './modem-info-view-page.component.html',
  styleUrls: ['./modem-info-view-page.component.css']
})
export class ModemInfoViewPageComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  elementData : any [] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
    {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
    {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
    {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
    {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
    {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
    {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
    {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
    {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
    {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  public name;
  updateInfo: UpdateInfoModel[];
  public updateInfoModel : UpdateInfoModel;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

 
  constructor(private router: Router, private updateService : UpdateViewService, private excelService: ExcelService) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.updateService.cast.subscribe(updateInfo=> this.updateInfo = updateInfo);
    console.log(this.elementData);
  }

  edit(row){
    this.name = "vinay";
    this.updateInfoModel = new UpdateInfoModel(row.position,row.name,row.weight,row.symbol);
    console.log(this.name);
    console.log(this.updateInfoModel.name);

    this.updateService.editUpdate(this.updateInfoModel);
    console.log(JSON.stringify(row));
    console.log(localStorage.getItem('dataSource'));
    this.router.navigate(["\modemInfoUpdate"]);
  }

  test(ele) {
    console.log(JSON.stringify(ele));
  }

  exportAsXLSX():void {
    console.log(this.elementData);
    this.excelService.exportAsExcelFile(this.elementData, 'sample');
 }

 convertToPDF() {

  var doc = new jsPDF();
  var col = ["Position", "Name","Weight","Symbol"];
  var rows = [];

/* The following array of object as response from the API req  */

var itemNew = [    
{ id: 'Case Number', name : '101111111' },
{ id: 'Patient Name', name : 'UAT DR' },
{ id: 'Hospital Name', name: 'Dr Abcd' }    
]


this.elementData.forEach(element => {      
  var temp = [element.position,element.name,element.weight,element.symbol];
  rows.push(temp);
});        

  doc.autoTable(col, rows);
  doc.save('Test.pdf');
}

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];