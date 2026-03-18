console.log("Hello World!");

// 1. Create an array called favoriteFoods with at least 6 foods you love.
let favoriteFoods = ["Hot Wings", "Chicken Alfredo", "Nachos", "Pancakes", "Steak", "Fries"];


// 2. Loop through the list and print: "One of my favorite foods is ______."
for (let i = 0; i < favoriteFoods.length; i++) {
    console.log("One of my favorite foods is " + favoriteFoods[i] + ".");
}


// 3. Print out the ranking
for (let i = 0; i < favoriteFoods.length; i++) {
    console.log("My #" + (i + 1) + " favorite food is " + favoriteFoods[i]);
}


// 4a. Create a function
function printFoodRecommendation(foodName) {
    console.log("Have you ever tried " + foodName + "?");
    console.log("I always recommend " + foodName + " to friends.");
    console.log("Trust me — " + foodName + " is delicious.");
}


// 4b. Call the function at least 3 times
printFoodRecommendation("Nachos");
printFoodRecommendation("Steak");
printFoodRecommendation("Pancakes");


// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
  ];


// 5. Print foods that have an "a" in the name
console.log("Foods with 'a':");
for (let i = 0; i < friendFavorites.length; i++) {
    if (friendFavorites[i].toLowerCase().includes("a")) {
        console.log(friendFavorites[i]);
    }
}


// 6. Store result in foodsWithA
let foodsWithA = [];

for (let i = 0; i < friendFavorites.length; i++) {
    if (friendFavorites[i].toLowerCase().includes("a")) {
        foodsWithA.push(friendFavorites[i]);
    }
}

console.log("Foods with A array:");
console.log(foodsWithA);


// 7. Foods longer than 6 characters
let longFoodNames = [];

for (let i = 0; i < friendFavorites.length; i++) {
    if (friendFavorites[i].length > 6) {
        longFoodNames.push(friendFavorites[i]);
    }
}


// 8. Foods 6 characters or shorter
let shortFoodNames = [];

for (let i = 0; i < friendFavorites.length; i++) {
    if (friendFavorites[i].length <= 6) {
        shortFoodNames.push(friendFavorites[i]);
    }
}


// 9. Print and compare
console.log("Long food names:");
console.log(longFoodNames);

console.log("Short food names:");
console.log(shortFoodNames);

if (longFoodNames.length > shortFoodNames.length) {
    console.log("There are more long-named foods.");
} else {
    console.log("There are more short-named foods.");
}


// 10. Find the longest food name
let longestFood = "";

for (let i = 0; i < friendFavorites.length; i++) {
    if (friendFavorites[i].length > longestFood.length) {
        longestFood = friendFavorites[i];
    }
}

console.log("The longest food name in the list is " + longestFood + " with " + longestFood.length + " characters.");
