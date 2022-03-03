export interface INavigationLink {
  title?: string;
  icon?: string;
  url?: string | Object;
  places?: string[];
  iconUrl?: string;
  permissions?: string[];
  productName?: string;
  func?: string;
  children?: INavigationLink[];
}