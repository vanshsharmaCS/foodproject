import React from "react";

const restrauntLists = [
    {
        "id": 1,
        "imageUrl": "https://source.unsplash.com/featured/?food,pizza",
        "discount": "40% OFF",
        "maxDiscount": "80",
        "proDiscount": "PRO extra 15% OFF",
        "deliveryTime": "39 mins",
        "placeName": "Pizza Hut",
        "speciality": "Italian, Fast Food, Beverages",
        "rating": "4.6",
        "pricePerPerson": "200 per one"
    },
    {
        "id": 2,
        "imageUrl": "https://source.unsplash.com/featured/?food,burger",
        "discount": "25% OFF",
        "maxDiscount": "50",
        "proDiscount": "Exclusive 10% OFF",
        "deliveryTime": "45 mins",
        "placeName": "Burger King",
        "speciality": "American, Fast Food",
        "rating": "4.4",
        "pricePerPerson": "150 per one"
    },
    {
        "id": 3,
        "imageUrl": "https://source.unsplash.com/featured/?food,tacos",
        "discount": "50% OFF",
        "maxDiscount": "100",
        "proDiscount": "Platinum 20% OFF",
        "deliveryTime": "30 mins",
        "placeName": "Taco Bell",
        "speciality": "Mexican, Fast Food",
        "rating": "4.8",
        "pricePerPerson": "180 per one"
    },
    {
        "id": 4,
        "imageUrl": "https://source.unsplash.com/featured/?food,sandwich",
        "discount": "35% OFF",
        "maxDiscount": "60",
        "proDiscount": "Gold 12% OFF",
        "deliveryTime": "50 mins",
        "placeName": "Subway",
        "speciality": "Sandwiches, Salads",
        "rating": "4.5",
        "pricePerPerson": "180 per one"
    },
    {
        "id": 5,
        "imageUrl": "https://source.unsplash.com/featured/?food,burger",
        "discount": "20% OFF",
        "maxDiscount": "30",
        "proDiscount": "Exclusive 5% OFF",
        "deliveryTime": "35 mins",
        "placeName": "McDonald's",
        "speciality": "Fast Food, Burgers",
        "rating": "4.7",
        "pricePerPerson": "160 per one"
    },
    {
        "id": 6,
        "imageUrl": "https://source.unsplash.com/featured/?food,chicken",
        "discount": "30% OFF",
        "maxDiscount": "70",
        "proDiscount": "Silver 10% OFF",
        "deliveryTime": "40 mins",
        "placeName": "KFC",
        "speciality": "Fast Food, Fried Chicken",
        "rating": "4.3",
        "pricePerPerson": "180 per one"
    },
    {
        "id": 7,
        "imageUrl": "https://source.unsplash.com/featured/?coffee",
        "discount": "15% OFF",
        "maxDiscount": "40",
        "proDiscount": "Exclusive 7% OFF",
        "deliveryTime": "55 mins",
        "placeName": "Starbucks",
        "speciality": "Coffee, Bakery",
        "rating": "4.9",
        "pricePerPerson": "250 per one"
    },
    {
        "id": 8,
        "imageUrl": "https://source.unsplash.com/featured/?food,pizza",
        "discount": "60% OFF",
        "maxDiscount": "120",
        "proDiscount": "Diamond 25% OFF",
        "deliveryTime": "25 mins",
        "placeName": "Dominos",
        "speciality": "Pizza, Fast Food",
        "rating": "4.7",
        "pricePerPerson": "220 per one"
    },
    {
        "id": 9,
        "imageUrl": "https://source.unsplash.com/featured/?food,burger",
        "discount": "20% OFF",
        "maxDiscount": "50",
        "proDiscount": "Exclusive 8% OFF",
        "deliveryTime": "45 mins",
        "placeName": "Wendy's",
        "speciality": "Fast Food, Burgers",
        "rating": "4.2",
        "pricePerPerson": "170 per one"
    },
    {
        "id": 10,
        "imageUrl": "https://source.unsplash.com/featured/?food,pizza",
        "discount": "45% OFF",
        "maxDiscount": "90",
        "proDiscount": "Gold 18% OFF",
        "deliveryTime": "35 mins",
        "placeName": "Papa John's",
        "speciality": "Pizza, Italian",
        "rating": "4.5",
        "pricePerPerson": "210 per one"
    },
    {
        "id": 11,
        "imageUrl": "https://source.unsplash.com/featured/?food,mexican",
        "discount": "10% OFF",
        "maxDiscount": "20",
        "proDiscount": "Exclusive 5% OFF",
        "deliveryTime": "50 mins",
        "placeName": "Chipotle",
        "speciality": "Mexican, Fast Food",
        "rating": "4.6",
        "pricePerPerson": "190 per one"
    },
    {
        "id": 12,
        "imageUrl": "https://source.unsplash.com/featured/?food,sandwich",
        "discount": "55% OFF",
        "maxDiscount": "110",
        "proDiscount": "Platinum 22% OFF",
        "deliveryTime": "30 mins",
        "placeName": "Panera Bread",
        "speciality": "Bakery, Sandwiches",
        "rating": "4.3",
        "pricePerPerson": "180 per one"
    },
    {
        "id": 13,
        "imageUrl": "https://source.unsplash.com/featured/?coffee",
        "discount": "35% OFF",
        "maxDiscount": "70",
        "proDiscount": "Silver 12% OFF",
        "deliveryTime": "40 mins",
        "placeName": "Tim Hortons",
        "speciality": "Coffee, Donuts",
        "rating": "4.8",
        "pricePerPerson": "160 per one"
    },
    {
        "id": 14,
        "imageUrl": "https://source.unsplash.com/featured/?donuts",
        "discount": "25% OFF",
        "maxDiscount": "40",
        "proDiscount": "Exclusive 10% OFF",
        "deliveryTime": "55 mins",
        "placeName": "Dunkin' Donuts",
        "speciality": "Donuts, Coffee",
        "rating": "4.4",
        "pricePerPerson": "170 per one"
    },
    {
        "id": 15,
        "imageUrl": "https://source.unsplash.com/featured/?food,burger",
        "discount": "65% OFF",
        "maxDiscount": "130",
        "proDiscount": "Diamond 30% OFF",
        "deliveryTime": "25 mins",
        "placeName": "Jack in the Box",
        "speciality": "Fast Food, Burgers",
        "rating": "4.6",
        "pricePerPerson": "200 per one"
    },
    {
        "id": 16,
        "imageUrl": "https://source.unsplash.com/featured/?food,dessert",
        "discount": "15% OFF",
        "maxDiscount": "30",
        "proDiscount": "Exclusive 8% OFF",
        "deliveryTime": "45 mins",
        "placeName": "Cinnabon",
        "speciality": "Bakery, Desserts",
        "rating": "4.2",
        "pricePerPerson": "160 per one"
    },
    {
        "id": 17,
        "imageUrl": "https://source.unsplash.com/featured/?food,burger",
        "discount": "50% OFF",
        "maxDiscount": "100",
        "proDiscount": "Gold 20% OFF",
        "deliveryTime": "35 mins",
        "placeName": "Carl's Jr.",
        "speciality": "Fast Food, Burgers",
        "rating": "4.5",
        "pricePerPerson": "180 per one"
    },
    {
        "id": 18,
        "imageUrl": "https://source.unsplash.com/featured/?food,burger",
        "discount": "20% OFF",
        "maxDiscount": "40",
        "proDiscount": "Exclusive 12% OFF",
        "deliveryTime": "50 mins",
        "placeName": "Five Guys",
        "speciality": "Fast Food, Burgers",
        "rating": "4.8",
        "pricePerPerson": "190 per one"
    },
    {
        "id": 19,
        "imageUrl": "https://source.unsplash.com/featured/?food,chinese",
        "discount": "40% OFF",
        "maxDiscount": "60",
        "proDiscount": "Silver 18% OFF",
        "deliveryTime": "30 mins",
        "placeName": "Panda Express",
        "speciality": "Chinese, Fast Food",
        "rating": "4.7",
        "pricePerPerson": "170 per one"
    },
    {
        "id": 20,
        "imageUrl": "https://source.unsplash.com/featured/?food,burger",
        "discount": "55% OFF",
        "maxDiscount": "110",
        "proDiscount": "Platinum 25% OFF",
        "deliveryTime": "40 mins",
        "placeName": "In-N-Out Burger",
        "speciality": "Fast Food, Burgers",
        "rating": "4.9",
        "pricePerPerson": "200 per one"
    },
    {
        "id": 21,
        "imageUrl": "https://source.unsplash.com/featured/?food,steak",
        "discount": "20% OFF",
        "maxDiscount": "30",
        "proDiscount": "Exclusive 5% OFF",
        "deliveryTime": "45 mins",
        "placeName": "Outback Steakhouse",
        "speciality": "Steakhouse",
        "rating": "4.6",
        "pricePerPerson": "250 per one"
      },
      {
        "id": 22,
        "imageUrl": "https://source.unsplash.com/featured/?food,salad",
        "discount": "15% OFF",
        "maxDiscount": "20",
        "proDiscount": "Exclusive 8% OFF",
        "deliveryTime": "30 mins",
        "placeName": "Sweetgreen",
        "speciality": "Salads, Healthy",
        "rating": "4.3",
        "pricePerPerson": "150 per one"
      },
      {
        "id": 23,
        "imageUrl": "https://source.unsplash.com/featured/?food,indian",
        "discount": "40% OFF",
        "maxDiscount": "80",
        "proDiscount": "Platinum 20% OFF",
        "deliveryTime": "35 mins",
        "placeName": "Taj Indian Cuisine",
        "speciality": "Indian, Curry",
        "rating": "4.8",
        "pricePerPerson": "180 per one"
      },
      {
        "id": 24,
        "imageUrl": "https://source.unsplash.com/featured/?food,pasta",
        "discount": "25% OFF",
        "maxDiscount": "50",
        "proDiscount": "Exclusive 10% OFF",
        "deliveryTime": "40 mins",
        "placeName": "Maggiano's Little Italy",
        "speciality": "Italian, Pasta",
        "rating": "4.4",
        "pricePerPerson": "200 per one"
      },
      {
        "id": 25,
        "imageUrl": "https://source.unsplash.com/featured/?food,ramen",
        "discount": "30% OFF",
        "maxDiscount": "40",
        "proDiscount": "Silver 12% OFF",
        "deliveryTime": "50 mins",
        "placeName": "Ramen Nagi",
        "speciality": "Japanese, Ramen",
        "rating": "4.7",
        "pricePerPerson": "180 per one"
      },
      {
        "id": 26,
        "imageUrl": "https://source.unsplash.com/featured/?food,burrito",
        "discount": "20% OFF",
        "maxDiscount": "30",
        "proDiscount": "Exclusive 8% OFF",
        "deliveryTime": "45 mins",
        "placeName": "Chipotle Mexican Grill",
        "speciality": "Mexican, Burritos",
        "rating": "4.5",
        "pricePerPerson": "160 per one"
      },
      {
        "id": 27,
        "imageUrl": "https://source.unsplash.com/featured/?food,sushi",
        "discount": "35% OFF",
        "maxDiscount": "60",
        "proDiscount": "Gold 15% OFF",
        "deliveryTime": "35 mins",
        "placeName": "Sushi King",
        "speciality": "Japanese, Sushi",
        "rating": "4.9",
        "pricePerPerson": "220 per one"
      },
      {
        "id": 28,
        "imageUrl": "https://source.unsplash.com/featured/?food,pizza",
        "discount": "50% OFF",
        "maxDiscount": "100",
        "proDiscount": "Diamond 25% OFF",
        "deliveryTime": "30 mins",
        "placeName": "California Pizza Kitchen",
        "speciality": "Pizza, Italian",
        "rating": "4.6",
        "pricePerPerson": "210 per one"
      },
      {
        "id": 29,
        "imageUrl": "https://source.unsplash.com/featured/?food,sandwich",
        "discount": "15% OFF",
        "maxDiscount": "30",
        "proDiscount": "Exclusive 8% OFF",
        "deliveryTime": "40 mins",
        "placeName": "Jimmy John's",
        "speciality": "Sandwiches",
        "rating": "4.3",
        "pricePerPerson": "170 per one"
      },
      {
        "id": 30,
        "imageUrl": "https://source.unsplash.com/featured/?food,burger",
        "discount": "25% OFF",
        "maxDiscount": "50",
        "proDiscount": "Silver 12% OFF",
        "deliveryTime": "45 mins",
        "placeName": "Shake Shack",
        "speciality": "Fast Food, Burgers",
        "rating": "4.7",
        "pricePerPerson": "190 per one"
      },
      {
        "id": 31,
        "imageUrl": "https://source.unsplash.com/featured/?food,italian",
        "discount": "40% OFF",
        "maxDiscount": "60",
        "proDiscount": "Gold 20% OFF",
        "deliveryTime": "35 mins",
        "placeName": "Olive Garden",
        "speciality": "Italian, Pasta",
        "rating": "4.8",
        "pricePerPerson": "220 per one"
      },
      {
        "id": 32,
        "imageUrl": "https://source.unsplash.com/featured/?food,burrito",
        "discount": "20% OFF",
        "maxDiscount": "30",
        "proDiscount": "Exclusive 10% OFF",
        "deliveryTime": "40 mins",
        "placeName": "Qdoba Mexican Grill",
        "speciality": "Mexican, Burritos",
        "rating": "4.5",
        "pricePerPerson": "180 per one"
      },
      {
        "id": 33,
        "imageUrl": "https://source.unsplash.com/featured/?food,pasta",
        "discount": "30% OFF",
        "maxDiscount": "40",
        "proDiscount": "Silver 12% OFF",
        "deliveryTime": "50 mins",
        "placeName": "Fazoli's",
        "speciality": "Italian, Pasta",
        "rating": "4.7",
        "pricePerPerson": "200 per one"
      },
      {
        "id": 34,
        "imageUrl": "https://source.unsplash.com/featured/?food,steak",
        "discount": "25% OFF",
        "maxDiscount": "50",
        "proDiscount": "Exclusive 10% OFF",
        "deliveryTime": "45 mins",
        "placeName": "LongHorn Steakhouse",
        "speciality": "Steakhouse",
        "rating": "4.4",
        "pricePerPerson": "250 per one"
      },
      {
        "id": 35,
        "imageUrl": "https://source.unsplash.com/featured/?food,sandwich",
        "discount": "20% OFF",
        "maxDiscount": "30",
        "proDiscount": "Exclusive 8% OFF",
        "deliveryTime": "40 mins",
        "placeName": "Potbelly Sandwich Shop",
        "speciality": "Sandwiches",
        "rating": "4.6",
        "pricePerPerson": "150 per one"
      },
      {
        "id": 36,
        "imageUrl": "https://source.unsplash.com/featured/?food,bbq",
        "discount": "35% OFF",
        "maxDiscount": "60",
        "proDiscount": "Gold 15% OFF",
        "deliveryTime": "35 mins",
        "placeName": "Famous Dave's",
        "speciality": "BBQ",
        "rating": "4.8",
        "pricePerPerson": "220 per one"
      },
      {
        "id": 37,
        "imageUrl": "https://source.unsplash.com/featured/?food,pizza",
        "discount": "30% OFF",
        "maxDiscount": "40",
        "proDiscount": "Exclusive 12% OFF",
        "deliveryTime": "50 mins",
        "placeName": "Papa Murphy's",
        "speciality": "Pizza, Takeout",
        "rating": "4.3",
        "pricePerPerson": "180 per one"
      },
      {
        "id": 38,
        "imageUrl": "https://source.unsplash.com/featured/?food,mexican",
        "discount": "25% OFF",
        "maxDiscount": "30",
        "proDiscount": "Silver 12% OFF",
        "deliveryTime": "45 mins",
        "placeName": "Taco John's",
        "speciality": "Mexican, Fast Food",
        "rating": "4.7",
        "pricePerPerson": "160 per one"
      },
      {
        "id": 39,
        "imageUrl": "https://source.unsplash.com/featured/?food,salad",
        "discount": "20% OFF",
        "maxDiscount": "40",
        "proDiscount": "Gold 10% OFF",
        "deliveryTime": "40 mins",
        "placeName": "Saladworks",
        "speciality": "Salads",
        "rating": "4.5",
        "pricePerPerson": "170 per one"
      },
      {
        "id": 40,
        "imageUrl": "https://source.unsplash.com/featured/?food,bbq",
        "discount": "15% OFF",
        "maxDiscount": "30",
        "proDiscount": "Exclusive 8% OFF",
        "deliveryTime": "35 mins",
        "placeName": "Dickey's Barbecue Pit",
        "speciality": "BBQ",
        "rating": "4.8",
        "pricePerPerson": "200 per one"
      },
      {
        "id": 41,
        "imageUrl": "https://source.unsplash.com/featured/?food,burger",
        "discount": "10% OFF",
        "maxDiscount": "20",
        "proDiscount": "Silver 5% OFF",
        "deliveryTime": "50 mins",
        "placeName": "Whataburger",
        "speciality": "Fast Food, Burgers",
        "rating": "4.4",
        "pricePerPerson": "190 per one"
      },
      {
        "id": 42,
        "imageUrl": "https://source.unsplash.com/featured/?food,pizza",
        "discount": "40% OFF",
        "maxDiscount": "60",
        "proDiscount": "Gold 20% OFF",
        "deliveryTime": "45 mins",
        "placeName": "Hungry Howie's Pizza",
        "speciality": "Pizza, Takeout",
        "rating": "4.9",
        "pricePerPerson": "210 per one"
      },
      {
        "id": 43,
        "imageUrl": "https://source.unsplash.com/featured/?food,italian",
        "discount": "35% OFF",
        "maxDiscount": "50",
        "proDiscount": "Diamond 25% OFF",
        "deliveryTime": "40 mins",
        "placeName": "Maggiano's Little Italy",
        "speciality": "Italian",
        "rating": "4.6",
        "pricePerPerson": "220 per one"
      },
      {
        "id": 44,
        "imageUrl": "https://source.unsplash.com/featured/?food,burrito",
        "discount": "20% OFF",
        "maxDiscount": "30",
        "proDiscount": "Exclusive 10% OFF",
        "deliveryTime": "35 mins",
        "placeName": "Taco Time",
        "speciality": "Mexican, Burritos",
        "rating": "4.3",
        "pricePerPerson": "180 per one"
      },
      {
        "id": 45,
        "imageUrl": "https://source.unsplash.com/featured/?food,sandwich",
        "discount": "15% OFF",
        "maxDiscount": "20",
        "proDiscount": "Exclusive 8% OFF",
        "deliveryTime": "40 mins",
        "placeName": "Firehouse Subs",
        "speciality": "Sandwiches",
        "rating": "4.7",
        "pricePerPerson": "170 per one"
      },
      {
        "id": 46,
        "imageUrl": "https://source.unsplash.com/featured/?food,sushi",
        "discount": "25% OFF",
        "maxDiscount": "40",
        "proDiscount": "Silver 12% OFF",
        "deliveryTime": "45 mins",
        "placeName": "Yoshinoya",
        "speciality": "Japanese, Sushi",
        "rating": "4.5",
        "pricePerPerson": "200 per one"
      },
      {
        "id": 47,
        "imageUrl": "https://source.unsplash.com/featured/?food,pasta",
        "discount": "20% OFF",
        "maxDiscount": "30",
        "proDiscount": "Exclusive 5% OFF",
        "deliveryTime": "50 mins",
        "placeName": "Carrabba's Italian Grill",
        "speciality": "Italian, Pasta",
        "rating": "4.8",
        "pricePerPerson": "190 per one"
      },
      {
        "id": 48,
        "imageUrl": "https://source.unsplash.com/featured/?food,burger",
        "discount": "30% OFF",
        "maxDiscount": "40",
        "proDiscount": "Gold 15% OFF",
        "deliveryTime": "35 mins",
        "placeName": "Fuddruckers",
        "speciality": "Fast Food, Burgers",
        "rating": "4.6",
        "pricePerPerson": "200 per one"
      },
      {
        "id": 49,
        "imageUrl": "https://source.unsplash.com/featured/?food,salad",
        "discount": "25% OFF",
        "maxDiscount": "30",
        "proDiscount": "Platinum 12% OFF",
        "deliveryTime": "40 mins",
        "placeName": "Chopt Creative Salad Co.",
        "speciality": "Salads",
        "rating": "4.3",
        "pricePerPerson": "160 per one"
      },
      {
        "id": 50,
        "imageUrl": "https://source.unsplash.com/featured/?food,steak",
        "discount": "40% OFF",
        "maxDiscount": "60",
        "proDiscount": "Diamond 20% OFF",
        "deliveryTime": "45 mins",
        "placeName": "Texas Roadhouse",
        "speciality": "Steakhouse",
        "rating": "4.7",
        "pricePerPerson": "250 per one"
      }
  ];

export default restrauntLists;