// Mock data for categories and providers
const categories = [
  "Sports",
  "Dance",
  "Music",
  "Art",
  "Fitness",
  "Technology",
  "Cooking",
  "Photography",
  "Education",
  "Health",
  "Business",
  "Travel"
];

// Image mapping for each category
const categoryImages = {
  Sports: [
    'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
    'https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg'
  ],
  Dance: [
    'https://images.pexels.com/photos/358010/pexels-photo-358010.jpeg',
    'https://images.pexels.com/photos/175658/pexels-photo-175658.jpeg'
  ],
  Music: [
    'https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg',
    'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg'
  ],
  Art: [
    'https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg',
    'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg'
  ],
  Fitness: [
    'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg',
    'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg'
  ],
  Technology: [
    'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg',
    'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg'
  ],
  Cooking: [
    'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg',
    'https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg'
  ],
  Photography: [
    'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg',
    'https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg'
  ],
  Education: [
    'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg',
    'https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg'
  ],
  Health: [
    'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg',
    'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg'
  ],
  Business: [
    'https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg',
    'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg'
  ],
  Travel: [
    'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg',
    'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg'
  ]
};

// Generate mock providers for each category
const generateProviders = (category) => {
  return [
    {
      id: `${category.toLowerCase()}-1`,
      name: `${category} Provider 1`,
      image: categoryImages[category][0]
    },
    {
      id: `${category.toLowerCase()}-2`,
      name: `${category} Provider 2`,
      image: categoryImages[category][1]
    }
  ];
};

// Create the complete data structure
const mockData = categories.map(category => ({
  id: category.toLowerCase(),
  name: category,
  providers: generateProviders(category)
}));

export { categories, mockData };
