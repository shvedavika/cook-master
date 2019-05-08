const initialState = {
  menu: [
    {
      id: "starters",
      categoryName: "Starters",
      items: [
        {
          id: generateId(),
          name: "Tomato soup",
          gram: 250,
          price: 2.90,
        },
        {
          id: generateId(),
          name: "French onion soup",
          gram: 250,
          price: 2.90,
        },
        {
          id: generateId(),
          name: "Tomato salad",
          gram: 200,
          price: 2.75,
        },
        {
          id: generateId(),
          name: "Chicken salad",
          gram: 200,
          price: 2.75,
        }
      ]
    },
    {
      id: "mainCourses",
      categoryName: "Main courses",
      items: [
        {
          id: generateId(),
          name: "German sausage and chips",
          gram: 300,
          price: 6.50,
        },
        {
          id: generateId(),
          name: "Grilled fish and potatoes",
          gram: 250,
          price: 6.50,
        },
        {
          id: generateId(),
          name: "Italian cheese & tomato pizza",
          gram: 180,
          price: 4.85,
        },
        {
          id: generateId(),
          name: "Thai chicken and rice",
          gram: 220,
          price: 5.95,
        },
        {
          id: generateId(),
          name: "Vegatable pasta",
          gram: 220,
          price: 4.85,
        },
        {
          id: generateId(),
          name: "Roast chicken and potatoes",
          gram: 250,
          price: 5.95,
        }
      ]
    },
    {
      id: "snacks",
      categoryName: "Snacks",
      items: [
        {
          id: generateId(),
          name: "Cheese Burger",
          gram: 150,
          price: 3.20,
        },
        {
          id: generateId(),
          name: "Vegetable omelette",
          gram: 200,
          price: 3.25,
        },
        {
          id: generateId(),
          name: "Chocolate cake",
          gram: 100,
          price: 2.25,
        },
        {
          id: generateId(),
          name: "Cheese & tomato sandwich",
          gram: 120,
          price: 3.25,
        },
        {
          id: generateId(),
          name: "Burger",
          gram: 220,
          price: 2.90,
        },
        {
          id: generateId(),
          name: "Chicken sandwich",
          gram: 150,
          price: 3.50,
        },
        {
          id: generateId(),
          name: "Cheese omelette",
          gram: 210,
          price: 3.50,
        }
      ]
    },
    {
      id: "desserts",
      categoryName: "Desserts",
      items: [
        {
          id: generateId(),
          name: "Fruit salad and cream",
          gram: 130,
          price: 2.25,
        },
        {
          id: generateId(),
          name: "Ice cream",
          gram: 80,
          price: 2.00,
        },
        {
          id: generateId(),
          name: "Lemon cake",
          gram: 100,
          price: 2.25,
        },
        {
          id: generateId(),
          name: "Cheese & biscuits",
          gram: 160,
          price: 2.50,
        },
      ]
    },
    {
      id: "drinks",
      categoryName: "Drinks",
      items: [
        {
          id: generateId(),
          name: "Mineral water",
          gram: 200,
          price: 1.00,
        },
        {
          id: generateId(),
          name: "Fresh orange juice",
          gram: 200,
          price: 1.25,
        },
        {
          id: generateId(),
          name: "Soft drinks",
          gram: 200,
          price: 1.30,
        },
        {
          id: generateId(),
          name: "English tea",
          gram: 200,
          price: 0.90,
        },
        {
          id: generateId(),
          name: "Irish cream tea",
          gram: 200,
          price: 0.90,
        },
      ]
    }
  ]
};
export default function(state = initialState, action){
  switch(action.type){
    default: return state;
  }
}

function generateId() {
  return Math.random();
}
