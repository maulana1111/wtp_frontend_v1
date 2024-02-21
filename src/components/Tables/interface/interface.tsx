export interface PropsCrudView {
  title: string;
  isLoading: boolean;
  data?: any;
  fields: any;
  formData: any;
  onSubmit: (data: any) => void;
}
