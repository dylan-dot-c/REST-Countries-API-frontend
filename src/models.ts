interface Flag {
    png: string;
    svg: string;
    alt: string;
  }
    
  interface NativeName {
    official: string;
    common: string;
  }
  
  interface NativeNames {
    eng: NativeName;
    smo: NativeName;
  }
  
  interface Name {
    common: string;
    official: string;
    nativeName: NativeNames;
  }
  
  interface Currency {
    name: string;
    symbol: string;
  }
  
  interface Currencies {
    [key: string]: Currency;
  }
  
  interface Language {
    [key: string]: string;
  }
  
  interface Country {
    flags: Flag;
    name: Name;
    tld: string[];
    currencies: Currencies;
    capital: string[];
    region: string;
    subregion: string;
    languages: Language;
    population: number;
    borders: string[] | []
  }

  export interface CountryFirst {
    flags: Flag;
    name: Name;
    capital: string[];
    region: string;
    population: number;
  }


export default Country