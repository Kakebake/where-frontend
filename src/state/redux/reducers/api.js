export const COMPLETE = 'Onboarding/COMPLETE';
export const RESET = 'Onboarding/RESET';

export const complete = () => ({
  type: COMPLETE
});
export const reset = () => ({
  type: RESET
});

const initialState = {
  complete: false,
  a: 'aaa',
  stores: [
    {
      id: 'hevnhevn',
      name: 'Hevn',
      streetAddress: 'Torggata 36 A',
      zipCode: '0183',
      city: 'Oslo',
      country: 'Norway',
      brands: ['Army Of Me', 'Avatar', 'Niløs', 'Norwegian Rain'],
      header: '',
      gallery: '',
      url: 'https://hevn.no/',
      info: 'This is a fashion store'
    },
    {
      id: 'rainrain',
      name: 'Norwegian Rain',
      streetAddress: 'Karl Johans gate 41B',
      zipCode: '0162',
      city: 'Oslo',
      country: 'Norway',
      brands: ['Norwegian Rain', 'T-Michael'],
      header: '',
      gallery: '',
      url: 'https://norwegianrain.com/',
      info: 'This is a fashion store'
    }
  ],
  brands: [
    {
      id: 'army',
      name: 'Army Of Me',
      info: 'This is a fashion brand',
      url: 'https://www.armyofmedesign.com/',
      shops: ['Hevn']
    },
    {
      id: 'avatar',
      name: 'Avatar',
      info: 'This is a fashion brand',
      url: 'http://www.fashion.com',
      shops: ['Hevn']
    },
    {
      id: 'nilos',
      name: 'Niløs',
      info: 'This is a fashion brand',
      url: 'http://www.julius-garden.jp/',
      shops: ['Hevn']
    },
    {
      id: 'rain',
      name: 'Norwegian Rain',
      info: 'This is a fashion brand',
      url: 'https://norwegianrain.com/',
      shops: ['Hevn', 'Norwegian Rain']
    },
    {
      id: 'tt',
      name: 'T-Michael',
      info: 'This is a fashion brand',
      url: 'https://www.t-michael.com/',
      shops: ['Norwegian Rain']
    }
  ]
};

export default function mapReducer(state = initialState, action) {
  switch (action.type) {
    case COMPLETE:
      return state.set('complete', true);
    case RESET:
      return initialState;
    default:
      return state;
  }
}
