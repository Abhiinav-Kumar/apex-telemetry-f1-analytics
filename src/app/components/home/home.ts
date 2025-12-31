import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { LoaderComponent } from "../../shared/loader/loader.component";

@Component({
  selector: 'app-home',
  imports: [Navbar, LoaderComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
