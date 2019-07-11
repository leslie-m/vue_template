import Vue from 'vue'
import directive from '@/core/directive'
import commonTemp from "@/components/commonTemp"
import global from "@/core/global"
import filter from '@/core/filter'
import apis from '@/core/api'
// console.log(global);
export default (Vue)=>{
  directive(Vue);
  commonTemp(Vue);
  Vue.prototype.$global=global;
  Vue.prototype.$apis=apis;
  Vue.prototype.$eventHub=new Vue();
}
