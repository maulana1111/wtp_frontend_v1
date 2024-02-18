import { Groups } from "../../groups/Model/Interface";

export interface Props {
  title: string;
  isLoading: boolean;
  data?: any;
}

export interface UsersDataProps {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  is_active: boolean;
  groups: Groups[];
}
