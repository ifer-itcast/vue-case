<template>
  <div>
    <div id="con">
      {{ msg }}
    </div>
    <button @click="msg = 'xxx'">update</button>
  </div>
</template>

<script>
export default {
  name: 'Life',

  data() {
    return {
      msg: 'Hello Vue'
    };
  },
  beforeCreate() {
    // !#1，拿不到 data 和 methods 中的数据
    console.log('beforeCreate');
  },
  created() {
    // !#2
    console.log('created');
  },
  beforeMount() {
    // !#3
    console.log('beforeMount', document.querySelector('#con'));
  },
  mounted() {
    // !#4
    console.log('mounted', document.querySelector('#con'));
  },
  beforeUpdate() {
    // !#5
    console.log('beforeUpdate', document.querySelector('#con').innerHTML);
  },
  updated() {
    // !#6
    console.log('updated', document.querySelector('#con').innerHTML);
  },
  beforeDestroy() {
    // !#7
    console.log('beforeDestroy');
  },
  destroyed() {
    // !#8
    console.log('destroyed');
  }
};
</script>
