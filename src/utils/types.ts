export interface ProductProps {
  id: string;
  Name: string;
  isAvailable: boolean;
  image: string;
  price: number;
  currency: string;
  unit: string;
}
export interface PostProps {
  _id?: string;
  image_url?: string | null;
  title: string;
  description: string;
}
export interface UserData {
  id: number | null;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: number | null;
  city: string | null;
  date: Date;
}

export interface AuthState {
  isAuthenticated: boolean;
}
export interface CustomButtonProps {
  title: string;
  onPress: () => void;
}
