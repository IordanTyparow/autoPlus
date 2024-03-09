import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeaderRoutingModule } from './header-router.module';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [CommonModule, HeaderRoutingModule],
  exports: [FooterComponent, HeaderComponent],
})
export class CoreModule {}
