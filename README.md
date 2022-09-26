# NASA AI Search Engine 
<br>

- ### Introduction 
    
    - #### What is This Project about?

        - it,s a search engine for NASA SPACE API Data.

    - #### What is it solve?

        - it solves the problem of reaching general or specific data of NASA API data Which are distributed on different EndPoints and makes it easier to get the expected result.


    - #### How it is solved?

        - By caching Data from NASA API Data and Searching inside it Using A Well Designed & Coded Solution.
     
    - #### more info about solution ?
        1) On the Beginning The Application Collecting The Data from Nasa Api EndPoints and store it as Cached Data because the Application will renew Fetching Data Every 1 Hour to get any New Data Updated on the API EndPoints.

        2) Second , The Application Use  Our Searching Algorithm for Searching Inside This Cached Data Useing filtering methods and the Flexibility of Searching inside Organized , Structured Data Or Unorganized , Unstructured Data , To Get the expected Search Result.
<br>

- ### How To Use NASA AI Search Engine Api ?
    - #### by endpoint : 
        - /api/?query=search&page=number
        example: /api/?query=sun&page=1
        <br>  
        - /api/media/:media_type?query=search
            example: /api/media/images?query=earth
            example: /api/media/videos?query=earth            

- ### Deployment 
    - #### from your terminal run :
        - ``` npm run start``` 


- Deployment on  (Onrender) Service:  https://nasa-ai-search.onrender.com/
