# notes-app
The only notes app you ever need 
The note organizer helps in storing notes as well as viewing, updated and deleted notes. User can filter notes based on categories, do search based on title and content also. Super handy right ?!

To run app locally, clone or download the repo. Open folder and run command "npm install"

Create a .env file in server folder.

#Server changes Create a .env file

add your mongodb url with new collection
add jwt secret
add port
#Client changes -- Open vite.config.js. Change the target url to localhost which you are currently running the server. eg: (http://localhost:5000)

#Guest Login -- email: testuser@mail.com, password: 11112222

That's it.

Live: https://notes-app-eight-tan.vercel.app/
