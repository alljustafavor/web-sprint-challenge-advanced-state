[QUIZ SCREEN], Review how to write actions and action creators to describe state changes and how to write reducers to respond to actions and update state. Also review how to connect components to redux.      
      × [3] Navigating to the Quiz screen:                                                                
        - Loads the first question & answers , Review how to write asynchronous action creators to consume data from external API's                                                                                 
         (21 ms)                                                                                          
      × [4] Navigating to the Quiz screen:                                                                
        - The "Submit answer" button should be , Review how to conditionally disable a button element. (15 ms)                                                                                                      
      × [5] Selecting an answer adds the correct class name:                                              
        - Adds the "selected" class name to the selected answer                                           
        - Removes the "selected" class name from the other answer, Review setting class names and using data from state. (13 ms)                                                                                    
      × [6] Selecting an answer adds the correct text to its button:                                      
        - Changes the label of the button from "Select" to "SELECTED"                                     
        - Turns the label of the unselected from "SELECTED" to "Select", Review accessing and using data from state. (12 ms)                                                                                        
      × [7] Selecting and submitting an answer:                                                           
        - Loads the next quiz from the API, Review accessing and using data from state. (10 ms)           
      × [8] Selecting and submitting a correct answer:                                                    
        - Puts the proper success message at the top of the page, Review how to make axios requests and dispatch appropriate actions.                                                                               
         (10 ms)                                                                                          
      × [9] Selecting and submitting an incorrect answer:                                                 
        - Submitting puts the proper failure message at the top of the page,  Review how to connect components to redux, how to store and retrieve data from state, and dispatch the correct actions. (9 ms)        
    [FORM SCREEN]                                                                                         
      √ [10] Typing in inputs changes their , Review handling user input - onChange. (16 ms)              
      × [11] The submit button is disabled until all inputs have values more than one character
        in length after trimming leading and trailing whitespace, Review how to conditionally disable a button element.                                                                                             
     (8 ms)                                                                                               
      × [12] Successful submit of new quiz                                                                
        - Displays the correct success message at the top of the screen                                   
        - Empties out the form, Review using data from state and how to reset state.                      
     (182 ms)                                                                                             
      × [13] Successful submit of new quiz                                                                
        - Adds the quiz to the roster of quizzes,  Review how to use axios to make POST requests.         
     (184 ms)                                                                                             
    [APP STATE]                                                                                           
      √ [14] The state of the wheel survives route changes:                                               
        - Moving the wheel, navigating away and back, should keep the position of the "B", Review how to persist state using global state with redux.                                                               
     (20 ms)                                                                                              
      × [15] The state of the quiz survives route changes:                                                
        - Selecting an answer, navigating away and back, should keep the selected answer                  
        - Navigating away and back shouldn't cause a new quiz to be fetched from the API, Review how to persist state using global state with redux.                                                                
     (10 ms)                                                                                              
      × [16] The state of the form survives route changes                                                 
        - Filling out the form, navigating away and back, the entered data should ,  Review how to persist state using global state with redux.                                                                     
     (18 ms)                                      