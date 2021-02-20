// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      type:Boolean,
      value:false
    },
    count:{
      type:Number,
      value:0,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 数据绑定
    // 三元表达式
    // 封装性 开放性
    // 那些封装在内部 那些封装在外部
    // 粒度
    // 非常简单的功能 非常复杂的功能
    // like:true,
    count1: 99,
    count2: 100,
    yesSrc:"images/like.png",
    noSrc:"images/like@dis.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function(event){
      // 自定义事件
      let like = this.properties.like;
      let count = this.properties.count;
      count = like ? count-1 : count+1;
      this.setData({
        count:count,
        like:!like,
      })
      // 激活事件
      let behavior = this.properties.like ? 'like' : 'cancel';
      this.triggerEvent('like',{
        behavior:behavior
      },{})
    }
  }
})
