export default class TimeManager{
  arr=new Set();
  ids;
  static _instance;
  constructor(){

  }
  static get instance(){
    if(!TimeManager._instance){
      Object.defineProperty(TimeManager,"_instance",{
          value:new TimeManager()
      })
  }
  return TimeManager._instance;
  }
  add(elem){
    this.arr.add(elem);
    if(this.arr.size>0&&!this.ids){
      this.ids=setInterval(()=>this.update(),16);
    }
  }
  remove(elem){
    this.arr.delete(elem);
    if(this.arr.size===0&&this.ids){
      clearInterval(this.ids);
      this.ids=undefined;
    }
  }
  update(){
    this.arr.forEach(item=>{
      if(item.updata)item.updata();
    })
  }
}