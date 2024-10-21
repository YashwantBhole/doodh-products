import freshMilk from './assets/freshMilk.jpg'
import yogurt from './assets/Yogurt.jpg'
import paneer from './assets/paneer.jpg'
import butter from './assets/butter.jpg'
import lassi from './assets/lassi.jpg'
import curd from './assets/curd.jpg'

export  const products = [
  {
    id: 1,
    name: 'Fresh Milk',
    price: '₹50/Litre',
    image: freshMilk,
    description: 'Pure and fresh milk directly from local farms.',
    features: [
      'Rich in calcium and vitamins for strong bones.',
      'No preservatives or additives—just pure, wholesome goodness.',
      'Sourced from local farms ensuring freshness and quality.',
    ],
    manufacturingDate: '2024-10-15',
    expiryDate: '2024-10-18',
    farmerName: 'Vaibhav Dive',
    contact: '9730819494',
  },
  {
    id: 2,
    name: 'Organic Yogurt',
    price: '₹40/500g',
    image: yogurt,
    description: 'Creamy organic yogurt made from fresh milk.',
    features: [
      'Contains probiotics for a healthy gut.',
      'Perfect for breakfast or as a snack.',
      '100% organic and free from artificial flavors.',
    ],
    manufacturingDate: '2024-10-12',
    expiryDate: '2024-10-20',
    farmerName: 'Omkar Jadhav',
    contact: '9579888901',
  },
  {
    id: 3,
    name: 'Paneer (Cottage Cheese)',
    price: '₹200/kg',
    image: paneer,
    description: 'Soft, fresh paneer made from high-quality milk.',
    features: [
      'High in protein, perfect for a balanced diet.',
      'Versatile ingredient for various dishes—curries, salads, and snacks.',
      'Made using traditional methods for authentic taste.',
    ],
    manufacturingDate: '2024-10-14',
    expiryDate: '2024-10-21',
    farmerName: 'Kartik Gavale',
    contact: '8010037791',
  },
  {
    id: 8,
    name: 'Curd',
    price: '₹40/500g',
    image: curd,
    description: 'Thick and creamy curd made from fresh cow’s milk.',
    features: [
      'Excellent source of calcium and probiotics.',
      'Perfect for making raita, smoothies, or as a side dish.',
      'Natural fermentation process enhances flavor and health benefits.',
    ],
    manufacturingDate: '2024-10-13',
    expiryDate: '2024-10-19',
    farmerName: 'Rohit Sharma',
    contact: '8010037791',
  },
  {
    id: 5,
    name: 'Butter',
    price: '₹300/500g',
    image: butter,
    description: 'Rich, creamy butter made from organic milk.',
    features: [
      'Ideal for cooking, baking, and spreading.',
      'Made from fresh, organic milk for a superior taste.',
      'No artificial ingredients or preservatives added.',
    ],
    manufacturingDate: '2024-10-10',
    expiryDate: '2024-12-10',
    farmerName: 'Sunil Rathore',
    contact: '8010037791',
  },
  {
    id: 6,
    name: 'Lassi',
    price: '₹30/250ml',
    image: lassi,
    description: 'Refreshing, sweetened yogurt drink perfect for summers.',
    features: [
      'Cool and delicious, perfect for hot days.',
      'Rich in probiotics for digestive health.',
      'Enjoy as a drink or mix with fruits for a tasty smoothie.',
    ],
    manufacturingDate: '2024-10-11',
    expiryDate: '2024-10-16',
    farmerName: 'Vikram Mehta',
    contact: '8010037791',
  },  
    
    //   id: 7,
    //   name: 'Flavored Milk',
    //   price: '₹25/200ml',
    //   image: '/path/to/flavoredmilk.jpg',
    //   description: 'Delicious flavored milk in multiple varieties like chocolate and strawberry.',
    // },
    // {
    //   id: 4,
    //   name: 'ghee (clarified butter) ',
    //   price: '₹40/500g',
    //   image: '',
    //   description: 'Thick and creamy curd made from fresh cow’s milk.',
    // },
    // {
    //   id: 9,
    //   name: 'Kefir',
    //   price: '₹60/500ml',
    //   image: '/path/to/kefir.jpg',
    //   description: 'Probiotic-rich fermented milk drink, great for gut health.',
    // }
  ];
  