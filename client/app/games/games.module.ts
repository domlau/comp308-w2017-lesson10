// Angular requirements
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
// Games Module requirements
import { GamesRoutes } from './games.routes';
import { GamesComponent } from './games.component';

// Sub Components
import { ListComponent } from './list/list.component';

// Service
import { GamesService } from './games.service';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule.forChild(GamesRoutes), HttpModule
  ],
  declarations: [
    GamesComponent,
    ListComponent
  ],
  providers: [
    GamesService
  ],
  exports: [
    GamesComponent,
    ListComponent
  ]
})
export class GamesModule {}
