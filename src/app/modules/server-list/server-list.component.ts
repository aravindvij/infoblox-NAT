import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiServiceService } from 'src/app/core/service/api-service.service';
import { CreateServerDialogComponent } from './create-server-dialog/create-server-dialog.component';
import { ServerDataService } from './server-data.service';

export interface DataList{
  name: string,
  description: string,
  server_ip: string,
  nat_space_id: string,
  server_nat_ip: string,
  status: string
}

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss'],
  providers: [ServerDataService]
})
export class ServerListComponent implements OnInit {

  dataList:Array<DataList> = [];
  searchData: String = '';
  checked = false;
  selectedItems:Array<DataList> = [];
  multipleChecked = true;
  
  constructor(private apiService: ApiServiceService, private dialog: MatDialog, 
    private dataService: ServerDataService) { }

  ngOnInit(): void {
    this.fetchDataList();
  }

  fetchDataList(){
    this.dataList = this.dataService.fetchDataList();
  }

  createItem(itemData?: any){
    const dialogRef = this.dialog.open(CreateServerDialogComponent, {
      width: '50%',
      data: this.selectedItems && this.selectedItems.length > 0 ? this.selectedItems[0] : itemData ? itemData : null
    });
   dialogRef.afterClosed().subscribe((res: any) => {
      if (res) {
        this.dataList = this.dataList.concat(res);
      }
    });
  }

  removeItem(index?: number){
    if(index){
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
