import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { InputFieldComponent } from './form-fields/input/input-field.component';
import { SelectFieldComponent } from './form-fields/select/select-field.component';
import { CheckboxFieldComponent } from './form-fields/checkbox/checkbox-field.component';
import { TextareaFieldComponent } from './form-fields/textarea/textarea-field.component';
import { DatepickerFieldComponent } from './form-fields/datepicker/datepicker-field.component';

@NgModule({
  declarations: [
    DynamicFormComponent,
    DynamicTableComponent,
    InputFieldComponent,
    SelectFieldComponent,
    CheckboxFieldComponent,
    TextareaFieldComponent,
    DatepickerFieldComponent,
  ],
  imports: [CommonModule],
  exports: [
    DynamicFormComponent,
    DynamicTableComponent,
    InputFieldComponent,
    SelectFieldComponent,
    CheckboxFieldComponent,
    TextareaFieldComponent,
    DatepickerFieldComponent,
  ],
})
export class DynamicModule {}
