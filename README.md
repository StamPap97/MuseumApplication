# Εφαρμογή υποστήριξης αρχαιολογικού Μουσείου / Archaelogical Museum support application

Εφαρμογή υποστήριξης αρχαιολογικού Μουσείου με τεχνολογίες Express.js, MongoDB, HTML, CSS, Javascript, Bootstrap.

Archaelogical Museum support application using Express.js, MongoDB, HTML, CSS, Javascript, Bootstrap.

Link of git repository: https://github.com/StamPap97/MuseumApplication.

Url to Heroku: https://museumapplication.herokuapp.com/ (Carefull may have some problems with the functions of admin page)

Η εφαρμογή επίσης συνδέεται και σε cloud του Atlas, όπου βρίσκεται η βάση δεδομένων.

Τρέχει με `node appstart`(ή μπορείτε αν το τρέξετε με nodemon appstart) (δείτε τα αντίστοιχα script στο `packages.json`)
Αν τρέξετε την παραπάνω εντολή στο localhost και στην θύρα 3000 η 9999 θα μπορέσεται να χρησιμοποιήσετε την παραπάνω εφαρμογή.

Μπορείτε να έχετε πρόσβαση στις σελίδες του διαχειριστή, χρησημοποιώντας τον Username admin και για κωδικό 12345admin.

Runs with `npm run appstart` (see the scripts in `packages.json`)
## Λεπτομέρειες - Details

Το `appstart.js` ακολουθεί τη λογική MVC. Το πρόγραμμα μοιράζεται σε διάφορα τμήματα: 
 - `/models` παρέχει την πρόσβαση στη βάση δεδομένων
 - `/controllers` περιέχει συναρτήσεις για να έχουμε πρόσβαση στα δεδομένα που μας δίνουν τα models.
 - `/static` περιέχει αρχεία HTML, CSS, Javascript στους φακέλους `/html`,`/css`,`js`, αντίστοιχα. Συγκεκριμένα, στον φάκελο html μπορείτε να δείτε όλα τα αρχεία HTML, στο φάκελο css όλα τα αρχεία CSS, και στο φάκελο js όλα τα Javascript αρχεία, που έχουν να κάνουν με το front-end της εφαρμογής.
 - `/insertX` περιέχει τα αρχεία αρχικοποίησης της βάσης, όπου Χ: Coll, Events, Exhibits, Admin, Ticketzero, userzero.
 - Οι φάκελοι `views` και `routers`:
  - Ο `/views` περιέχει template γραμμένα σε handlebars. Συγκεκριμένα, περιέχονται τα template για τα events, για τα exhibits και για τα tickets, καθώς και το mainLayout.
  - Ο `/routers` περιέχει τις διαδρομές που αναγνωρίζει η εφαρμογή. Συγκεκριμένα, περιέχονται δρομολογητές για τα εκθέματα (ekthemata_router), για τις εκδηλώσεις (eventslist), για το εισιτήριο (ticket_router), για την αναζήτηση (searchRout), καθώς και για το χρήστη (user_router).

`appstart.js` follows the MVC pattern. The program is split in various components: 
- `/models` is responsible for access to the data (reading/writing).
- `/controllers` controlls the core logic of the program. It acts upon a request, uses the models to read/store data and to prepare the answer to the client.
- `/static` contains HTML, CSS, Javascript files in `/html`,`/css`,`js` folders respectively. More specifically, html folder contain all HTML files,css folder contains all CSS files, and js folder contains all Javascript files, that have to do with the front-end of the application.
- `/insertX` contains database initialization files, where Χ: Coll, Events, Exhibits, Admin, Ticketzero, userzero.
- `/views` contains the templates in handlebars language. More  specifically, there are routers for exhibits (ekthemata_router), for events (eventslist), for the ticket (ticket_router), for the search (searchRout), and for the user (user router)
- `/routers` contains the application's routes, i.e. the URI's it will respond to.
## Τα μοντέλα - The models
Ο φάκελος `/models` περιέχει έξι (6) μοντέλα

- `col_model`: Μοντέλο που περιέχει δεδομένα για τις συλλογές (collections),

- `events_model`: Μοντέλο που περιέχει δεδομένα για τις εκδηλώσεις (events),

- `model_admin`: Μοντέλο που περιέχει δεδομένα για τoυς administrators (admins),

- `model_exhibitions`: Μοντέλο που περιέχει δεδομένα για τα εκθέματα (exhibits),

- `ticket_model`: Μοντέλο που περιέχει δεδομένα για τα εισιτήρια (tickets),

- `user_model`: Μοντέλο που περιέχει δεδομένα για τον χρήστη (user).
## Οι controllers
Στο αρχείο `/controllers/eventsController` περιέχονται οι συναρτήσεις χειρισμού του μοντέλου των εκδηλώσεων.

Στο αρχείο `/controllers/exhibitsController` περιέχονται οι συναρτήσεις χειρισμού του μοντέλου των εκθεμάτων.

Στο αρχείο `/controllers/ticketsController` περιέχονται οι συναρτήσεις χειρισμού του μοντέλου των εισιτηρίων.

The Events controller is in file `/controllers/eventsController.js`.

The Exhibits controller is in file `/controllers/exhibitsController.js`.

The Exhibits controller is in file `/controllers/ticketsController.js`.
