1. Desse, Kinfemichael,
   &nbsp; &nbsp; Matriculation no. 00813759
2. Sufiya, Afzal
   &nbsp; &nbsp; Matriculation no. 22108480

# University Classifieds App

[Link to the repository](https://mygit.th-deg.de/as05480/mitws2223)

# Project Description

The Technische Hochschule Deggendorf is a university of applied sciences in Deggendorf , Lower Bavaria , with around 8,000 students (as of winter semester 2020/21). For advertisement of their own sell/giveaway offers, a portal for classifieds is our idea of this project. Using this portal students, teaching faculties and other staff members of university can post their second hand/used stuff to sell/giveaway.

## Stakeholders 

* Anyone who is a part of Technische Hoschule Deggendorf community can be a registered user of the platform

## From Request to Requirements
| RequestId       | Requirement                                               | RequirementId | State    |
|-----------------|-----------------------------------------------------------|---------------|----------|
| rt1             | Must be a Mean Stack App completely written in TypeScript | rq1           | accepted | 
| rt2             | Backend must use Expressjs and MongoDb                    | rq2           | accepted |
| rt3             | It must be easy to configure and extend                   | rq3           | accepted |
| rt4             | User friendly maintenance in the backend                  | rq4           | accepted |
| rt5             | Must apply corporate identity of the THD/DIT              | rq5           | accepted |
| rt6             | It must be multilingual                                   | rq6           | accepted | 
| rt7             | Must use Bootstrap or Material Design                     | rq7           | accepted |
| rt8             | Must be responsive                                        | rq8           | accepted | 
| rt9             | it must be separated into registered and guest user areas | rq9           | accepted |
| rt10            | It must use MongoDab                                      | rq10          | accepted |
| rt11            | it must have real-time chat functionality using socket.io | rq11          | accepted |
| rt12 (optional) | There can be a search functionality                       | rq12          | accepted |

## Implementation Description of The Request
1. <u> rt1, rt2: </u>
The application is written using the MEAN Stack:
* In the backend we set up the app following a MVC pattern using `expressjs typescript library` for managing the server requests and routing
* For the database we have used MongoDb using the object document mapper (ODM) of mongodb, `mongoose`. we have used the typescript library of mongoose, to create db, schemas, perform crud operations.
* The frontend app is written completely using `Angular 14`.
2. <u>rt3, rt4: </u> The app is written following scalable programming manner. any functionality can be extended without affecting the basic functionality of the app.
3. <u>rt5: </u> We have used the corporate identity in the design
* We have used the thd-donau-blau color identity for the header, footer, and primary-color of the button
* We have used the given text-size, line-height, and colors whenever the need arises in the design
* We have incorporated the logo of the THD in our UI design.
* see [Project Demo](#project-demo)
4. <u>rt6: </u> The app allows users to change language while surfing the platform. (Supported languages: English and German.)
5. <u>rt7: </u> We have used material design components in some parts of our design. The theme of the app is made using the material design components.
6. <u>rt8:  </u> We have implemented the app in a way it is possible to browse without anything braking using different sizes
Using the media query functionality of css(we have used scss preprocessor) the app supports, tablet-view, wide-tablet-view, Desktop, mobile, and large screen view
* see [Project Demo](#project-demo---mobile-view)
7. <u>rt9: </u> We have implemented three different areas of access
* `Scenario 1:` Guest users can parse through the offers without any login
* `Scenario 2:` Registered users can parth through offers, chat with other registered users, create offers, bid on offers edit their profile, update their offers, delete their offers
* `Scenario 3:` Users with admin right can access the admin page of the platform.
8. <u>rt11: </u> Using `socket.io typescript` library we have implemented real-time chatting functionality
9. <u>rt12: </u> Users can search for a specific product using a key word.

# prerequisite

- node v4+
- angular cli

# Code base and structure

The root project follewed mvc design pattern. All the backend filles are defined in the src directory.

> `Routes` directory holds all the required routes and paths

> `Controllers` directory includes all the classes defined to interact with database and the view

> `Models` directory holds all the schema definations of the application

> the front end angular app resides in the `views` directory

> Once the front end app is build the build is configured to be passed to the `public` directory. This directory holds all the static files. The application is set up in a way it is possible to run the whol app from one server instead of running the backend and the front end in two seprate server. Of course during the development phase we have to run the frontend angular app on a separate folder.

> Finally, the `config` directory holds necessary configuratyions. including databse connection, authentication configuration and file storage configuration.

> necessary environmental variables are defined in the `.env` file.

# Directory structure

\
&nbsp;&nbsp;<img width="416" alt="Screenshot 2022-11-12 at 22 08 04" src="https://user-images.githubusercontent.com/44194230/201494622-2f5ef58d-c6af-4cf5-86f4-cd879c2c86dd.png">&nbsp;

# Installation

- first clone the repository

- copy `.env.example` to `.env` and add the required environment variables

``` 
 $ cp .env.example .env
```

- to install all the required packages and dependencies

```
$ npm install
```

- to build the app

```
$ npm run build
```

- to run the app
```allykeynamelanguage
$ npm run start
```

- to run the front-end app individually and configure, run the angular app

```
$ cd src/views
```

```allykeynamelanguage
$ ng serve
```

- to build the angular app run
```allykeynamelanguage
$ ng build
```

The command above will compile the app into `src/public` directory.

# Basic Usage

Users can view the posts from other users without login. To send a mesasge or post own offer, user needs to login/register on the portal. There are different categories for different products. User can use filter as well to sort out the ads as per requirement.

# Use cases

1. Parsing through available offers for a specific item. (no login needed)
* `Scenario 1:` unregistered user navigate to the homepage of the app and offers are available.
- can parse through pages of offers
- navigate to login page
- navigate to register page
- filter the offers using category
- filter the offers using price 
- search for offers using a key word

2. Users can search for item or filter the offers based on categories and or prices (no login needed)
- user navigate to the dashboard
- click onn the specific category from the carousel - available products on the specific category will beshown
- clicked on the specific category checkbox from the sidebar of the app - available products from the specific category will be shown
- clicked on the price filter checkbox from the sidebar - available products in the chosen price bound will be shown.
- user navigates to the navbar and entered a keyword on the search bar - offers matching the keyword will be shown.
3. users can register on the portal and become a member. to register users need a valid email address. on the database users name email and hashed password will be saved.
* `Scenario: ` Unregistered user clicked on the register menu from the navbar: 
- user need to enter a name
- user need to enter a valid email
- user need to enter password
- password must match
- if register is successful "register is successful " message will be shown
- user redirects to login page.
4. registered users can login
- user enters registered email
- user enters a valid password
- if password matches "Login successful " message will be shown.
- user redirects to homepage
- navbar menus will be changed
- profile menu will be available
- logout menu will be available
- messages menu will be available.
5. registered users can create an offer, edit their offer and delete their offer.
* `Scenario 1:` User clicks on 'Create Offer' button
- If user is not logged in, user will be redirected to login page.
* `Scenario 2:` user is logged in
- User will be redirected to create offer page
- user uploads offer image - optional
- user enters title of the offer - used for keyword search
- user chooses category
- user enters proposed price
- user enters description of the offer
- user saves the offer
- save offer success. user will be redirected to homepage. 
- offer will be shown on the homepage
* `Scenario 3`: User clicks on the available offer from the homepage.
- if user logged in and created the offer
- user will be redirected to edit offer page
- user can update the information
- user can change the picture
- user can upload more pictures
- user can edit the input fields
- user saved the update
- user will be redirected to the home page.
6. registered users can send private messages to another registered user
* `Scenario 1:` User is not logged in and clicks on the specific offer from homepage
- user will be redirected to login page.
* `Scenario 2: ` User is logged in and clicks on the offer posted by another user
- user will be redirected view single offer page
- user can parse through posted image
- user can see the proposed price
- user can read the description of the offer
- user can send a private message to the seller
7. registered users can edit their profile which includes changing profile picture, updating passwords and name
* `Scenario: ` User is logged in
- user can see profile menu on the navbar
- user can click on the profile menu
- user will be redirected to the profile page
- user can see the profile picture
- user can see the name saved on database
- user can see offers posted by him/her/them
- user can edit profile picture
- user can edit their display name
- user can update password
- user can edit offer
- user can delete offer
- user can delete their profile.
* `Scenario: ` User is logged in and have admin role
- user will see change to admin in their profile
- user can click the button
- user will be redirected to admin page
- admin can change the role of other users
- admin can remove malicious posts
- admin can read issue reports by other users to the admin
- admin sees reports of offer in a chart
8. chatting with admin.
- user navigates to the homepage
- user can click on contact admin button
- user submits reports
- admin recieves a report by a user 
9. once sold users can mark their offer sold. sold items will be deleted from the portal
10. users can change the language to German or English
* `Scenario` user selected English from the language selector
- Static texts will be changed into english
* `Scenario` user selected German from the language selector
- Static text contents will be changed to German.

## Use case diagram
![Screenshot 2023-01-26 at 09 07 26](https://user-images.githubusercontent.com/44194230/214786235-e4077bb2-b5f3-4507-a350-c8475f35f36d.png)

# Work distribution

| **Kinfemichael Desse**                                                 |
|------------------------------------------------------------------------|
| Implement offer creation page for User                                 |
| Implement Dashboard User Interface with product categories             |
| Create a page for user to make changes on offer                        |
| Implement messaging chat section for User to contact with other seller |
| Implement Admin Page UI with different functionalities                 |
| Implement mobile view                                                  |

| **Afzal Sufiya**                                                      |
|-----------------------------------------------------------------------|
| Implement login and register page for User                            |
| Create User profile page for User with different functionalities      |
| Implement contact page UI for User                                    |
| Create Forgot Password page for User and connect it with SMTP service |
| Implement german language translation                                 |

# Project Demo

\
<img width="1496" alt="Screenshot 2023-01-12 at 13 40 40" src="https://user-images.githubusercontent.com/44194230/212068947-fe19c4c9-d229-48b5-8040-14d86f9e55fe.png">

<img width="1497" alt="Screenshot 2023-01-12 at 13 41 19" src="https://user-images.githubusercontent.com/44194230/212069050-4aac1450-2fa2-465d-9b2f-dd47f9857d8d.png">

<img width="1496" alt="Screenshot 2023-01-12 at 13 42 01" src="https://user-images.githubusercontent.com/44194230/212069185-117390a4-cf3f-49bd-adb3-ba6c6188674e.png">

<img width="1498" alt="Screenshot 2023-01-12 at 13 42 34" src="https://user-images.githubusercontent.com/44194230/212069321-925d3034-3a98-449f-a335-2f6ee341138c.png">

<img width="1497" alt="Screenshot 2023-01-12 at 13 43 25" src="https://user-images.githubusercontent.com/44194230/212069465-36cbba05-5c28-44cc-b31e-732385930d7b.png">

<img width="1506" alt="Screenshot 2023-01-12 at 13 44 07" src="https://user-images.githubusercontent.com/44194230/212069596-40318290-6d5c-4699-8ef6-a230088f8684.png">

<img width="761" alt="Screenshot 2023-01-12 at 13 45 25" src="https://user-images.githubusercontent.com/44194230/212069831-bba59a48-60aa-45fc-a874-87c08d885c3f.png">

<img width="1508" alt="Screenshot 2023-01-12 at 13 47 54" src="https://user-images.githubusercontent.com/44194230/212070315-2f1ee8d2-ef80-46b0-ad58-e7856e05f30e.png">

<img width="1491" alt="Screenshot 2023-01-12 at 13 48 38" src="https://user-images.githubusercontent.com/44194230/212070452-a6393b37-99f3-40d9-8bf2-2f276bbdad01.png">


<img width="1492" alt="Screenshot 2023-01-12 at 13 49 16" src="https://user-images.githubusercontent.com/44194230/212070567-4f778d6c-e47d-4022-b998-009b5975bd2a.png">

<img width="756" alt="Screenshot 2023-01-12 at 13 50 10" src="https://user-images.githubusercontent.com/44194230/212070771-13cfb594-9230-43b9-a7bb-509f4b07016d.png">

<img width="1497" alt="Screenshot 2023-01-12 at 13 50 37" src="https://user-images.githubusercontent.com/44194230/212070855-cf2e1bbb-90ee-4d68-8098-4a2b995a6705.png">



# Project Demo - Mobile View
\
<img width="585" alt="Screenshot 2023-01-12 at 13 51 47" src="https://user-images.githubusercontent.com/44194230/212071087-1b602631-5382-4e0d-a99d-20751d963b2e.png">
ontent.com/44194230/212070855-cf2e1bbb-90ee-4d68-8098-4a2b995a6705.png">


<img width="605" alt="Screenshot 2023-01-12 at 13 52 50" src="https://user-images.githubusercontent.com/44194230/212071277-43c174df-7636-4a9c-9bb6-8644724df90d.png">


<img width="594" alt="Screenshot 2023-01-12 at 13 53 16" src="https://user-images.githubusercontent.com/44194230/212071386-1b5d6d4f-d92d-48b3-949d-9f2d6b8df5f6.png">
