#!/usr/bin/env node
import readlineSync from 'readline-sync';
import resolveTask87 from '../tasks/lisovskyi/Lisovskyi87';
import resolveTask226 from '../tasks/lisovskyi/Lisovskyi226';
import resolveTask559 from '../tasks/lisovskyi/Lisovskyi559';

const chooseTheTask = () => {
  console.log('Welcome to the Lv-398.NodeJS Algorithm Task Manager!');
  const taskChosen = readlineSync.question('Please choose the task: ');
  switch (taskChosen) {
    case 'Lisovskyi_87':
      resolveTask87();
      break;
    case 'Lisovskyi_226':
      resolveTask226();
      break;
    case 'Lisovskyi_559':
      resolveTask559();
      break;
    default:
      console.log('Invalid task. Please try again.');
  }
};

chooseTheTask();
