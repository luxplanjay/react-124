/**
 * - Типізація функцій
 * - Типізація аргументів
 * - Тип значення, яке повертає функція
 * - Опціональні параметри
 * - Типізація методів
 */

function greetGuest(guestName: string): void {
  console.log(`Hello ${guestName}`);
}

greetGuest("Jacob");

function addNumbers(a: number, b: number): number {
  return a + b;
}

const result = addNumbers(5, 8);

/***************** 1 *****************/

interface User {
  username: string;
  age: number;
}

const userCollection: User[] = [
  { username: "poly", age: 20 },
  { username: "jacob", age: 30 },
  { username: "mango", age: 25 },
];

function getUserNames(users: User[]): string[] {
  return users.map((user) => user.username);
}

const names = getUserNames(userCollection);

/***************** 2 *****************/
function greet(username: string, age?: number): void {
  if (age !== undefined) {
    console.log(`Hello ${username} your age is ${age}`);
  } else {
    console.log(`Hello ${username}`);
  }
}

greet("poly", 15);

greet("jacob");

/***************** 3 *****************/

interface Worker {
  username: string;
  greet: (msg: string) => void;
}

const jacob: Worker = {
  username: "Jacob",
  greet: (message) => {
    console.log(message);
  },
};

jacob.greet("Welcome");

/***************** 4 *****************/

interface Player {
  username: string;
  isOnline: boolean;
  score: number;
}

const allPlayers: Player[] = [
  { username: "poly", isOnline: false, score: 50 },
  { username: "jacob", isOnline: true, score: 150 },
  { username: "adrian", isOnline: false, score: 200 },
];

interface GamePlatform {
  getOnlinePlayers: (players: Player[]) => Player[];
  getOnlinePlayerNames: (players: Player[]) => string[];
  getPlayerNames: (players: Player[]) => string[];
  getBestPlayers: (players: Player[]) => Player[];
}

const platform: GamePlatform = {
  getOnlinePlayers(players) {
    return players.filter((p) => p.isOnline);
  },
  getOnlinePlayerNames(players) {
    return players.filter((p) => p.isOnline).map((p) => p.username);
  },
  getPlayerNames(players) {
    return players.map((p) => p.username);
  },
  getBestPlayers(players) {
    return players.filter((p) => p.score > 100);
  },
};

platform.getOnlinePlayers(allPlayers);
platform.getPlayerNames(allPlayers);

const names = platform.getPlayerNames(allPlayers);

// -------------------

let age;

let username = "jello";
