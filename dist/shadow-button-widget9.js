!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";(()=>{const e=()=>{const e=document.getElementById("bytebellai");if(!e)return void console.error('Target element with ID "bytebellai" not found.');const t=e.getAttribute("data-api-key");let o;if(e.shadowRoot)for(o=e.shadowRoot;o.firstChild;)o.firstChild.remove();else o=e.attachShadow({mode:"open"});const n=document.createElement("button");n.textContent="Shadow DOM Button",n.addEventListener("click",(()=>{console.log("Button in shadow DOM was clicked!"),alert(t)})),o.appendChild(n)};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",(()=>{setTimeout(e,1e3)})):setTimeout(e,1e3)})()}));
