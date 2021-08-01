<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余 <strong>{{ count }}</strong></span
    >
    <ul class="filters">
      <li>
        <a
          @click="isSel = 'all'"
          :class="{ selected: isSel === 'all' }"
          href="javascript:;"
          >全部</a
        >
      </li>
      <li>
        <a
          @click="isSel = 'no'"
          :class="{ selected: isSel === 'no' }"
          href="javascript:;"
          >未完成</a
        >
      </li>
      <li>
        <a
          @click="isSel = 'yes'"
          :class="{ selected: isSel === 'yes' }"
          href="javascript:;"
          >已完成</a
        >
      </li>
    </ul>
    <button class="clear-completed">清除已完成</button>
  </footer>
</template>

<script>
export default {
  props: ['farr'],
  computed: {
    count() {
      return this.farr.length;
    }
  },
  data() {
    return {
      isSel: 'all'
    };
  }
};
</script>
