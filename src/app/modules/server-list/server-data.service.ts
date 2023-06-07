import { Injectable } from '@angular/core';

@Injectable(

)
export class ServerDataService {

  data = [
    {
    "name": "Box",
    "id": "1",
    "description": "xyz lorem 324 got boty doty",
    "server_ip": "10.19.19.23",
    "nat_space_id": "12",
    "server_nat_ip": "122.12.19.21",
    "status": "online"
    },
    {
    "name": "DoS",
    "id": "2",
    "description": "Server Box xyz lorem 324 got boty doty",
    "server_ip": "10.19.19.23",
    "nat_space_id": "1",
    "server_nat_ip": "122.12.19.21",
    "status": "online"
    },
    {
    "name": "Server Box",
    "id": "3",
    "description": " 10.013.122-xyz lorem 324 got boty doty",
    "server_ip": "10.19.19.23",
    "nat_space_id": "12",
    "server_nat_ip": "122.12.19.21",
    "status": "erorr"
    },
    {
    "name": "Nat-vat",
    "id": "4",
    "description": "xyz lorem 324 got boty doty",
    "server_ip": "10.19.19.23",
    "nat_space_id": "15",
    "server_nat_ip": "122.12.19.21",
    "status": "online"
    },
    {
    "name": "ZTh-vtc-1275844",
    "id": "5",
    "description": "xyz lorem 324 got boty doty",
    "server_ip": "10.19.19.23",
    "nat_space_id": "14",
    "server_nat_ip": "122.12.19.21",
    
    "status": "error"
    },
    {
    "name": "Box test",
    "id": "6",
    "description": "xyz lorem 324 got boty doty",
    "server_ip": "10.19.19.23",
    "nat_space_id": "13",
    "server_nat_ip": "122.12.19.21",
    "status": "online"
    }
];

  constructor() { }

  fetchDataList(): any{
    return this.data;
  }
}
