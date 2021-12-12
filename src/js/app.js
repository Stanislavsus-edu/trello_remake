import Taskmanager from './Taskmanager';

const taskmanager = new Taskmanager(document.querySelector('.taskmanager'));
taskmanager.init();
taskmanager.tasks = [
  ['Приготовить ужин'],
  ['Почистить зубы', 'Позавтракать', 'Помыть посуду'],
  ['Проснуться', 'Вспомнить, что сегодня самый лучший день'],
];
taskmanager.render();
