
# Test Data Explorer

## Requirements
The AI team needs a new tool to visualize their apple dataset to make sure the data is clean
before training our deep learning model. This tool will need to be able to allow the AI team to:
* View images of their dataset
* Scroll through the dataset and **analyze** the images
* Group images in a dataset
  * Good Images
  * Bad Images

* Show metrics and **insights** from the dataset in a formatted view for:
  * Total number of images
  * Number of good images
  * Number of bad images
  * Graph breakdown of good and bad images in total images

To acomplish the functionaltiy grouped the requirements into two pages:
* Analyze
  * I used a Google Colab workspace to get some data on the pictures using the ImageIO python package
  * That data was turned into a JSON dataset that could be read by the Mocked API functions
  * As you select a image, the data for that image will show on the right side.
  * You can also filter images by good and bad
* Insights
  * This is a dashboard page
  * I utilized Recharts npm package for the bar chart


## Implementation
Implement features above using React with Typescript. Mock the API schema that you came up
with in the previous question in React application memory and use it in the React app.

Mocked API function calls are in the `src/api` folder

Documentation used:
* [Material Ui](https://mui.com)
* [Typescript Handbook](https://www.typescriptlang.org/docs/handbook/)
* [Recharts] (https://recharts.org/en-US/api)
* [imageio] (https://imageio.readthedocs.io/en/v2.8.0/devapi.html)

### Run Locally

#### `npm install`

Install project dependencies.

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Trade offs
1. While we are working on a smaller dataset some of the Mocked API calls could have been computed on the client side with the data. I wanted to this to be scalable for a larger dataset. That is why I had the server handle certian calls.
2. Right now this only works with one dataset. I would have loved to make a more extensable app that would work with any labled Good vs Bad image data set. In the interest of time, I did not make that choice.
3. Working with Material UI or any component library can have limitations. While it was easy to set up a theme to style the app as a whole. When you want to use one of their componets, you are limited in the styling of it. I thought it was a good choice to get this project off the ground fast.
4. 2 tab design - When I first looked at the requrirements I was thinking how to fit everything on to one page. While that may be easier for the user to have everything in one spot, I saw a clear division in the requirements. This helped organize the different usecases for the data exploration.

## Constraints
1. Typescript Knowledge - I have never worked with Typscript in a professional setting, only Javascript. I probably did not use it to its full potential but I did enjoy working with it through out this project. I am used to OOP on the backend and the typehinting/checks are very helpful.
2. CSS is my weak point when it comes to frontend. I relied heavily on  Material UI to help me get over this hurdle.
3. Time - If I had more time I would have made the app more responsive. I would have loved to add more pagination as well for larger data sets.
4. Design - While I am a fullstack engineer, I am stronger on the backend. The times I have done frontend, I had a mock up from a designer. I enjoyed the challange of coming up with the deisgn though because its something I never had to do. I had to think in a different way.
5. Just a laptop - I just moved to San Diego and I am in temporary housing. I don't have my full desk set up. I did the whole project with just my 14inch Macbook.