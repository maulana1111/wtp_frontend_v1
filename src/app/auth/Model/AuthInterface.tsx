import * as React from "react";

export interface FormData {
  username: string;
  password: string;
  database: string;
}

export interface databases {
  db_code: string;
  company_name: string;
}

export interface PropsAuth {
  isLoading: boolean;
  database: databases[];
  formData: FormData;
  onChangeViewPass: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleChangeForm: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isLoadingView: boolean;
  isViewPassword: boolean;
}
