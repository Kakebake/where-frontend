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
  shops: [
    {
      name: 'Hevn',
      streetAddress: 'Torggata 36 A',
      zipCode: '0183',
      city: 'Oslo',
      country: 'Norway',
      brands: ['Army Of Me', 'Avatar', 'Niløs', 'Norwegian Rain'],
      header: '',
      gallery: ''
    },
    {
      name: 'Norwegian Rain',
      streetAddress: 'Karl Johans gate 41B',
      zipCode: '0162',
      city: 'Oslo',
      country: 'Norway',
      brands: ['Norwegian Rain', 'T-Michael'],
      header: '',
      gallery: ''
    }
  ],
  brands: [
    {
      name: 'Army Of Me',
      shops: ['Hevn']
    },
    {
      name: 'Avatar',
      shops: ['Hevn']
    },
    {
      name: 'Niløs',
      shops: ['Hevn']
    },
    {
      name: 'Avatar',
      shops: ['Hevn']
    },
    {
      name: 'Norwegian Rain',
      shops: ['Hevn', 'Norwegian Rain']
    },
    {
      name: 'T-Michael',
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
