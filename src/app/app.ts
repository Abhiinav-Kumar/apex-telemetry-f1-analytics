import { Component, signal, inject } from '@angular/core';
import { Home } from './components/home/home';
import { RouterOutlet } from '@angular/router';
import { LoaderService } from './services/loader.service';
import { LoaderComponent } from './shared/loader/loader.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [RouterOutlet, Home, LoaderComponent]
})
export class App {
  loaderService = inject(LoaderService);
  protected readonly title = signal('apex-telemetry-f1-analytics');
}
