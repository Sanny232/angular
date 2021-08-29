import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProfileService} from "./profile.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profileForm: FormGroup;
  onSubmit(){
    if(this.profileForm.valid)
      this.profileService.updateProfile$(this.profileForm.value).subscribe(() => {
        this._snackBar.open('Profile data was successfully updated!', '', {duration: 1000});
        this.setProfileData();
      });
  }
  constructor(private profileService: ProfileService,
              private _snackBar: MatSnackBar) { }

  setProfileData(){
    this.profileService.getProfileData$().subscribe((data: any) => {
      this.profileForm.get('email')?.setValue(data.email);
      this.profileForm.get('username')?.setValue(data.username);
      this.profileForm.get('age')?.setValue(data.age);
    })
  }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      username: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required])
    })
    this.setProfileData();
  }
}
