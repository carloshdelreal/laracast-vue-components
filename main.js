Vue.component('task-list', {
  template: `
    <div>
      <task v-for="task in tasks">{{ task.task }}</task>
    <div>
  `,

  data() {
    return {
      tasks: [
        { task: 'Go to the store', complete: true },
        { task: 'Go to the bar', complete: false },
        { task: 'Go to the cinema', complete: true },
        { task: 'Go to the mall', complete: false },

      ]
    }
  }
});

Vue.component('task', {
  template: '<li><slot></slot></lis>'
});

new Vue({
  el: '#root'
});