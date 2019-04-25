#!/usr/bin/env node
import readlineSync from 'readline-sync';
import resolveTask87 from '../tasks/lisovskyi/Lisovskyi87';
import resolveTask226 from '../tasks/lisovskyi/Lisovskyi226';
import resolveTask559 from '../tasks/lisovskyi/Lisovskyi559';
import resolveTask332 from '../tasks/shniak/332';
import resolveTask88CD from '../tasks/shniak/88CD';
import resolveTask86a from '../tasks/karanevych/86a';
import resolveTask86b from '../tasks/karanevych/86b';
import resolveTask330 from '../tasks/karanevych/330';
import resolveTaskLarionov88a from '../tasks/larionovv/Larionov88a';
import resolveTaskLarionov88b from '../tasks/larionovv/Larionov88b';
import resolveTaskLarionov322 from '../tasks/larionovv/Larionov322';
import resolveTask109 from '../tasks/tkachuk/Tkachuk109';
import resolveTask331a from '../tasks/tkachuk/Tkachuk331a';
import resolveTask331b from '../tasks/tkachuk/Tkachuk331b';
import resolveTask107 from '../tasks/orudka/Rudka107';
import resolveTask243a from '../tasks/orudka/Rudka243a';
import resolveTask243b from '../tasks/orudka/Rudka243b';
import resolveTask178b from '../tasks/manzhula/Manzhula178b';
import resolveTask178v from '../tasks/manzhula/Manzhula178v';
import resolveTask554 from '../tasks/manzhula/Manzhula554';


const chooseTheTask = () => {
  console.log('Welcome to the Lv-398.NodeJS Algorithm Task Manager!');
  const taskChosen = readlineSync.question('Please choose the task: ');
  switch (taskChosen) {
    case '87':
      resolveTask87();
      break;
    case '226':
      resolveTask226();
      break;
    case '559':
      resolveTask559();
      break;
    case '88CD':
    case '88cd':
      resolveTask88CD();
      break;
    case '332':
      resolveTask332();
      break;
    case '86a':
      resolveTask86a();
      break;
    case '86b':
      resolveTask86b();
      break;
    case '330':
      resolveTask330();
      break;
    case '88a':
      resolveTaskLarionov88a();
      break;
    case '88b':
      resolveTaskLarionov88b();
      break;
    case '322':
      resolveTaskLarionov322();
      break;
    case '109':
      resolveTask109();
      break;
    case '331a':
      resolveTask331a();
      break;
    case '331b':
      resolveTask331b();
      break;
    case '107':
      resolveTask107();
      break;
    case '243a':
      resolveTask243a();
      break;
    case '243b':
      resolveTask243b();
      break;
    case '178b':
      resolveTask178b();
      break;
    case '178v':
      resolveTask178v();
      break;
    case '554':
      resolveTask554();
      break;
    default:
      console.log('Invalid task. Please try again.');
  }
};

chooseTheTask();
