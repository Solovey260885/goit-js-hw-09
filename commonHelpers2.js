import"./assets/modulepreload-polyfill-3cfb730f.js";const e={email:"",message:""},t=document.querySelector(".feedback-form"),n=document.querySelector(".js-input"),c=document.querySelector(".js-textarea"),l="feedback-form-state";t.addEventListener("input",i);function i(){e.email=n.value.trim(),e.message=c.value.trim(),localStorage.setItem(l,JSON.stringify(e))}t.addEventListener("submit",u);function u(m){m.preventDefault();const s=m.target,o=s.elements.email.value.trim(),r=s.elements.message.value.trim();if(o===""||r==="")return alert("Fill please all fields");console.log(e),localStorage.removeItem(l),s.reset()}const g=localStorage.getItem(l),a=JSON.parse(g)??"",d=t.elements.email,f=t.elements.message;d.value=a.email??"";f.value=a.message??"";e.email=a.email??"";e.message=a.message??"";
//# sourceMappingURL=commonHelpers2.js.map