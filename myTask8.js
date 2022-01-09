//1. Practice/Movie.md

class Movie{
  constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
  }
  

}
// task a
const mov1 = new Movie("Annathe", "AVM", "PG13");
console.log(mov1.title + ", " + mov1.studio + ", " + mov1.rating);

// task b
const mov2 = new Movie("Viswasam", "GHJGJ");
console.log(mov2.rating);// here mov2.rating refers default value "PG"

// task c
class MovieC {
  constructor(
  title = 'OM Sakthi',
  studio = 'AVM Studio',
  ratings = 'PG'
  ) {
      this.title = title;
      this.studio = studio;
      this.ratings = ratings;
    }
    
    getPG(movies) {

      var pgratingS = movies.filter(MovieCItem => MovieCItem.ratings === "PG");
      return pgratingS;
      }
}

let movc1 = new MovieC('Name1','Studio1','PG');
let movc2 = new MovieC('Name2','Studio2','AB');
let movc3 = new MovieC('Name3','Studio3','PG');
let movc4 = new MovieC('Name4','Studio4','XY');
let movc5 = new MovieC('Name5','Studio5','PG');

let movTemp = new MovieC();
let movies = [];
movies.push(movc1);
movies.push(movc2);
movies.push(movc3);
movies.push(movc4);
movies.push(movc5);

console.log(movTemp.getPG(movies));

// task d
class MovieD{
  constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
  }

}

const movie_Instance = new MovieD("Casino Royale", "Eon Productions", "PG13");
console.log(movie_Instance);
//console.log(movie_Instance.title + ", " + movie_Instance.studio + ", " + movie_Instance.rating);

//3. A “person” class to hold all the details

class Person
 {
   constructor(name, accno, balance) {
     this.name = name;
     this.accno = accno;
     this.balance = balance;
   }

   getBalance() {
     return `The balance is: ₹${this.balance}`;

   }
 }

 const kavya = new Person("Kavya", 110, 10_00_00);
 const banu = new Person("Banu", 222, 20_000);
 const meena = new Person("Meena", 506, 20_00_00);

 console.log(kavya);
 console.log(banu);
 console.log(meena);
 console.log(kavya.getBalance());

//4. A class to calculate uber price
class uber {
  constructor(uberClientId,uberServerToken,start_latitude,start_longitude,end_latitude,end_longitude) {
      this.uberClientId = uberClientId;
      this.uberServerToken = uberServerToken;
      this.start_latitude = start_latitude;
      this.start_longitude = start_longitude;
      this.end_latitude = end_latitude;
      this.end_longitude = end_longitude;
    }
    getPrice()
    {
    return 1025;
    }
   
} 
let uberInstance = new uber('RxG', 'hqd3L4', 19.32, -43.15, 30.62, -73.85);

console.log(uberInstance.getPrice());
