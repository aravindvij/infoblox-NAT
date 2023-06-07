import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiServiceService } from 'src/app/core/service/api-service.service';
import { CreateItemDialogComponent } from './create-item-dialog/create-item-dialog.component';
import { DataService } from './data.service';

export interface DataList{
  name: string,
  id: number,
  description: string,
  server_ip: string,
  nat_space_id: string,
  server_nat_ip: string,
  status: string
}

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss'],
  providers: [DataService]
})
export class DataListComponent implements OnInit {

  dataList:Array<DataList> = [];
  searchData: String = '';
  checked = false;
  selectedItems:Array<DataList> = [];
  multipleChecked = true;
  
  constructor(private apiService: ApiServiceService, private dialog: MatDialog, 
    private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchDataList();
  }

  fetchDataList(){
    this.dataList = this.dataService.fetchDataList();
  }

  createItem(itemData?: any){
    const dialogRef = this.dialog.open(CreateItemDialogComponent, {
      width: '50%',
      data: this.selectedItems && this.selectedItems.length > 0 ? this.selectedItems[0] : itemData ? itemData : null
    });
   dialogRef.afterClosed().subscribe((res: any) => {
      if (res) {
          const itemIndex = this.dataList.findIndex(item => item.id === res.id); 
          if(itemIndex > -1){
            this.dataList[itemIndex] = res;
          } else{
            this.dataList = this.dataList.concat(res);
        }
      }
    });
  }

  removeItem(index?: number){
    if(index !== undefined){
    this.dataList.splice(index,1);
    } else{
      this.selectedItems.map(item => {
        this.dataList = this.dataList.filter((element: any) => element.name.toLowerCase() !== item.name.toLowerCase());
      });
    }
  }

  onSelection(e: any, item: any){
    if(e){
      this.selectedItems.push(item);
    } else{
      this.selectedItems.splice(this.selectedItems.indexOf(item.name),1);
    }
    if(this.selectedItems.length !== 1){
      this.multipleChecked = true;
    }else{
      this.multipleChecked = false;
    }
    this.checked = true;
  }

}
