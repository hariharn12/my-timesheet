import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

}
