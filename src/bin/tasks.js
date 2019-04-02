#!/usr/bin/env node
import readlineSync from 'readline-sync';
import resolveTask87 from '../tasks/lisovskyi/Lisovskyi87';
import resolveTask226 from '../tasks/lisovskyi/Lisovskyi226';
import resolveTask559 from '../tasks/lisovskyi/Lisovskyi559';
import task332 from '../tasks/shniak/332';
import task88CD from '../tasks/shniak/88CD';
import resolveTask86a from '../tasks/karanevych/86a';
import resolveTask86b from '../tasks/karanevych/86b';
import resolveTask330 from '../tasks/karanevych/330';
import resolveTaskLarionov88a from '../tasks/larionovv/Larionov88a';
import resolveTaskLarionov88b from '../tasks/larionovv/Larionov88b';
import resolveTaskLarionov322 from '../tasks/larionovv/Larionov322';

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
    case 'Shniak_88CD':
      task88CD();
      break;
    case 'Shniak_332':
      task332();
      break;
    case 'Karanevych_86a':
      resolveTask86a();
      break;
    case 'Karanevych_86b':
      resolveTask86b();
      break;
    case 'Karanevych_330':
      resolveTask330();
      break;
    case 'Larionov_88a':
      resolveTaskLarionov88a();
      break;
    case 'Larionov_88b':
      resolveTaskLarionov88b();
      break;
    case 'Larionov_322':
      resolveTaskLarionov322();
      break;
    default:
      console.log('Invalid task. Please try again.');
  }
};

chooseTheTask();
