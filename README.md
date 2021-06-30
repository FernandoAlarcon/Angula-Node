 # InfoServices
 This code are create for Fernando Alarcon - CRUD in Angular whit endpoints in Node 
 
 ### git clone
 
 start console, clone this repository, u need get in some files
 
 ## Charguer the databases
 start apache services, inside the folder `./database` u can find the databases in SQL languaje, u can use PHPMyadmind in XAMPP or WAMP or other gestor from MariaDB 
 
 ## modify the code (cd client - cd server)
inside `./client` execute `npm install` , also in the folder `./serve`, after in `./serve` u run `npm run dev` , and in `./client` run `ng serve` but, in this folder `./server` u need too other console for compilation of TypsScript, so when u start the third console inside `./server` u run `npm run watch` this comand help u with the compilation in TypeScript to JavaScript ,this option only if u need write more code
 
 ## execute app (cd client - cd serve)
 when u need start this app, u need use two consoles, first in `./cllient` and execute ng serve for compilation and execution of angular, so in the second console `./serve` execute `npm run dev`, now u can start use this app in `http://localhost:4200/`, the endpoints or the server app u can find in `http://localhost:3000/`
 
