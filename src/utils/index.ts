import { easyIcon, hardIcon, mediumIcon } from '../assets';

export const getDifficultyIcon = (difficulty: number) => {
  if (difficulty === 1) {
    return easyIcon;
  } else if (difficulty === 2) {
    return mediumIcon;
  } else {
    return hardIcon;
  }
};

export const getDifficultyText = (difficulty: number) => {
  if (difficulty === 1) {
    return 'Easy';
  } else if (difficulty === 2) {
    return 'Medium';
  } else {
    return 'Hard';
  }
};
