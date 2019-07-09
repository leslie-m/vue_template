import item1 from '@/components/main/item1'
export default (vue)=>{
  console.dir(vue);
  vue.directive("test",(el,binding,vnode)=>{
    el.onclick=function(){
      console.log("ok");
    }
  })
  vue.component("item1",item1)
}
