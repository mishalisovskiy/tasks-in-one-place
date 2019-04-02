#!/usr/bin/env node
import readlineSync from 'readline-sync';
import task87Start from '../tasks/lisovskyi/Lisovskyi87';

const chooseTheTask = () => {
  console.log('Welcome to the Lv-398.NodeJS Algorithm Task Manager!');
  const taskChosen = readlineSync.question('Please choose the task: ');
  switch (taskChosen) {
    case 'Lisovskyi_87':
      task87Start();
      break;
    default:
      console.log('Invalid task. Please try again.');
  }
};

chooseTheTask();
