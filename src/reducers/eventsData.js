import image4 from "../components/Events/assets/event-charity.jpg";
import image2 from "../components/Events/assets/event-wine.jpg";
import image9 from "../components/Events/assets/event-live.jpg";
import image3 from "../components/Events/assets/event-buy-one.jpeg";
import image8 from "../components/Events/assets/event-theme.jpg";
import image1 from "../components/Events/assets/event-karaoke.jpg";
import image5 from "../components/Events/assets/event-comedy.jpg";
import image7 from "../components/Events/assets/event-happy.jpg";
import image6 from "../components/Events/assets/event-cooking.jpeg";

function generateId() {
  return Math.random();
}

export default [
  {
    id: generateId(),
    name: 'Charity Event',
    image: image4,
    description: "Join us. We attract locals with the promise of supporting a good cause. Money will be raised to support people with cancer.",
    price: 200,
    date: "2019-05-05",
    typeOfEvent: 'charity',
    ageGroup: 'adult',
  },
  {
    id: generateId(),
    name: 'Wine tasting',
    image: image2,
    description: 'You will turn out in droves for wine tastings. Whether it’s a party of friends, clients or even a date — the wine presentation ritual can be a nerve-wracking point in the meal. Learn how to handle it with the poise and assurance of an expert, chief restaurant critic Fion Batern and wine writer and sommelier Emily Olauren.',
    price: 80,
    date: "2019-05-30",
    typeOfEvent: 'workshop',
    ageGroup: 'adult',
  },
  {
    id: generateId(),
    name: 'Live music',
    image: image9,
    description: 'People love live bands playing music while dining at the restaurant. Even more so when it’s a local musician that they want to support. Consider booking local musicians, who are always looking for their next show, at least a couple times a week.',
    price: 150,
    date: "2019-05-20",
    typeOfEvent: 'concert',
    ageGroup: 'adult',
  },
  {
    id: generateId(),
    name: 'Buy one, get one',
    image: image3,
    description: 'Offer buy one get one free appetizers or desserts on your slowest night of the week. It’s a great way to save money and get an additional meal for somebody or for yourself.',
    price: 50,
    date: "2019-06-01",
    typeOfEvent: 'special-offer',
    ageGroup: 'adult',
  },
  {
    id: generateId(),
    name: 'Theme night',
    image: image8,
    description: 'Whether it’s 80’s, 90’s, Christmas, Halloween people love theme nights. Think of something fun and original that people can dress up for.',
    price: 90,
    date: "2019-05-08",
    typeOfEvent: 'special-offer',
    ageGroup: 'adult',
  },
  {
    id: generateId(),
    name: 'Karaoke',
    image: image1,
    description: 'A lot of restaurants and bars do karaoke. But we have a little more unique karaoke - a karaoke competition for an hour or two once a week with the winner getting their meal paid for.',
    price: 70,
    date: "2019-09-01",
    typeOfEvent: 'concert',
    ageGroup: 'adult',
  },
  {
    id: generateId(),
    name: 'Comedy night',
    image: image5,
    description: 'Host a local comedian to do some stand up. When people are laughing and happier, it makes us happy. Moreover, it prolongs a span of life.',
    price: 150,
    date: "2019-07-12",
    typeOfEvent: 'concert',
    ageGroup: 'adult',
  },
  {
    id: generateId(),
    name: 'Happy hour',
    image: image7,
    description: 'People leaving work are often looking for a place to go with their coworkers. It’s a great way to try something new and have an additional discount.',
    price: 60,
    date: "2019-06-04",
    typeOfEvent: 'special-offer',
    ageGroup: 'adult',
  },
  {
    id: generateId(),
    name: 'Cooking classes',
    image: image6,
    description: 'People love food, but they can’t eat at your restaurant every night. We host cooking classes and teach people how to make your dishes, present a cookbook to take home.',
    price: 180,
    date: "2019-04-15",
    typeOfEvent: 'workshop',
    ageGroup: 'children',
  },
];
