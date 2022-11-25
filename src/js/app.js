import Character from './Character';
import Team from './Team';
import ErrorRepository from './Errors';

const gamer1 = new Character('Gamer-1', 'Boweman');
const gamer2 = new Character('Gamer-2', 'Magician');
const gamer3 = new Character('Gamer-3', 'Swordsman');
const teamOne = new Team();
teamOne.add(gamer1);
teamOne.add(gamer2);
teamOne.add(gamer2);

teamOne.addAll(gamer1, gamer2, gamer3, gamer3, new Character('Gamer-4', 'Zombie'));

// eslint-disable-next-line no-console
console.log(teamOne.members);

const arr = teamOne.toArray();
// eslint-disable-next-line no-console
console.log(arr);

const newErr = new ErrorRepository();
// eslint-disable-next-line no-console
console.log(newErr);
// eslint-disable-next-line no-console
console.log(newErr.translate(2));
