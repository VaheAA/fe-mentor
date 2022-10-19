import { ref } from 'vue';

interface CountryDetails {
  name: string;
  nativeName: string;
  flags: {
    png: string;
    svg: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: [string];
  currencies: [
    {
      code: string;
      name: string;
      symbold: string;
    }
  ];
  languages: [
    {
      iso639_1: string;
      iso639_2: string;
      name: string;
      nativeName: string;
    }
  ];
  borders: string[];
}

interface Country {
  flags: {
    png: string;
    svg: string;
  };
  name: string;
  population: number;
  region: string;
  capital: string;
}

export default function useCountries() {
  const countryData = ref([]);
  const singleCounrty = ref(null);
  const borderCountry = ref('');
  const isLoading = ref(false);

  async function getCountries(url: string): Promise<Country[]> {
    isLoading.value = true;
    const res = await fetch(url);
    const data = await res.json();
    countryData.value = data;
    isLoading.value = false;
    return countryData.value;
  }

  async function getSingleCountry(url: string): Promise<CountryDetails | null> {
    isLoading.value = true;
    const res = await fetch(url);
    const data = await res.json();
    singleCounrty.value = data[0];
    isLoading.value = false;
    return singleCounrty.value;
  }

  async function getBorderCountries(url: string) {
    isLoading.value = true;
    const res = await fetch(url);
    const data = await res.json();
    borderCountry.value = data.name;
    isLoading.value = false;
    return borderCountry.value;
  }

  return {
    getCountries,
    getSingleCountry,
    getBorderCountries,
    isLoading
  };
}
