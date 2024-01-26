It s a React-based web application that allows users to dynamically add and display fields based on their selected options. It utilizes ReactJS for the frontend and Redux for state management. The application is designed to provide a flexible and intuitive way of collecting information by allowing users to define their own input fields with validations.

Features


Dynamic Field Addition: Users can add a variety of input fields dynamically, such as text boxes, drop-downs, and date pickers.

Option-based Customization: The application supports different options (e.g., "Student," "Self-Employee," and "Business"), each allowing users to define specific input fields with validations.

Validation: Users can set validation rules for each field to ensure accurate and valid data entry.

Display Page: Added fields are displayed dynamically on a separate page based on the selected option.

Actions.js-The action.js file in this project serves a crucial role in managing state changes using the Redux library. It contains action creators, which are functions responsible for creating actions—plain JavaScript objects that describe changes to the application state.

Reducers.js-The reducers.js file plays a central role in managing the state of our application using Redux. It contains reducer functions, which are responsible for handling actions and updating the state accordingly.

Store.js-The store.js file is a crucial part of our application's architecture as it's responsible for creating and configuring the Redux store. The store is where the entire state of our application is held, and it plays a central role in managing state changes.

Addfields.js-The AddFields.js file is a React component that plays a crucial role in the dynamic generation and addition of fields in our application. It provides users with an interactive interface to define and add fields based on their selected options.

Displayfields.js-The DisplayFields.js file is a React component that plays a crucial role in rendering and displaying the dynamically added fields in our application. It provides users with a visual representation of the fields they've defined using the AddFields component.
