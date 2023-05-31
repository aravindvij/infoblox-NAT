import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-server-dialog',
  templateUrl: './create-server-dialog.component.html',
  styleUrls: ['./create-server-dialog.component.scss']
})
export class CreateServerDialogComponent implements OnInit {

  nat_space_data = [
    {
    "id": "1",
    "name": "Box"
    },
    {
    "id": "12",
    "name": "DoS"
    },
    {
    "id": "13",
    "name": "Server Box"
    },
    {
    "id": "14",
    "name": "Nat-vat"
    },
    {
    "id": "15",
    "name": "ZTh-vtc-1275844"
    },
    {
    "id": "17",
    "name": "GBD"
    }
    ];

  createServerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(256)]),
    description: new FormControl('', [Validators.maxLength(256)]),
    natSpace: new FormControl('', [Validators.required]),
    ipAddress: new FormControl({value: '', disabled: true}, [Validators.pattern('^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$')]),
  });

  constructor(public dialogRef: MatDialogRef<CreateServerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if(this.data){
      this.setValues(this.data);
    }
  }

  natSpaceSelection(e: any){
    this.createServerForm.get('ipAddress')?.enable();
  }

  setValues(data: any){
    if(data){
      this.createServerForm.get('name')?.setValue(data.name);
      this.createServerForm.get('description')?.setValue(data.description);
      this.createServerForm.get('natSpace')?.setValue(data.server_nat_ip);
      this.createServerForm.get('ipAddress')?.setValue(data.server_ip);
    }
    if(this.createServerForm.get('natSpace')?.value){
      this.createServerForm.get('natSpace')?.disable();
      this.createServerForm.get('ipAddress')?.enable();
    }
  }

  onSubmit(){
    const payload = {
      name: this.createServerForm.get('name')?.value,
      description: this.createServerForm.get('description')?.value,
      server_nat_ip: this.createServerForm.get('natSpace')?.value,
      nat_space_id: this.createServerForm.get('natSpace')?.value,
      server_ip: this.createServerForm.get('ipAddress')?.value,
      status: 'pending'
    }
    console.log(payload);
    this.dialogRef.close(payload);
  }

}
