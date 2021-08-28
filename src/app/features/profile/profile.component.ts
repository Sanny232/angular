import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProfileService} from "./profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profileForm: FormGroup;

  onSubmit(){
    if(this.profileForm.valid)
    console.log(this.profileForm.value)
  }
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      email: new FormControl('', [Validators.email]),
      username: new FormControl(''),
      age: new FormControl('')
    })
    this.profileService.getProfileData$().subscribe((data: any) => {
      this.profileForm.get('email')?.setValue(data.email);
      this.profileForm.get('username')?.setValue(data.username);
      this.profileForm.get('age')?.setValue(data.age);
    })
  }

}
