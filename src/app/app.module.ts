import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    HttpClientModule,
  ],
  // ❌ remove declarations of standalone components
  bootstrap: [], // <-- leave empty, use `main.ts` to bootstrap
})
export class AppModule {}
