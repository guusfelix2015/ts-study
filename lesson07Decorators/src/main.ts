const echo = <T>(args: T): T => args;

const isObj = <T>(arg: T): boolean => {
  return typeof arg === 'object' && !Array.isArray(arg) && arg !== null;
};

console.log(isObj({})); // true
console.log(isObj([])); // false
console.log(isObj('')); // false
console.log(isObj(null)); // false

const isTrue = <T>(arg: T): { arg: T; isTrue: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, isTrue: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, isTrue: false };
  }

  return { arg, isTrue: !!arg };
};

console.log(isTrue(false));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue(0));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue({}));
console.log(isTrue({ a: 1, b: 2 }));
console.log(isTrue(''));
console.log(isTrue(null));
console.log(isTrue(undefined));

interface BoolCheck<T> {
  value: T;
  isTrue: boolean;
}

const checkBollValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, isTrue: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, isTrue: false };
  }

  return { value: arg, isTrue: !!arg };
};

interface HasID {
  id: number;
}

const processUser = <T extends HasID>(user: T): T => {
  return user;
};

console.log(processUser({ id: 1, name: 'John' }));

const getUsersProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map(user => user[key]);
};

const usersArray = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618',
      },
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  },
];

console.log(getUsersProperty(usersArray, 'email'));
console.log(getUsersProperty(usersArray, 'username'));
console.log(getUsersProperty(usersArray, 'address'));
