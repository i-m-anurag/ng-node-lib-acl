/** JSON-driven form field configuration consumed by DynamicFormComponent */
export interface FormFieldConfig {
  key: string;
  label: string;
  type: 'text' | 'number' | 'select' | 'checkbox' | 'date' | 'textarea';
  placeholder?: string;
  validators?: FormFieldValidator[];
  options?: SelectOption[];
  defaultValue?: unknown;
  order?: number;
  disabled?: boolean;
}

export interface FormFieldValidator {
  type: 'required' | 'minLength' | 'maxLength' | 'pattern' | 'min' | 'max' | 'email';
  value?: unknown;
  message: string;
}

export interface SelectOption {
  label: string;
  value: unknown;
}
