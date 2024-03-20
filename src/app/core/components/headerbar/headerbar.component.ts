import { Component } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherSearch } from '@ng-icons/feather-icons';
// featherSearch
@Component({
  selector: 'app-headerbar',
  standalone: true,
  imports: [NzFormModule, NzInputModule, NgIconComponent],
  templateUrl: './headerbar.component.html',
  styleUrl: './headerbar.component.scss',
  viewProviders: [provideIcons({ featherSearch })],
})
export class HeaderbarComponent {}
