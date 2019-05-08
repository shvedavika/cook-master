const initialState = {
  filters: [
    {
      id: 'typeOfEvent',
      filterName: 'Type of Event',
      filterItems: [
        {
          name: 'charity',
          key: generateId(),
          label: 'charity',
        },
        {
          name: 'concert',
          key: generateId(),
          label: 'concert',
        },
        {
          name: 'workshop',
          key: generateId(),
          label: 'workshop',
        },
        {
          name: 'special-offer',
          key: generateId(),
          label: 'special offer',
        },
      ]
    },
    {
      id: 'ageGroup',
      filterName: 'Age-Group',
      filterItems: [
        {
          name: 'children',
          key: generateId(),
          label: 'children',
        },
        {
          name: 'adult',
          key: generateId(),
          label: 'adult',
        },
      ]
    }
  ]
};

export default function (state = initialState, action) {
  switch(action.type) {
    default: return state;
  }
}

function generateId() {
  return Math.random();
}
