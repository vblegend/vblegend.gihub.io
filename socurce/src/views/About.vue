<template>
  <div class='about'>
    <div v-for='item in lists'  :key='item'>
        {{item}}
    </div>

    </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
// import ListBoxItem from '@/components/ListBoxItem/ListBoxItem.vue'; // @ is an alias to /src

@Component({
  components: {
    // ListBoxItem,
  },
})
export default class About extends Vue {
  private lists: string[];
  /**
   *
   */
  constructor() {
    super();

    this.lists = [
      "I'm sorry",
      "It will take a few more days",
      "The content will gradually become more substantial",
    ];
  }

 public func1(f: () => void) {
    console.log('func1');
    f();
    console.log(
      'func1...');
  }


  public func2() {
    console.log("func2");
  }
}
</script>
<style scoped>
.about {
  position: relative;
  /* background-color: red; */
  width: 100%;
  height: 100%;
  font-size: 24px;
}

</style>
