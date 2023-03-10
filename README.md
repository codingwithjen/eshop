# Fake eShop - Capstone 2

### Live Demo/Deployed Web App

- [Frontend Deployed Here](https://fake-eshop-client.netlify.app/)
- [Backend Server Deployed on Heroku](https://fake-eshop-backend.herokuapp.com/api/products)


# Description



How often did you find yourself doing much more online shopping over the past 3 years? As the COVID-19 pandemic reshapes our world, more consumers have begun shopping online in greater numbers and frequency, including myself! For my Capstone #2 project, I decided to build a very simple eCommerce web application using React, Redux, Node & Express, and MongoDB. I took the idea from helping friends and family get their Shopify websites up and going from the many hobbies we all picked up on from arts and crafts and to drop shipping. From playing around with Shopify, it inspired my own Fake eShop where I sell the most random, bizarre things, from Corgi puppies to apparel and… limes? It won’t be the next Shopify, but hopefully it will serve as a fun and creative way to demonstrate how well-suited React is to building dynamic and engaging user interfaces. No external API used. I was able to create and connect my own database to the frontend using RESTFUL API principles.

### Initial Project Proposal
[Capstone #2 Proposal Docs](https://github.com/codingwithjen/eshop/tree/main/proposal-docs)

### Initial Database Schema

![Design Schema](/proposal-docs/schema.png)

# Features



- Look alike Shopify home front of products for sale displayed
- Product list, product detail, and product cards with pricing, image, description, quantity, and user reviews
- Register to proceed with cart/fake purchase orders + order status, and for registered users to commit fake reviews on each product “purchased”
- Saved cart items per user displaying purchase total and quantity total

# Run Locally



1. Clone project

```markdown
git clone https://github.com/codingwithjen/eshop
```

1. Go to the project directory

```markdown
cd eshop
```

1. Go to `server` directory and install dependencies

```markdown
cd server
npm install
npm run
```

1. Go to `client` directory and install dependencies

```markdown
cd ..
cd server
npm install
npm run
```

## MongoDB

1. Sign up for an account here: [https://www.mongodb.com/](https://www.mongodb.com/)
2. Create new project and before clicking on “Create Cluster” rename cluster to `eshop` and finalize creation
3. Left hand side click on `Database Access` and Add New Database User
4. Create credentials and remember your password because you will need to add it in a `.env` file
5. Before clicking Add User, add a Built-in Role first and select `Atlas Admin`
6. Under Deployment, click on Database and click on `Connect` once you see the new cluster/project made
7. Click on Connect your application and copy the application code and put code in your `.env` file. Remember to add the password in the `<password>` field

- To test out the connection, I sent imports from Postman

## .env example

You can replace my environment variables with your own, or use examples below

```markdown
PORT=1000
NODE_ENV=development
JWT_SECRET=eshop1234
PAYPAL_CLIENT_ID=<your-paypal-client-id-here>
MONGO_URL=mongodb+srv://admin:<password>@eshop.o791lg3.mongodb.net/<put-cluster-name-here>?retryWrites=true&w=majority
```

# Screenshots
The homepage
![Homepage Screenshot](/images/homepage.png)

The product details page
![Product Detail](/images/productDetail.png)

User's profile/dashboard view
![User Dashboard/Profile](/images/userprofile.png)

User's cart summary
![Cart Summary](/images/cartsummary.png)

Order confirmation page after "checkout"
![Order Confirmation](/images/orderconf.png)

User's order details and status
![Order Details](/images/orderlist.png)



****************Interested in playing around with the demo? Use admin credentials below:****************

- ********************************************Email Address:******************************************** `admin@example.com`
- ********************Password:******************** `123456`

# Tech Stack



- ReactJS
- NodeJS
- ExpressJS
- Mongoose
- Redux
- Bcrypt
- JWTs in Local Storage
- Bootstrap
- Debugged using Jest, & via Chrome, Redux Dev Tools, and tested API via Postman

You will find each version used in each `package.json` file for both the **********server********** AND **********client********** directories

# Stretch Goals



Here’s a list of my stretch goals while building this application. I do intend on adding more to the eShop website and I plan on constantly updating goals as provided by my mentor or myself:

- [x]  Fake payment through "third-party" aka, PayPal or Credit Card
- [x]  Fake order confirmation or orders page
- [x]  Fake customer reviews
- [ ]  Admin to fulfill order status to paid, or in progress...
- [ ]  Or Stripe Payment feature
- [ ]  Admin access to edit or add products, or edit/add users in the database
- [ ]  Pagination to sale items, new arrivals, etc.
- [ ]  Verification for new registered users and reset password via email reset only
- [ ]  I want to eventually put this on Docker instead of having to run it via installing dependencies
- [ ]  Out of stock when a user fakes checkout

# IB
- [irenemmassy](https://github.com/irenemmassy_)
- [Pedro-Freddi](https://github.com/Predro=Freddi)
- [dhatGuy](https://github.com/dhatGuy)