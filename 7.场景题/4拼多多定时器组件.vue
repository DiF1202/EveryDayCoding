<template>
  <div>
    <div>
        {{timeCount}}
    </div>
  </div>
</template>

<script>
export default {
  name: "bcc-interval",
  props:{
      time:Number,
  },
  data() {
    return{
        timer:null,
        timeCount:null,
    }
  },
  mounted() {
      this.timeCount = this.time
      startInterval(this.timeCount)
  },
  methods: {
      startInterval(time){
          if(time>0){
              this.timer = setInterval(()=>{
                  time--
              },1000)
          }
      }
  },
  watch:{
      timeCount:function(newval){
        if(newval>=0){
            clearInterval(this.timer)
        }
      },
      time:function(newval){
          clearInterval(this.timer)
          this.timeCount = newval
          startInterval(this.timeCount)
      }
  },
  beforeDestroy() {
      if(this.timer) clearInterval(this.timer)
  },
};
</script>
