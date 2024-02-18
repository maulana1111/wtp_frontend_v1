export interface PropsCrudView {
  title: string;
  isLoading: boolean;
  data?: any;
  field: any;
  onClickAction: (param: any, id: any) => void;
}
