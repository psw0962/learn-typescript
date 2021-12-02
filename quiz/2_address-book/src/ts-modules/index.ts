interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

export interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

export enum PhoneType {
  Home = 'home',
  Office = 'office',
  Studio = 'studio',
}
