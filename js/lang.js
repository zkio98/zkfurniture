// Language Selector
const languageConfig={
 en:{name:"English"},
 fr:{name:"Français"},
 es:{name:"Español"}
};
function initLanguageSelector(){
 const select=document.getElementById("languageSelect");
 if(!select)return;
 const current=localStorage.getItem("zkLanguage")||"en";
 select.value=current;
 select.addEventListener("change",()=>{
  localStorage.setItem("zkLanguage",select.value);
  window.location.reload();
 });
}
document.addEventListener("DOMContentLoaded",initLanguageSelector);
