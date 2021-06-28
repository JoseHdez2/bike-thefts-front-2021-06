import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/users.service';
import { User } from '../user.entity';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(
    private toastr: ToastrService, 
    private usersService: UsersService) { }

  users: User[] = [];

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  onDelete(id?: number): void {
    if(!id) {
      console.error('User has no id.');
    }
    this.usersService.deleteUser(id!).subscribe(data => {
      this.toastr.success(`Deleted user ${id}.`, 'Success');
    });
  }

}
