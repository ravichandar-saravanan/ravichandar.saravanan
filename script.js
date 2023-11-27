let currentStep = 1;
let selectedMeals = [];
let numPeople = 0;
 
// Sample data (replace with actual data fetching logic)
const dishesData = {
        "dishes": [
          {
            "id": 1,
            "name": "Chicken Burger",
            "restaurant": "Mc Donalds",
            "availableMeals": ["lunch", "dinner"]
          },
          {
            "id": 2,
            "name": "Ham Burger",
            "restaurant": "Mc Donalds",
            "availableMeals": ["lunch", "dinner"]
          },
          {
            "id": 3,
            "name": "Cheese Burger",
            "restaurant": "Mc Donalds",
            "availableMeals": ["lunch", "dinner"]
          },
          {
            "id": 4,
            "name": "Fries",
            "restaurant": "Mc Donalds",
            "availableMeals": ["lunch", "dinner"]
          },
          {
            "id": 5,
            "name": "Egg Muffin",
            "restaurant": "Mc Donalds",
            "availableMeals": ["breakfast"]
          },
          {
            "id": 6,
            "name": "Burrito",
            "restaurant": "Taco Bell",
            "availableMeals": ["lunch", "dinner"]
          },
          {
            "id": 7,
            "name": "Tacos",
            "restaurant": "Taco Bell",
            "availableMeals": ["lunch", "dinner"]
          },
          {
            "id": 8,
            "name": "Quesadilla",
            "restaurant": "Taco Bell",
            "availableMeals": ["lunch", "dinner"]
          },
          {
            "id": 9,
            "name": "Steak",
            "restaurant": "BBQ Hut",
            "availableMeals": ["dinner"]
          },
          {
            "id": 10,
            "name": "Yakitori",
            "restaurant": "BBQ Hut",
            "availableMeals": ["dinner"]
          },
          {
            "id": 11,
            "name": "Nankotsu",
            "restaurant": "BBQ Hut",
            "availableMeals": ["dinner"]
          },
          {
            "id": 12,
            "name": "Piman",
            "restaurant": "BBQ Hut",
            "availableMeals": ["dinner"]
          },
          {
            "id": 13,
            "name": "Vegan Bento",
            "restaurant": "Vege Deli",
            "availableMeals": ["lunch"]
          },
          {
            "id": 14,
            "name": "Coleslaw Sandwich",
            "restaurant": "Vege Deli",
            "availableMeals": ["breakfast"]
          },
          {
            "id": 15,
            "name": "Grilled Sandwich",
            "restaurant": "Vege Deli",
            "availableMeals": ["breakfast"]
          },
          {
            "id": 16,
            "name": "Veg. Salad",
            "restaurant": "Vege Deli",
            "availableMeals": ["lunch", "dinner"]
          },
          {
            "id": 17,
            "name": "Fruit Salad",
            "restaurant": "Vege Deli",
            "availableMeals": ["lunch", "dinner"]
          },
          {
            "id": 18,
            "name": "Corn Soup",
            "restaurant": "Vege Deli",
            "availableMeals": ["lunch", "dinner"]
          },
          {
            "id": 19,
            "name": "Tomato Soup",
            "restaurant": "Vege Deli",
            "availableMeals": ["lunch", "dinner"]
          },
          {
            "id": 20,
            "name": "Minestrone Soup",
            "restaurant": "Vege Deli",
            "availableMeals": ["lunch", "dinner"]
          },
          {
            "id": 21,
            "name": "Pepperoni Pizza",
            "restaurant": "Pizzeria",
            "availableMeals": ["lunch", "dinner"]
          },
          {
            "id": 22,
            "name": "Pepperoni Pizza",
            "restaurant": "Pizzeria",
            "availableMeals": ["lunch", "dinner"]
          },
          {
            "id": 23,
            "name": "Hawaiian Pizza",
            "restaurant": "Pizzeria",
            "availableMeals": ["lunch", "dinner"]
          },
          {
            "id": 24,
            "name": "Seafood Pizza",
            "restaurant": "Pizzeria",
            "availableMeals": ["lunch", "dinner"]
          },
          {
            "id": 25,
            "name": "Deep Dish Pizza",
            "restaurant": "Pizzeria",
            "availableMeals": ["dinner"]
          },
          {
            "id": 26,
            "name": "Chow Mein",
            "restaurant": "Panda Express",
            "availableMeals": ["lunch", "dinner"]
          },
          {
            "id": 27,
            "name": "Mapo Tofu",
            "restaurant": "Panda Express",
            "availableMeals": ["lunch", "dinner"]
          },
          {
            "id": 28,
            "name": "Kung Pao",
            "restaurant": "Panda Express",
            "availableMeals": ["lunch", "dinner"]
          },
          {
            "id": 29,
            "name": "Wontons",
            "restaurant": "Panda Express",
            "availableMeals": ["lunch", "dinner"]
          },
          {
            "id": 30,
            "name": "Garlic Bread",
            "restaurant": "Olive Garden",
            "availableMeals": ["breakfast", "lunch", "dinner"]
          },
          {
            "id": 31,
            "name": "Ravioli",
            "restaurant": "Olive Garden",
            "availableMeals": ["lunch", "dinner"]
          },
          {
            "id": 32,
            "name": "Rigatoni Spaghetti",
            "restaurant": "Olive Garden",
            "availableMeals": ["lunch", "dinner"]
          },
          {
            "id": 33,
            "name": "Fettucine Pasta",
            "restaurant": "Olive Garden",
            "availableMeals": ["lunch", "dinner"]
          }
        ]
      };
 
