import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormDebugComponent} from './form-debug/form-debug.component';
import {InputErrorMsgComponent} from './input-error-msg/input-error-msg.component';

@NgModule({
  declarations: [
    FormDebugComponent,
    InputErrorMsgComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormDebugComponent,
    InputErrorMsgComponent
  ]
})
export class SharedUtilsModule {
}
