import{B,U as h,s as k,a as w,b as C,R as $,c as P,r as b,o as l,d,e as r,f as i,m as a,t as _,g as p,n as A,h as m,w as u,i as D,j as g,k as S,v as I,T as L,u as T}from"./index-UIEXO35e.js";var q=function(n){var t=n.dt;return`
.p-panel {
    border: 1px solid `.concat(t("panel.border.color"),`;
    border-radius: `).concat(t("panel.border.radius"),`;
    background: `).concat(t("panel.background"),`;
    color: `).concat(t("panel.color"),`;
}

.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: `).concat(t("panel.header.padding"),`;
    background: `).concat(t("panel.header.background"),`;
    color: `).concat(t("panel.header.color"),`;
    border-style: solid;
    border-width: `).concat(t("panel.header.border.width"),`;
    border-color: `).concat(t("panel.header.border.color"),`;
    border-radius: `).concat(t("panel.header.border.radius"),`;
}

.p-panel-toggleable .p-panel-header {
    padding: `).concat(t("panel.toggleable.header.padding"),`;
}

.p-panel-title {
    line-height: 1;
    font-weight: `).concat(t("panel.title.font.weight"),`;
}

.p-panel-content {
    padding: `).concat(t("panel.content.padding"),`;
}

.p-panel-footer {
    padding: `).concat(t("panel.footer.padding"),`;
}
`)},E={root:function(n){var t=n.props;return["p-panel p-component",{"p-panel-toggleable":t.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},K=B.extend({name:"panel",theme:q,classes:E}),N={name:"BasePanel",extends:P,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:K,provide:function(){return{$pcPanel:this,$parentInstance:this}}},f={name:"Panel",extends:N,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":function(n){this.id=n||h()},collapsed:function(n){this.d_collapsed=n}},mounted:function(){this.id=this.id||h()},methods:{toggle:function(n){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:n,value:this.d_collapsed})},onKeyDown:function(n){(n.code==="Enter"||n.code==="NumpadEnter"||n.code==="Space")&&(this.toggle(n),n.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header}},components:{PlusIcon:k,MinusIcon:w,Button:C},directives:{ripple:$}},V=["id"],j=["id","aria-labelledby"];function U(e,n,t,c,o,s){var v=b("Button");return l(),d("div",a({class:e.cx("root")},e.ptmi("root")),[r("div",a({class:e.cx("header")},e.ptm("header")),[i(e.$slots,"header",{id:o.id+"_header",class:A(e.cx("title"))},function(){return[e.header?(l(),d("span",a({key:0,id:o.id+"_header",class:e.cx("title")},e.ptm("title")),_(e.header),17,V)):p("",!0)]}),r("div",a({class:e.cx("headerActions")},e.ptm("headerActions")),[i(e.$slots,"icons"),e.toggleable?(l(),m(v,a({key:0,id:o.id+"_header",class:e.cx("pcToggleButton"),"aria-label":s.buttonAriaLabel,"aria-controls":o.id+"_content","aria-expanded":!o.d_collapsed,unstyled:e.unstyled,onClick:s.toggle,onKeydown:s.onKeyDown},e.toggleButtonProps,{pt:e.ptm("pcToggleButton")}),{icon:u(function(y){return[i(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:o.d_collapsed},function(){return[(l(),m(D(o.d_collapsed?"PlusIcon":"MinusIcon"),a({class:y.class},e.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","onClick","onKeydown","pt"])):p("",!0)],16)],16),g(L,a({name:"p-toggleable-content"},e.ptm("transition")),{default:u(function(){return[S(r("div",a({id:o.id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":o.id+"_header"},e.ptm("contentContainer")),[r("div",a({class:e.cx("content")},e.ptm("content")),[i(e.$slots,"default")],16),e.$slots.footer?(l(),d("div",a({key:0,class:e.cx("footer")},e.ptm("footer")),[i(e.$slots,"footer")],16)):p("",!0)],16,j),[[I,!o.d_collapsed]])]}),_:3},16)],16)}f.render=U;const M={class:"about"},R=r("p",{class:"m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),z=r("h1",null,"This is an about page",-1),O={__name:"AboutView",setup(e){const n=()=>{document.body.classList.toggle("my-app-dark")};return(t,c)=>{const o=b("Button");return l(),d("div",M,[g(T(f),{header:"Header",toggleable:""},{default:u(()=>[R]),_:1}),z,g(o,{label:"Check",icon:"pi pi-check",onClick:c[0]||(c[0]=s=>n())})])}}};export{O as default};
