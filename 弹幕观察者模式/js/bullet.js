import TimeManager from "./TimeManager.js"

export default class Bullet extends TimeManager{
  elem;
  data;
  x;
  width;
  constructor(_data){
    super();
    this.data=_data
    this.elem=this.createElem();
  }
  createElem(){
    let div=document.createElement("div");
    Object.assign(div.style,{
      height:"40px",
      color:this.getColor(),
      lineHeight:"40px",
      whiteSpace: "nowrap"
    })
    div.textContent=this.data;
    return div;
  }
  appendTo(parent){
    if(typeof parent==="string")parent=document.querySelector(parent);
    parent.appendChild(this.elem);
    let rect=parent.getBoundingClientRect()
    this.x=rect.width;
    this.width=this.elem.offsetWidth;
    Object.assign(this.elem.style,{
      top:Math.random()*rect.height/4+"px",
      left:rect.width+"px"
    });
    TimeManager.instance.add(this);
  }
  updata(){
    if(!this.width) return;
    this.x--;
    console.log(this.x)
    Object.assign(this.elem.style,{
      position:"absolute",
      left:this.x+"px"
    })
    if(this.x<-this.width){
      TimeManager.instance.remove(this);
      this.elem.remove();
      this.elem=null
    }
    
  }
  getColor(){
    return `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
  }
}