// Function to fetch the JSON data
function fetchDishesData() {
    // In a real scenario, you might use fetch() or another method to get the data from a server
    return new Promise((resolve) => {
        resolve(dishesData);
    });
}
 
// Function to initialize the form
async function initializeForm() {
    // Fetch the dishes data
    const data = await fetchDishesData();
 
    // Store the dishes data for later use
    window.dishes = data.dishes;
 
    // Display the first step
    document.getElementById("step1").style.display = "block";
}
 
// Function to move to the next step
function nextStep() {
    if (validateStep()) {
        // Move to the next step
        document.getElementById(`step${currentStep}`).style.display = "none";
        currentStep++;
        document.getElementById(`step${currentStep}`).style.display = "block";
 
        // Dynamically generate content for each step
        generateStepContent();
    }
}
 
// Function to move to the previous step
function prevStep() {
    document.getElementById(`step${currentStep}`).style.display = "none";
    currentStep--;
    document.getElementById(`step${currentStep}`).style.display = "block";
 
    // Dynamically generate content for each step
    generateStepContent();
}
 
// Function to validate the current step
function validateStep() {
    if (currentStep === 1) {
        const mealCategory = document.getElementById("mealCategory").value;
        numPeople = parseInt(document.getElementById("numPeople").value);
 
        if (mealCategory && numPeople && numPeople >= 1 && numPeople <= 10) {
            clearErrors();
            return true;
        } else {
            displayError("Please  enter  number of people between 1 and 10.");
            return false;
        }
    } else if (currentStep === 2) {
        const selectedRestaurant = document.getElementById("restaurant").value;
 
        if (selectedRestaurant) {
            clearErrors();
            return true;
        } else {
            displayError("Please select a restaurant.");
            return false;
        }
    } 
    return true;
}
 
// Function to display error messages
function displayError(message) {
    const errorMessage = document.createElement("p");
    errorMessage.className = "error";
    errorMessage.textContent = message;
    document.getElementById(`step${currentStep}`).appendChild(errorMessage);
}
 
// Function to clear error messages
function clearErrors() {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(element => element.remove());
}
 
// Function to generate content for each step
function generateStepContent() {
    if (currentStep === 2) {
        // Step 2 content generation
        const uniqueRestaurants = [...new Set(window.dishes.map(dish => dish.restaurant))];
        const restaurantOptions = uniqueRestaurants.map(restaurant => `<option value="${restaurant}">${restaurant}</option>`).join('');
 
        document.getElementById("step2").innerHTML = `
            <h2>Step 2: Select Restaurant</h2>
            <label for="restaurant">Select Restaurant:</label>
            <select id="restaurant" required>
                ${restaurantOptions}
            </select>
            <br>
            <button onclick="prevStep()">Previous</button>
            <button onclick="nextStep()">Next</button>
        `;
    } else if (currentStep === 3) {
        step3();
      }else if (currentStep === 4) {
        // Step 4 content generation
        const reviewContent = `
            <h2>Step 4: Review Your Choices</h2>
            <p>Meal Category: ${selectedMeals.length > 0 ? selectedMeals[0].dish.availableMeals[0] : "Not selected"}</p>
            <p>Number of People: ${numPeople}</p>
            <p>Selected Restaurant: ${selectedMeals.length > 0 ? selectedMeals[0].dish.restaurant : "Not selected"}</p>
            <p>Selected Dishes:</p>
            <ul>
                ${selectedMeals.length > 0 ? selectedMeals.map(meal => `<li>${meal.dish.name} - ${meal.servings} serving(s)</li>`).join('') : "No dishes selected"}
            </ul>
            <br>
            <button onclick="prevStep()">Previous</button>
            <button onclick="submitForm()">Submit</button>
        `;
   
        document.getElementById("step4").innerHTML = reviewContent;
    }
   
}
 
function step3(){
  const selectedRestaurant = document.getElementById("restaurant").value;
          const restaurantDishes = window.dishes.filter(dish => dish.restaurant === selectedRestaurant);
      
          // Filter out dishes that have already been selected
          const availableDishes = restaurantDishes.filter(dish => !selectedMeals.some(meal => meal.dish.id === dish.id));
      
          const dishOptions = availableDishes.map(dish => `<option value="${dish.id}">${dish.name}</option>`).join('');
      
          document.getElementById("step3").innerHTML = `
              <h2>Step 3: Select Dish and Number of Servings</h2>
              <label for="dish">Select Dish:</label>
              <select id="dish" required>
                  ${dishOptions}
              </select>
              <br>
              <label for="numServings">Number of Servings:</label>
              <input type="number" id="numServings" min="1" value="1" required>
              <br>
              <button onclick="addDish()">Add Dish</button>
              <button onclick="prevStep()">Previous</button>
              <button onclick="nextStep()">Next</button>
          `;
}

function addDish() {
    const selectedDish = document.getElementById("dish");
    const numServings = document.getElementById("numServings");
 
    const dishId = parseInt(selectedDish.value);
    const selectedDishObject = window.dishes.find(dish => dish.id === dishId);
 
    const selectedMeal = {
        dish: selectedDishObject,
        servings: parseInt(numServings.value)
    };
 
    // Add the selected dish to the array
    selectedMeals.push(selectedMeal);
 
    // Optionally, you can reset the selected dish and servings inputs
    selectedDish.value = "";
    numServings.value = 1;

    step3();
}
 
 
// Function to submit the form (placeholder, replace with actual submission logic)
function submitForm() {
    alert("Form submitted successfully!");
}
 
// Initialize the form
initializeForm();