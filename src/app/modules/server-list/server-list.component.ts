import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiServiceService } from 'src/app/core/service/api-service.service';
import { CreateServerDialogComponent } from './create-server-dialog/create-server-dialog.component';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss']
})
export class ServerListComponent implements OnInit {

  serverList:any = [];
  searchServer: any = '';
  checked = false;
  selectedServers:any[] = [];
  multipleChecked = true;
  
  data = [
    {
    "name": "Box",
    "description": "xyz lorem 324 got boty doty",
    "server_ip": "10.19.19.23",
    "nat_space_id": "12",
    "server_nat_ip": "122.12.19.21",
    "status": "online"
    },
    {
    "name": "DoS",
    "description": "Server Box xyz lorem 324 got boty doty",
    "server_ip": "10.19.19.23",
    "nat_space_id": "1",
    "server_nat_ip": "122.12.19.21",
    "status": "online"
    },
    {
    "name": "Server Box",
    "description": " 10.013.122-xyz lorem 324 got boty doty",
    "server_ip": "10.19.19.23",
    "nat_space_id": "12",
    "server_nat_ip": "122.12.19.21",
    "status": "erorr"
    },
    {
    "name": "Nat-vat",
    "description": "xyz lorem 324 got boty doty",
    "server_ip": "10.19.19.23",
    "nat_space_id": "15",
    "server_nat_ip": "122.12.19.21",
    "status": "online"
    },
    {
    "name": "ZTh-vtc-1275844",
    "description": "xyz lorem 324 got boty doty",
    "server_ip": "10.19.19.23",
    "nat_space_id": "14",
    "server_nat_ip": "122.12.19.21",
    
    "status": "error"
    },
    {
    "name": "Box test",
    "description": "xyz lorem 324 got boty doty",
    "server_ip": "10.19.19.23",
    "nat_space_id": "13",
    "server_nat_ip": "122.12.19.21",
    "status": "online"
    }
];

  constructor(private apiService: ApiServiceService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchServerList();
  }

  fetchServerList(){
    // this.apiService.getServerList().subscribe(res => {
    //   if(res){
    //     this.serverList = res.items;
    //   }
    // }, (error) => {
    //   console.log(error);
    // });
    this.serverList = this.data;
  }

  createServer(server?: any){
    const dialogRef = this.dialog.open(CreateServerDialogComponent, {
      width: '50%',
      data: this.selectedServers && this.selectedServers.length > 0 ? this.selectedServers[0] : server ? server : null
    });
   dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.serverList = this.serverList.concat(res);
      }
    });
  }

  removeServer(index?: Number){
    if(index){
    this.serverList.splice(index,1);
    } else{
      this.selectedServers.map(server => {
        this.serverList = this.serverList.filter((element: any) => element.name.toLowerCase() !== server.name.toLowerCase());
      });
    }
  }

  onSelection(e: any, server: any){
    if(e){
      this.selectedServers.push(server);
    } else{
      this.selectedServers.splice(this.selectedServers.indexOf(server.name),1);
    }
    if(this.selectedServers.length !== 1){
      this.multipleChecked = true;
    }else{
      this.multipleChecked = false;
    }
    this.checked = true;
  }

}
