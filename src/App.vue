<template>
  <div id="app">
    <router-view/>
    <div class="my-music">
      <aplayer autoplay
        :float="true"
        :music="{
          title: 'secret base~君がくれたもの~',
          artist: 'Silent Siren',
          src: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.mp3',
          pic: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg',
          theme: 'pic'
        }"
        :listFolded="true"
        :list="list"
      />
    </div>
  </div>
</template>

<script>
import Aplayer from 'vue-aplayer';
export default {
  name: 'App',
  components: {
    Aplayer
  },
  data() {
    return {
      list: [
        {
          title: 'secret base~君がくれたもの~',
          artist: 'Silent Siren',
          src: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.mp3',
          pic: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg',
          theme: 'pic'
        },
        {
          title: 'secret base~君がくれたもの~',
          artist: 'Silent Siren',
          src: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.mp3',
          pic: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg',
          theme: 'pic'
        },
        {
          title: 'secret base~君がくれたもの~',
          artist: 'Silent Siren',
          src: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.mp3',
          pic: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg',
          theme: 'pic'
        },
        {
          title: '四季之歌',
          artist: 'nj',
          src: 'http://q5ry2obn4.bkt.clouddn.com/sjzg.mp3',
          pic: 'none',
          theme: 'none'
        },
      ]
    }
  },
  created() {
    
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  min-height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.my-music {
  position: fixed;
  bottom: 0px;
}
</style>
