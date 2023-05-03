interface address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;

  geo: {
    lat: string;
    lng: string;
  };
}

interface company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Data {
  id: number;
  name: string;
  username: string;
  address: address;
  email: string;
  phone: string;
  website: string;
  company: company;
}
