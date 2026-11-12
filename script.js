// ===== Settings: change these to your own details =====
var CFG={
  email:"cmtrckinfo@gmail.com",
  whatsapp:"+27744699197",
  phone:"+27705521258",
  cur:"R",
  // No server or database is used: accounts and orders stay in the visitor's browser and emails are sent by EmailJS.
  api:"",
  // Emails to you and to customers: follow EMAIL-SETUP.txt, then paste the three EmailJS values here.
  emailjs:{publicKey:"ptWfYA1W2H4GkIeCm",serviceId:"service_3h7g5qd",templateId:"template_1c84v5c"}
};
var PLANS=[
{id:"essential",name:"Essential",price:4500,feat:["Simple coffin","Mortuary care","Transport to the cemetery"],more:"A straightforward plan that covers the essentials of a dignified farewell at an affordable price."},
{id:"dignity",name:"Dignity",price:9500,feat:["Basic coffin","Mortuary care and preparation","Hearse to the cemetery","Service programme"],more:"Our core plan. It covers the coffin, mortuary care, the hearse and a printed programme, so the basics are taken care of."},
{id:"family",name:"Family Care",price:13500,feat:["Quality coffin","Family vehicle and hearse","Graveside arrangements","Printed programmes"],more:"Designed for families who want everyone travelling together, with a family vehicle and full graveside arrangements."},
{id:"tribute",name:"Tribute",price:18500,feat:["Quality coffin","Chapel or home service","Family vehicle and hearse","Tent, chairs and sound","Printed programmes"],pop:1,more:"Our most chosen plan. It includes a service at a chapel or at home, with tent, chairs and sound for the gathering."},
{id:"heritage",name:"Heritage with Groceries",price:24500,feat:["Everything in Tribute","Groceries delivered to your door","Catering support for the gathering"],more:"Combines a full funeral with our grocery benefit. Groceries cater for 250 people for members over 14, or 100 or fewer for younger members."},
{id:"legacy",name:"Legacy",price:34500,feat:["Premium coffin","Full service co-ordination","Two family vehicles","Catering for 100 guests","Memorial photo tribute","Headstone voucher"],more:"Our most complete plan. We co-ordinate every detail, from vehicles and catering to a memorial photo tribute and a headstone voucher."}
];
var EXTRAS=[
{id:"x-vehicle",name:"Extra family vehicle",price:1800},
{id:"x-marquee",name:"Additional marquee",price:2500},
{id:"x-prog",name:"Extra printed programmes (50)",price:600},
{id:"x-stream",name:"Live-stream of the service",price:1200},
{id:"x-flowers",name:"Memorial flowers",price:1500}
];
var CAT={};
PLANS.forEach(function(p){p.type="plan";CAT[p.id]=p});
EXTRAS.forEach(function(p){p.type="extra";CAT[p.id]=p});

// ===== Grocery plans (from the Comtrack brochure) =====
var GCOVER=[
{id:"m",name:"Member only"},
{id:"s",name:"Member, spouse and up to 6 children"},
{id:"f",name:"Member, spouse, 6 children, 4 parents and 4 extended members"}
];
var GAGE=[{id:"a",name:"Age 18 to 64"},{id:"b",name:"Age 65 to 84"}];
// Monthly premiums: prem[age][who]. Each level is paired with the brochure's Option of the same number.
var GL=[
{n:1,name:"Entry level",cover:10000,prem:{a:{m:30,s:48,f:108},b:{m:35,s:53,f:116}},
items:["30kg maize meal","10kg rice","10kg samp","5kg chicken mixed portion","20kg beef stew","5kg beetroot","3kg onions","3 bags potatoes","2kg carrots","3 cabbages","4 robot pepper","3kg baked beans","1kg rama","2kg mayonnaise","4 spice variety","2lt cooking oil","1lt liquid soap"],
fun:["Removal","Storage","Documentation","Delivery","Coffin (budget)","Tent, 50 chairs and two tables","Grave marker","Graveyard preparation","Hearse + 2 family cars","Toilet","50 programmes","Medium coffin spray","1 A1 photo"]},
{n:2,name:"Primary level",cover:15000,prem:{a:{m:44,s:71,f:163},b:{m:52,s:79,f:174}},
items:["40kg maize meal","10kg rice","10kg samp","5kg chicken mixed portion","30kg beef stew","10kg beetroot","5kg onions","4 bags potatoes","5kg carrots","5 cabbages","8 robot pepper","6kg baked beans","2kg rama","3kg mayonnaise","4 spice variety","5lt cooking oil","2lt liquid soap"],
fun:["Removal","Storage","Documentation","Delivery","Coffin half view (casket)","Grave marker","Coffin spray","Tent, 50 chairs and three tables","Graveyard preparation","Hearse + 2 family cars","Executive toilet","Food warmer","50 programmes","Medium coffin spray","1 A1 photo","Two taxis"]},
{n:3,name:"Standard level",cover:20000,prem:{a:{m:59,s:95,f:217},b:{m:70,s:106,f:232}},
items:["40kg maize meal","10kg rice","10kg samp","10kg chicken mixed portion","40kg beef stew","10kg beetroot","10kg onions","4 bags potatoes","5kg carrots","6 cabbages","10 robot pepper","9kg baked beans","2kg rama","6kg mayonnaise","4 spice variety","5lt cooking oil","5lt liquid soap"],
fun:["Removal","Storage","Documentation","Delivery","Coffin (mini dome)","Grave marker","Tent, 100 chairs and four tables","Graveyard preparation","Hearse + 3 family cars","Executive toilet","Food warmer","100 programmes","4 taxis","Coffin spray","1 A1 photo"]},
{n:4,name:"Classic level",cover:30000,prem:{a:{m:89,s:143,f:325},b:{m:104,s:158,f:348}},
items:["40kg maize meal","10kg rice","10kg samp","10kg chicken mixed portion","50kg beef stew","10kg beetroot","10kg onions","5 bags potatoes","10kg carrots","1 bag cabbages","10 robot pepper","9kg baked beans","2kg rama","6kg mayonnaise","4 spice variety","5lt cooking oil","5lt liquid soap","150 x 330ml assorted cold drinks"],
fun:["Removal","Storage","Documentation","Delivery","Coffin (dome)","Grave marker","Tent, 100 chairs and four tables","Graveyard preparation","Hearse + 4 family cars","Executive toilet","Food warmer","100 programmes","5 taxis","Coffin spray","1 A1 photo"]},
{n:5,name:"Luxury level",cover:40000,prem:{a:{m:108,s:160,f:385},b:{m:121,s:189,f:401}},
items:["50kg maize meal","10kg rice","10kg samp","10kg chicken mixed portion","60kg beef stew","10kg beetroot","10kg onions","6 bags potatoes","10kg carrots","1 bag cabbages","15 robot pepper","12kg baked beans","2kg rama","6kg mayonnaise","4 spice variety","10lt cooking oil","5lt liquid soap","250 x 330ml assorted cold drinks","Additional cow (live)"],
fun:["Removal","Storage","Documentation","Delivery","Coffin (super dome)","Grave marker","Tent, 100 chairs and four tables","Graveyard preparation","Hearse + 5 family cars","Executive toilet","Food warmer","150 programmes","6 taxis","Coffin spray","1 A1 photo"]}
];
var WAIT="A six (6) month waiting period applies for natural death and twelve (12) months for suicide death. There is no waiting period for accidental death, provided the first premium is paid to us.";
var market="funeral",gSel={cover:"m",age:"a"},gcart=ls("sf_gcart",[]),gOpen=1,gdlg=document.getElementById("gdlg");
function byId(a,id){return a.filter(function(x){return x.id===id})[0]}
function gLevel(n){return GL.filter(function(x){return x.n===n})[0]}
function gPrem(L,c,a){return L.prem[a][c]}
function gParse(id){var m=/^g(\d)-([msf])-([ab])$/.exec(id);return m?{n:+m[1],c:m[2],a:m[3]}:null}
function li(t){return '<li>'+esc(t)+'</li>'}
function opts(arr,sel){return arr.map(function(o){return '<option value="'+o.id+'"'+(o.id===sel?' selected':'')+'>'+esc(o.name)+'</option>'}).join('')}
function groceryCard(L){
var n=L.items.length;
return '<div class="card"><h3>Comtrack '+L.n+'</h3><div class="level">'+esc(L.name)+'</div><div class="price">'+money(gPrem(L,gSel.cover,gSel.age))+' <small>per month</small></div><div class="cvr"><ion-icon name="shield-checkmark-outline"></ion-icon>'+money(L.cover)+' funeral cover</div><ul>'+L.items.slice(0,6).map(li).join('')+'<li class="more">and '+(n-6)+' more groceries</li></ul><div class="row"><button class="ghost" onclick="readGrocery('+L.n+')">Read more</button><button onclick="addGrocery('+L.n+')">Add to order</button></div></div>';
}
function updateBadge(){
var nL=cartLines().reduce(function(s,l){return s+l.qty},0),nG=gLines().reduce(function(s,l){return s+l.qty},0),n=nL+nG;
$("cartcount").hidden=!n;$("cartcount").textContent=n;
[["funeral",nL],["grocery",nG]].forEach(function(x){var e=$("oc-"+x[0]);e.hidden=!x[1];e.textContent=x[1]});
var t=sumText();$("osum").textContent=t;$("gosum").textContent=t;
}
function buildGPickers(){
$("gpick").innerHTML=GL.map(function(L){return '<option value="'+L.n+'">Comtrack '+L.n+' '+esc(L.name)+' ('+money(L.cover)+' cover)</option>'}).join('');
["pb_cover","gcover"].forEach(function(id){$(id).innerHTML=opts(GCOVER,gSel.cover);$(id).onchange=function(){setG(this.value,gSel.age)}});
["pb_age","gage"].forEach(function(id){$(id).innerHTML=opts(GAGE,gSel.age);$(id).onchange=function(){setG(gSel.cover,this.value)}});
}
function setG(c,a){
gSel.cover=c;gSel.age=a;
["pb_cover","gcover","gd_cover"].forEach(function(id){if($(id))$(id).value=c});
["pb_age","gage","gd_age"].forEach(function(id){if($(id))$(id).value=a});
if(market==="grocery"){renderPlans();layout()}
if(gdlg.open)updGdlg();
}
function setMarket(m){
if(m===market)return;
market=m;
["funeral","grocery"].forEach(function(k){var t=$("tab-"+k),on=k===m;t.classList.toggle("on",on);t.setAttribute("aria-selected",on)});
function go(){
var g=m==="grocery";
$("plans").classList.toggle("is-grocery",g);
$("plans-title").textContent=g?"Grocery plans":"Funeral plans";
$("plans-sub").textContent=g?"Groceries delivered to your door, together with your funeral cover. Choose who is covered to see your monthly premium.":"Read about each plan, then add it to your order. Log in when you are ready to place it.";
$("gbar").hidden=!g;$("gnote").hidden=!g;
pi=0;renderPlans();layout();last=Date.now();
$("planbox").classList.remove("swap");
}
if(still)go();else{$("planbox").classList.add("swap");setTimeout(go,220)}
}
function readGrocery(n){
gOpen=n;var L=gLevel(n);
$("gbody").innerHTML='<h2 id="gt">Comtrack '+L.n+' '+esc(L.name)+'</h2><div class="price"><span id="gd_price"></span> <small>per month</small></div><p class="muted">'+money(L.cover)+' funeral cover</p>'
+'<div class="gsel2"><div><label for="gd_cover">Who is covered</label><select id="gd_cover">'+opts(GCOVER,gSel.cover)+'</select></div><div><label for="gd_age">Age of main member</label><select id="gd_age">'+opts(GAGE,gSel.age)+'</select></div></div>'
+'<h3 class="dh">Groceries included ('+L.items.length+' items)</h3><ul class="two">'+L.items.map(li).join('')+'</ul>'
+'<h3 class="dh">Funeral benefits at this level</h3><ul class="two">'+L.fun.map(li).join('')+'</ul>'
+'<h3 class="dh">Monthly premiums for '+money(L.cover)+' cover</h3><div class="wrap"><table id="gd_table"></table></div>'
+'<p class="fine">'+esc(WAIT)+'</p>'
+'<div class="row"><button id="gd_add">Add to order</button><button class="ghost" onclick="gdlg.close()">Close</button></div>';
$("gd_cover").onchange=function(){setG(this.value,gSel.age)};
$("gd_age").onchange=function(){setG(gSel.cover,this.value)};
$("gd_add").onclick=function(){gAdd(n,gSel.cover,gSel.age);gdlg.close()};
updGdlg();gdlg.showModal();
}
function updGdlg(){
var L=gLevel(gOpen);
$("gd_price").textContent=money(gPrem(L,gSel.cover,gSel.age));
$("gd_table").innerHTML='<tr><th>Who is covered</th>'+GAGE.map(function(a){return '<th>'+esc(a.name)+'</th>'}).join('')+'</tr>'+GCOVER.map(function(c){return '<tr><td>'+esc(c.name)+'</td>'+GAGE.map(function(a){return '<td class="'+(c.id===gSel.cover&&a.id===gSel.age?'hl':'')+'">'+money(L.prem[a.id][c.id])+'</td>'}).join('')+'</tr>'}).join('');
}

// ----- Grocery order builder (same as the funeral order builder) -----
function gLines(){
return gcart.map(function(l){
var p=gParse(l.id),L=p&&gLevel(p.n);if(!L)return null;
var u=gPrem(L,p.c,p.a);
return{id:l.id,name:"Comtrack "+L.n+" "+L.name+" grocery plan",detail:byId(GCOVER,p.c).name+", "+byId(GAGE,p.a).name.toLowerCase(),qty:l.qty,unit:u,line:u*l.qty};
}).filter(Boolean);
}
function gTotal(){return gLines().reduce(function(s,l){return s+l.line},0)}
function saveG(){sv("sf_gcart",gcart);renderGCart()}
function gAdd(n,c,a){
var id="g"+n+"-"+c+"-"+a,l=gcart.filter(function(x){return x.id===id})[0];
if(l)l.qty=Math.min(20,l.qty+1);else gcart.push({id:id,qty:1});
saveG();toast("Comtrack "+n+" "+gLevel(n).name+" added to your grocery order");
}
function addGrocery(n){gAdd(n,gSel.cover,gSel.age)}
function gAddFromPicker(){gAdd(+$("gpick").value,gSel.cover,gSel.age)}
function gChange(id,d){
var l=gcart.filter(function(x){return x.id===id})[0];if(!l)return;
l.qty+=d;if(l.qty<1)gcart=gcart.filter(function(x){return x.id!==id});if(l.qty>20)l.qty=20;
saveG();
}
function gRemove(id){gcart=gcart.filter(function(x){return x.id!==id});saveG()}
function renderGCart(){
var L=gLines();updateBadge();
if(!L.length){$("gcartbox").innerHTML='<p class="muted" style="padding:14px 0">Your grocery order is empty. Add a grocery plan to see your monthly total.</p><div class="total"><span>Monthly total</span><b>'+money(0)+'</b></div>';return}
$("gcartbox").innerHTML=L.map(function(l){return '<div class="line"><div class="ln-name">'+esc(l.name)+'<small>'+esc(l.detail)+' | '+money(l.unit)+' per month each</small></div><div class="qty"><button class="ghost" aria-label="Remove one '+esc(l.name)+'" onclick="gChange(\''+l.id+'\',-1)">&minus;</button><span>'+l.qty+'</span><button class="ghost" aria-label="Add one '+esc(l.name)+'" onclick="gChange(\''+l.id+'\',1)">+</button></div><div class="ln-total">'+money(l.line)+'</div><button class="ghost ln-x" aria-label="Remove '+esc(l.name)+'" onclick="gRemove(\''+l.id+'\')">Remove</button></div>'}).join('')+'<div class="total"><span>Monthly total</span><b>'+money(gTotal())+'</b></div>';
}
function renderGOrders(){
var box=$("gordersbox");
if(!user){box.innerHTML='<p class="muted">Log in to see your past groceries.</p>';return}
try{
var o=myOrders("sf_gorders");
box.innerHTML=o.length?ordersTable(o,"Grocery plans","Monthly total"):'<p class="muted">No grocery orders yet. Add a grocery plan above and place your first order.</p>';
}catch(e){console.error("Past groceries failed",e);box.innerHTML='<p class="muted">We could not show your past groceries. Please refresh the page.</p>'}
}
var mode="login",user=null,cart=[];
var dlg=document.getElementById("dlg"),pdlg=document.getElementById("pdlg");
function $(i){return document.getElementById(i)}
function ls(k,d){try{var v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}}
function sv(k,v){try{localStorage.setItem(k,JSON.stringify(v));return true}catch(e){return false}}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function money(n){return CFG.cur+Number(n).toLocaleString("en-ZA")}
function digits(s){return String(s).replace(/\D/g,"")}
async function hash(s){try{var b=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(s));return Array.from(new Uint8Array(b)).map(function(x){return x.toString(16).padStart(2,"0")}).join("")}catch(e){return btoa(s)}}
var toastT;
function toast(t,ms){var e=$("toast");e.textContent=t;e.classList.add("show");clearTimeout(toastT);toastT=setTimeout(function(){e.classList.remove("show")},ms||2400)}

// ----- Backend API helper -----
function token(){return ls("sf_token","")}
async function api(method,path,body){
var h={"Content-Type":"application/json"},t=token();if(t)h.Authorization="Bearer "+t;
var r;try{r=await fetch(CFG.api+path,{method:method,headers:h,body:body?JSON.stringify(body):undefined})}catch(e){throw new Error("Cannot reach the server. Please try again shortly.")}
var d={};try{d=await r.json()}catch(e){}
if(r.status===401&&t){try{localStorage.removeItem("sf_session");localStorage.removeItem("sf_token")}catch(e){}}
if(!r.ok)throw new Error(d.error||"Something went wrong ("+r.status+").");
return d;
}

// ----- Contact links (phone, WhatsApp, email) -----
document.querySelectorAll(".tel").forEach(function(a){a.href="tel:"+CFG.phone});
$("dk-mail").href="mailto:"+CFG.email;
$("dk-wa").href="https://wa.me/"+digits(CFG.whatsapp);

// ----- Hamburger menu -----
var burger=$("burger"),menu=$("menu");
function setMenu(o){menu.classList.toggle("open",o);burger.setAttribute("aria-expanded",o);burger.setAttribute("aria-label",o?"Close menu":"Open menu")}
burger.addEventListener("click",function(){setMenu(!menu.classList.contains("open"))});
menu.addEventListener("click",function(e){if(e.target.closest("a"))setMenu(false)});
document.addEventListener("keydown",function(e){if(e.key==="Escape")setMenu(false)});

// ----- Plans -----
function renderPlans(){
if(market==="grocery"){$("plangrid").innerHTML=GL.map(groceryCard).join("");return}
$("plangrid").innerHTML=PLANS.map(function(p){return '<div class="card'+(p.pop?' pop':'')+'">'+(p.pop?'<span class="tag">Most chosen</span>':'')+'<h3>'+p.name+'</h3><div class="price">'+money(p.price)+' <small>once-off</small></div><ul>'+p.feat.map(function(f){return '<li>'+f+'</li>'}).join('')+'</ul><div class="row"><button class="ghost" onclick="readMore(\''+p.id+'\')">Read more</button><button onclick="addItem(\''+p.id+'\')">Add to order</button></div></div>'}).join('');
}
function readMore(id){
var p=CAT[id];
$("pt").textContent=p.name;$("pp").textContent=money(p.price);$("pm").textContent=p.more;
$("pf").innerHTML=p.feat.map(function(f){return '<li>'+f+'</li>'}).join('');
$("pa").onclick=function(){addItem(id);pdlg.close()};
pdlg.showModal();
}

// ----- Order builder: add, change quantity, remove, total -----
function buildPicker(){
$("pick").innerHTML='<optgroup label="Funeral plans">'+PLANS.map(function(p){return '<option value="'+p.id+'">'+p.name+' ('+money(p.price)+')</option>'}).join('')+'</optgroup><optgroup label="Extras">'+EXTRAS.map(function(p){return '<option value="'+p.id+'">'+p.name+' ('+money(p.price)+')</option>'}).join('')+'</optgroup>';
}
function saveCart(){sv("sf_cart",cart);renderCart()}
function addItem(id){
var l=cart.find(function(x){return x.id===id});
if(l){l.qty=Math.min(20,l.qty+1)}else{cart.push({id:id,qty:1})}
saveCart();toast(CAT[id].name+" added to your order");
}
function changeQty(id,d){
var l=cart.find(function(x){return x.id===id});if(!l)return;
l.qty+=d;if(l.qty<1)cart=cart.filter(function(x){return x.id!==id});if(l.qty>20)l.qty=20;
saveCart();
}
function removeItem(id){cart=cart.filter(function(x){return x.id!==id});saveCart()}
function cartLines(){return cart.filter(function(l){return CAT[l.id]}).map(function(l){var p=CAT[l.id];return{id:l.id,name:p.name,qty:l.qty,unit:p.price,line:p.price*l.qty}})}
function cartTotal(){return cartLines().reduce(function(s,l){return s+l.line},0)}
function renderCart(){
var L=cartLines(),n=L.reduce(function(s,l){return s+l.qty},0);
updateBadge();
if(!L.length){$("cartbox").innerHTML='<p class="muted" style="padding:14px 0">Your order is empty. Add a plan or extra to see your total.</p><div class="total"><span>Total</span><b>'+money(0)+'</b></div>';return}
$("cartbox").innerHTML=L.map(function(l){return '<div class="line"><div class="ln-name">'+esc(l.name)+'<small>'+money(l.unit)+' each</small></div><div class="qty"><button class="ghost" aria-label="Remove one '+esc(l.name)+'" onclick="changeQty(\''+l.id+'\',-1)">−</button><span>'+l.qty+'</span><button class="ghost" aria-label="Add one '+esc(l.name)+'" onclick="changeQty(\''+l.id+'\',1)">+</button></div><div class="ln-total">'+money(l.line)+'</div><button class="ghost ln-x" aria-label="Remove '+esc(l.name)+'" onclick="removeItem(\''+l.id+'\')">Remove</button></div>'}).join('')+'<div class="total"><span>Total</span><b>'+money(cartTotal())+'</b></div>';
}

// ----- Receipt emails -----
function receiptText(o){
return "COMTRACK FUNERAL COVER - ORDER RECEIPT\nOrder: "+o.id+"\nDate: "+o.date+"\nStatus: "+o.status+"\n\nCustomer: "+o.name+"\nEmail: "+o.email+"\nPhone: "+o.phone+(o.notes?"\nNotes: "+o.notes:"")+"\n\nItems:\n"+o.items.map(function(i){return "- "+i.name+" x"+i.qty+" @ "+money(i.unit)+" = "+money(i.line)}).join("\n")+"\n\nTOTAL: "+money(o.total)+"\n\nWe will call you to confirm the details and payment.\nTel: "+CFG.phone+"  Email: "+CFG.email;
}
function receiptHtml(o){
var td='padding:8px;border-bottom:1px solid #e3e6e6;';
var rows=o.items.map(function(i){return '<tr><td style="'+td+'">'+esc(i.name)+'</td><td style="'+td+'text-align:center">'+i.qty+'</td><td style="'+td+'text-align:right">'+money(i.unit)+'</td><td style="'+td+'text-align:right">'+money(i.line)+'</td></tr>'}).join('');
return '<div style="font-family:Arial,sans-serif;max-width:580px;margin:auto;color:#1c2a2e;line-height:1.5"><h2 style="margin:0">Comtrack Funeral Cover</h2><p style="margin:0 0 16px;color:#58686d">Order receipt</p>'
+'<p style="margin:0"><b>Order number:</b> '+esc(o.id)+'<br><b>Date:</b> '+o.date+'<br><b>Status:</b> '+esc(o.status)+'</p>'
+'<p><b>Customer:</b> '+esc(o.name)+'<br><b>Email:</b> '+esc(o.email)+'<br><b>Phone:</b> '+esc(o.phone)+(o.notes?'<br><b>Notes:</b> '+esc(o.notes):'')+'</p>'
+'<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#f1f3f3"><th style="padding:8px;text-align:left">Item</th><th style="padding:8px">Qty</th><th style="padding:8px;text-align:right">Price</th><th style="padding:8px;text-align:right">Amount</th></tr>'+rows+'<tr><td colspan="3" style="padding:10px;text-align:right"><b>Total</b></td><td style="padding:10px;text-align:right"><b>'+money(o.total)+'</b></td></tr></table>'
+'<p style="margin-top:18px">We will call you to confirm the details and payment.</p><p style="color:#58686d;font-size:13px">Tel: '+esc(CFG.phone)+' | Email: '+esc(CFG.email)+'</p></div>';
}
function emailReady(){var c=CFG.emailjs;return window.emailjs&&c.publicKey&&c.serviceId&&c.templateId}
async function sendReceipt(o){
var text=receiptText(o);
if(!emailReady()){location.href="mailto:"+CFG.email+"?subject="+encodeURIComponent("New order "+o.id+" from "+o.name)+"&body="+encodeURIComponent(text);return "manual"}
var c=CFG.emailjs;emailjs.init({publicKey:c.publicKey});
var base={order_id:o.id,total:money(o.total),receipt_html:receiptHtml(o),receipt_text:text,customer_name:o.name,customer_email:o.email,customer_phone:o.phone,reply_to:o.email};
await emailjs.send(c.serviceId,c.templateId,Object.assign({to_email:CFG.email,to_name:"Comtrack Funeral Cover",subject:"New order "+o.id+" from "+o.name},base));
await emailjs.send(c.serviceId,c.templateId,Object.assign({to_email:o.email,to_name:o.name,subject:"Your Comtrack receipt "+o.id},base));
return "sent";
}
// ----- Auth, orders history -----
function renderAuth(){
user=ls("sf_session",null);
$("authbar").innerHTML=user?'<span class="hi">Hi, '+esc(user.name.split(" ")[0])+'</span> <button class="ghost" onclick="logout()">Log out</button>':'<button class="ghost" onclick="openAuth(\'login\')">Log in</button> <button onclick="openAuth(\'register\')">Register</button>';
if(user){$("cn").value=$("cn").value||user.name;$("ce").value=$("ce").value||user.email}
renderOrders();renderGOrders();renderSaved();
}
function normOrder(x){
var items=Array.isArray(x.items)&&x.items.length?x.items:(x.plan?[{name:x.plan,qty:1,unit:Number(x.price)||0,line:Number(x.price)||0}]:[]);
var total=x.total!=null&&!isNaN(Number(x.total))?Number(x.total):items.reduce(function(s,i){return s+(Number(i.line)||0)},0);
return{id:x.id,date:x.date||"",status:x.status||"Pending",items:items,total:total};
}
function myOrders(key){
var k=profKey(user&&user.email);
return ls(key,[]).filter(function(x){return x&&profKey(x.email)===k}).map(normOrder).reverse();
}
function ordersTable(o,head,totalHead){
return '<div class="wrap"><table><tr><th>Order</th><th>Date</th><th>'+head+'</th><th>'+totalHead+'</th><th>Status</th></tr>'+o.map(function(x){return '<tr><td>'+esc(x.id)+'</td><td>'+esc(x.date)+'</td><td>'+(x.items.map(function(i){return esc(i.name||"Item")+' x'+(Number(i.qty)||1)}).join(', ')||'-')+'</td><td>'+money(x.total)+'</td><td>'+esc(x.status)+'</td></tr>'}).join('')+'</table></div>';
}
function renderOrders(){
var box=$("ordersbox");
if(!user){box.innerHTML='<p class="muted">Log in to see your past orders.</p>';return}
try{
var o=myOrders("sf_orders");
box.innerHTML=o.length?ordersTable(o,"Items","Total"):'<p class="muted">No funeral orders yet. Add a plan above and place your first order. Grocery orders are listed under <b>Grocery orders</b>, in "Your past groceries".</p>';
}catch(e){console.error("Past orders failed",e);box.innerHTML='<p class="muted">We could not show your past orders. Please refresh the page.</p>'}
}
function openAuth(m){mode=m;setMode();$("am").textContent="";dlg.showModal()}
function toggleMode(){mode=mode==="login"?"register":"login";setMode()}
function setMode(){var r=mode==="register";$("dt").textContent=r?"Create account":"Log in";$("ab").textContent=r?"Register":"Log in";$("nameWrap").hidden=!r;$("sw").textContent=r?"Have an account? Log in":"Need an account? Register"}
async function submitAuth(){
var e=$("ae").value.trim().toLowerCase(),p=$("ap").value,n=$("an").value.trim(),users=ls("sf_users",[]);
if(!/^\S+@\S+\.\S+$/.test(e)){$("am").textContent="Enter a valid email.";return}
if(p.length<6){$("am").textContent="Password must be at least 6 characters.";return}
if(CFG.api){
if(mode==="register"&&!n){$("am").textContent="Enter your name.";return}
try{var d=await api("POST",mode==="register"?"/api/register":"/api/login",{name:n,email:e,password:p});sv("sf_session",d.user);sv("sf_token",d.token)}catch(x){$("am").textContent=x.message;return}
$("ap").value="";dlg.close();renderAuth();
if(window._placeAll){var pf=window._placeAll;window._placeAll=null;placeAll(pf)}
return}
var h=await hash(p),u=users.find(function(x){return x.email===e});
if(mode==="register"){
if(!n){$("am").textContent="Enter your name.";return}
if(u){$("am").textContent="That email is already registered.";return}
u={name:n,email:e,pw:h};users.push(u);sv("sf_users",users);
}else if(!u||u.pw!==h){$("am").textContent="Incorrect email or password.";return}
sv("sf_session",{name:u.name,email:u.email});$("ap").value="";dlg.close();renderAuth();
if(window._placeAll){var pf=window._placeAll;window._placeAll=null;placeAll(pf)}
}
function logout(){try{localStorage.removeItem("sf_session");localStorage.removeItem("sf_token")}catch(e){}renderAuth()}

// ----- Enquiries -----
function buildInterest(){$("ci").innerHTML='<option value="">No preference</option><optgroup label="Funeral plans">'+PLANS.map(function(p){return '<option value="'+esc(p.name)+'">'+esc(p.name)+'</option>'}).join('')+'</optgroup><optgroup label="Grocery plans">'+GL.map(function(L){var t="Comtrack "+L.n+" "+L.name+" grocery plan";return '<option value="'+esc(t)+'">'+esc(t)+'</option>'}).join('')+'</optgroup>'}
function enqCheck(d){
if(!d.name||!d.message)return "Please enter your name and message.";
if(d.email&&!/^\S+@\S+\.\S+$/.test(d.email))return "That email address does not look right.";
if(!d.email&&digits(d.phone).length<9)return "Please add an email address or a phone number so we can reply.";
return "";
}
function sendEnq(ch){
var d={name:$("cn").value.trim(),email:$("ce").value.trim(),phone:$("cp").value.trim(),interest:$("ci").value,message:$("cm").value.trim()};
var m=$("cmsg"),err=enqCheck(d);
m.style.color="var(--err)";
if(!err&&ch==="email"&&!d.email)err="Please add your email address first.";
if(err){m.textContent=err;return}
m.textContent="";
if(ch==="save"){proceed({type:"Enquiry",name:d.name,email:d.email,phone:d.phone,enq:{interest:d.interest,message:d.message},items:cartLines(),total:cartTotal(),gitems:gLines(),gtotal:gTotal()});return}
var body="Name: "+d.name+(d.email?"\nEmail: "+d.email:"")+(d.phone?"\nPhone: "+d.phone:"")+(d.interest?"\nInterested in: "+d.interest:"")+"\n\n"+d.message;
if(ch==="email")location.href="mailto:"+CFG.email+"?subject="+encodeURIComponent("Enquiry from "+d.name)+"&body="+encodeURIComponent(body);
else window.open("https://wa.me/"+digits(CFG.whatsapp)+"?text="+encodeURIComponent(body),"_blank");
}

// ===== Personal information pop-up (opens from "Send enquiry" and "Place order") =====
var PROVINCES=["Eastern Cape","Free State","Gauteng","KwaZulu-Natal","Limpopo","Mpumalanga","Northern Cape","North West","Western Cape"];
var KF=[
{g:"Personal details",f:[
{k:"fullName",l:"Full name and surname",ac:"name",req:1,full:1},
{k:"idType",l:"ID type",o:["South African ID","Passport","Other"],req:1},
{k:"idNumber",l:"ID or passport number",req:1},
{k:"dob",l:"Date of birth",t:"date",req:1},
{k:"gender",l:"Gender",o:["Female","Male","Other","Prefer not to say"],req:1},
{k:"race",l:"Race",o:["African","Coloured","Indian or Asian","White","Other","Prefer not to say"],req:1},
{k:"nationality",l:"Nationality",req:1},
{k:"marital",l:"Marital status",o:["Single","Married","Divorced","Widowed","Living together"],req:1},
{k:"birthPlace",l:"Place of birth (town or city, country)",req:1}]},
{g:"Contact details",f:[
{k:"phone",l:"Cell phone number",t:"tel",ac:"tel",req:1},
{k:"altPhone",l:"Alternative phone number",t:"tel"},
{k:"email",l:"Email address",t:"email",ac:"email",req:1,full:1}]},
{g:"Residential address",f:[
{k:"street",l:"Street address",ac:"street-address",req:1,full:1},
{k:"suburb",l:"Suburb",req:1},
{k:"city",l:"City or town",ac:"address-level2",req:1},
{k:"province",l:"Province",o:PROVINCES,req:1},
{k:"postal",l:"Postal code",ac:"postal-code",req:1}]},
{g:"Next of kin",f:[
{k:"kinName",l:"Next of kin: full name",req:1},
{k:"kinRel",l:"Next of kin: relationship",req:1},
{k:"kinPhone",l:"Next of kin: phone number",t:"tel",req:1}]}
];
var kctx=null,ksending=false,kdone=null;
var kdlg=$("kdlg"),sdlg=$("sdlg");
function stamp(){return new Date().toISOString().slice(2,10).replace(/-/g,"")}
function fmtWhen(d){return d.toLocaleString("en-ZA",{dateStyle:"medium",timeStyle:"short"})}
function renderKyc(){
var today=new Date().toISOString().slice(0,10);
$("kfields").innerHTML=KF.map(function(g){
return '<fieldset><legend>'+g.g+'</legend><div class="kgrid">'+g.f.map(function(f){
var id="k_"+f.k,ctl;
if(f.o)ctl='<select id="'+id+'"><option value="">Select...</option>'+f.o.map(function(o){return '<option>'+esc(o)+'</option>'}).join('')+'</select>';
else ctl='<input id="'+id+'" type="'+(f.t||"text")+'"'+(f.ac?' autocomplete="'+f.ac+'"':'')+(f.t==="date"?' max="'+today+'"':'')+'>';
return '<div class="kf'+(f.full?' full':'')+'"><label for="'+id+'">'+f.l+(f.req?' *':'')+'</label>'+ctl+'<span class="kerr" id="e_'+f.k+'"></span></div>';
}).join('')+'</div></fieldset>';
}).join('');
$("k_idType").value="South African ID";$("k_nationality").value="South African";
$("kconsent").checked=false;$("kmsg").textContent="";
}
function openKyc(ctx){
if(kdlg.open||ksending)return;
kctx=ctx;renderKyc();
var prof=ctx.type==="Profile",p=prof&&user?profileFor(user.email):null;
if(p){KF.forEach(function(g){g.f.forEach(function(f){if(p[f.k]!=null)$("k_"+f.k).value=p[f.k]})})}
else{$("k_fullName").value=ctx.name||"";$("k_email").value=ctx.email||"";$("k_phone").value=ctx.phone||""}
$("kt").textContent=prof?"Update my personal details":"Your personal information";
$("kgo").textContent=prof?"Save my details":"Submit my information";
$("ksub").textContent=prof?"Change anything that is out of date and save. Fields marked * are required.":"You only need to do this once. We remember your details on this device, so next time you can place orders and send enquiries straight away. Fields marked * are required.";
kdlg.showModal();
}
function closeKyc(){if(!ksending)kdlg.close()}
kdlg.addEventListener("cancel",function(e){if(ksending)e.preventDefault()});

function luhn(s){var sum=0,alt=false;for(var i=s.length-1;i>=0;i--){var d=+s.charAt(i);if(alt){d*=2;if(d>9)d-=9}sum+=d;alt=!alt}return sum%10===0}
function validId(type,v){
if(type==="South African ID"){
if(!/^\d{13}$/.test(v))return "A South African ID number has 13 digits.";
var mm=+v.slice(2,4),dd=+v.slice(4,6);
if(mm<1||mm>12||dd<1||dd>31||!luhn(v))return "That ID number does not look valid. Please check it.";
return "";
}
return /^[A-Za-z0-9]{6,20}$/.test(v)?"":"Enter 6 to 20 letters or numbers, without spaces.";
}
function ageOf(s){var d=new Date(s+"T00:00:00");if(isNaN(d.getTime()))return null;var t=new Date(),a=t.getFullYear()-d.getFullYear();if(t.getMonth()<d.getMonth()||(t.getMonth()===d.getMonth()&&t.getDate()<d.getDate()))a--;return a<0?null:a}
function validateKyc(){
var v={},bad=null;
KF.forEach(function(g){g.f.forEach(function(f){v[f.k]=$("k_"+f.k).value.trim()})});
function err(k,t){$("e_"+k).textContent=t;$("k_"+k).classList.toggle("bad",!!t);if(t&&!bad)bad=$("k_"+k)}
KF.forEach(function(g){g.f.forEach(function(f){err(f.k,f.req&&!v[f.k]?"Please fill this in.":"")})});
if(v.idNumber)err("idNumber",validId(v.idType,v.idNumber));
if(v.dob){var a=ageOf(v.dob);err("dob",a===null||a>120?"Enter a valid date of birth.":a<18?"You must be 18 or older to apply.":"")}
["phone","altPhone","kinPhone"].forEach(function(k){if(v[k]){var n=digits(v[k]).length;err(k,n<9||n>15?"Enter a valid phone number.":"")}});
if(v.email&&!/^\S+@\S+\.\S+$/.test(v.email))err("email","Enter a valid email address.");
if(v.postal&&!/^\d{4}$/.test(v.postal))err("postal","South African postal codes have 4 digits.");
var okc=$("kconsent").checked;
$("kmsg").textContent=okc?"":"Please tick the box to confirm and give your consent.";
if(!okc&&!bad)bad=$("kconsent");
if(bad){bad.focus();return null}
return v;
}

// ----- Record: numbered list (like a Notepad log) used in the emails and the download -----
function isOF(r){return r.type==="Order"||r.type==="Order (funeral and grocery)"}
function isOG(r){return r.type==="Grocery order"||r.type==="Order (funeral and grocery)"}
function lists(r){
var o=[];
if(r.items.length)o.push({t:isOF(r)?"Order":"Plans and extras selected (not yet ordered)",rows:r.items,total:r.total,per:""});
if(r.gitems.length)o.push({t:isOG(r)?"Grocery order":"Grocery plans selected (not yet ordered)",rows:r.gitems,total:r.gtotal,per:" per month"});
return o;
}
function recText(r){
var L=["COMTRACK FUNERAL COVER - NEW CUSTOMER RECORD","==========================================","Reference : "+r.ref,"Received  : "+fmtWhen(r.when),"Type      : "+r.type,""],n=0;
KF.forEach(function(g){L.push(g.g.toUpperCase());g.f.forEach(function(f){n++;L.push("  "+n+". "+f.l+": "+(r.v[f.k]||"-"))});L.push("")});
if(r.enq){L.push("ENQUIRY");L.push("  Plan interested in: "+(r.enq.interest||"-"));L.push("  Message: "+r.enq.message);L.push("")}
lists(r).forEach(function(l){L.push(l.t.toUpperCase());l.rows.forEach(function(i){L.push("  - "+i.name+(i.detail?" ("+i.detail+")":"")+" x"+i.qty+" @ "+money(i.unit)+l.per+" = "+money(i.line)+l.per)});L.push("  TOTAL: "+money(l.total)+l.per);L.push("")});
if(r.notes){L.push("Notes: "+r.notes);L.push("")}
L.push("Consent (POPIA): Yes, given on "+fmtWhen(r.when));
return L.join("\n");
}
function itemsTable(l){
var p='padding:7px 10px;border-bottom:1px solid #e3e6e6;font-size:14px;';
return '<table style="width:100%;border-collapse:collapse"><tr style="background:#f1f3f3"><th style="padding:7px 10px;text-align:left">Item</th><th style="padding:7px 10px">Qty</th><th style="padding:7px 10px;text-align:right">Price'+(l.per?' (per month)':'')+'</th><th style="padding:7px 10px;text-align:right">Amount</th></tr>'+l.rows.map(function(i){return '<tr><td style="'+p+'">'+esc(i.name)+(i.detail?'<br><span style="color:#58686d;font-size:12px">'+esc(i.detail)+'</span>':'')+'</td><td style="'+p+'text-align:center">'+i.qty+'</td><td style="'+p+'text-align:right">'+money(i.unit)+'</td><td style="'+p+'text-align:right">'+money(i.line)+'</td></tr>'}).join('')+'<tr><td colspan="3" style="padding:9px 10px;text-align:right"><b>'+(l.per?'Monthly total':'Total')+'</b></td><td style="padding:9px 10px;text-align:right"><b>'+money(l.total)+'</b></td></tr></table>';
}
function wrapHtml(x){return '<div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#1c2a2e;line-height:1.5">'+x+'</div>'}
function ownerHtml(r){
var td='style="padding:6px 10px;border-bottom:1px solid #e3e6e6;font-size:14px;vertical-align:top"',n=0,h3='<h3 style="margin:18px 0 6px;font-size:15px;color:#2e5b61">';
var sec=KF.map(function(g){return h3+esc(g.g)+'</h3><table style="width:100%;border-collapse:collapse">'+g.f.map(function(f){n++;return '<tr><td '+td+' width="30">'+n+'.</td><td '+td+' width="38%"><b>'+esc(f.l)+'</b></td><td '+td+'>'+esc(r.v[f.k]||"-")+'</td></tr>'}).join('')+'</table>'}).join('');
var enq=r.enq?h3+'Enquiry</h3><p style="margin:0"><b>Plan interested in:</b> '+esc(r.enq.interest||"-")+'</p><p style="margin:6px 0 0;white-space:pre-wrap"><b>Message:</b> '+esc(r.enq.message)+'</p>':'';
var ord=lists(r).map(function(l){return h3+esc(l.t)+'</h3>'+itemsTable(l)}).join('')+(r.notes?'<p style="margin:10px 0 0"><b>Notes:</b> '+esc(r.notes)+'</p>':'');
return wrapHtml('<h2 style="margin:0">New customer: '+esc(r.v.fullName)+'</h2><p style="margin:4px 0 0;color:#58686d">'+esc(r.type)+' | Reference '+esc(r.ref)+' | Received '+esc(fmtWhen(r.when))+'</p>'+sec+enq+ord+'<p style="margin-top:18px;color:#58686d;font-size:13px">Consent (POPIA) given on '+esc(fmtWhen(r.when))+'. Reply to this email to contact the customer.</p>');
}
function maskId(v){return v.idNumber?"******"+v.idNumber.slice(-4):"-"}
function custHtml(r){
var v=r.v,first=esc(v.fullName.split(" ")[0]),h3='<h3 style="margin:16px 0 6px;font-size:15px;color:#2e5b61">';
var sent=(r.enq?'<p style="margin:12px 0 0;white-space:pre-wrap"><b>Your message:</b> '+esc(r.enq.message)+'</p>':'')+lists(r).map(function(l){return h3+esc(l.t)+'</h3>'+itemsTable(l)}).join('');
return wrapHtml('<h2 style="margin:0">Comtrack Funeral Cover</h2><p style="margin:0 0 14px;color:#58686d">Confirmation</p><p>Dear '+first+',</p><p>Thank you. We have captured your information'+(r.type==="Enquiry"?'':' and your order')+'. A member of our team will contact you on <b>'+esc(v.phone)+'</b> soon.</p><p style="margin:0"><b>Reference:</b> '+esc(r.ref)+'<br><b>Type:</b> '+esc(r.type)+'<br><b>Received:</b> '+esc(fmtWhen(r.when))+'</p>'+sent+h3+'Details we have on file</h3><p style="margin:0">'+esc(v.fullName)+'<br>ID or passport: '+esc(maskId(v))+'<br>Phone: '+esc(v.phone)+'<br>Email: '+esc(v.email)+'<br>Address: '+esc(v.street+', '+v.suburb+', '+v.city+', '+v.province+', '+v.postal)+'</p><p style="margin-top:16px;color:#58686d;font-size:13px">If anything is wrong, call us on '+esc(CFG.phone)+' or reply to '+esc(CFG.email)+'.</p>');
}
function custText(r){
var v=r.v;
return "COMTRACK FUNERAL COVER - CONFIRMATION\n\nDear "+v.fullName.split(" ")[0]+",\nThank you. We have captured your information"+(r.type==="Enquiry"?"":" and your order")+". We will contact you on "+v.phone+" soon.\n\nReference: "+r.ref+"\nType: "+r.type+"\nReceived: "+fmtWhen(r.when)+lists(r).map(function(l){return "\n\n"+l.t+":\n"+l.rows.map(function(i){return i.name+" x"+i.qty+" = "+money(i.line)+l.per}).join("\n")+"\nTotal: "+money(l.total)+l.per}).join("")+"\n\nTel: "+CFG.phone+"  Email: "+CFG.email;
}

// ----- Sending (EmailJS) -----
function mailReady(){var c=CFG.emailjs;return !!(window.emailjs&&c.publicKey&&c.serviceId&&c.templateId)}
var mailInit=false;
function sendMail(to,toName,subject,html,text,replyTo,r){
var c=CFG.emailjs;if(!mailInit){emailjs.init({publicKey:c.publicKey});mailInit=true}
var p=emailjs.send(c.serviceId,c.templateId,{to_email:to,to_name:toName,subject:subject,receipt_html:html,receipt_text:text,reply_to:replyTo,order_id:r.ref,total:money(r.total),customer_name:r.v.fullName,customer_email:r.v.email,customer_phone:r.v.phone});
return Promise.race([p,new Promise(function(_,rej){setTimeout(function(){rej(new Error("Email timed out"))},25000)})]);
}
async function proceed(ctx){
if(ksending||kdlg.open)return;
var p=user?profileFor(user.email):profileFor(ctx.email);
if(!p){openKyc(ctx);return}
var v=Object.assign({},p);
if(digits(ctx.phone||"").length>=9)v.phone=ctx.phone;
ksending=true;toast("Sending...",60000);
await complete(ctx,v,false);
}
async function complete(ctx,v,enrolled){
ksending=true;
var r={ref:({"Order":"CC-","Order (funeral and grocery)":"CC-","Grocery order":"GR-"}[ctx.type]||"EQ-")+stamp()+"-"+(1000+Math.floor(Math.random()*9000)),type:ctx.type,when:new Date(),v:v,enq:ctx.enq||null,items:ctx.items||[],total:ctx.total||0,gitems:ctx.gitems||[],gtotal:ctx.gtotal||0,notes:ctx.notes||""};
var text=recText(r),ownerOk=false,custOk=false;
if(mailReady()){
try{await sendMail(CFG.email,"Comtrack Funeral Cover","New customer: "+v.fullName+" ("+r.type+") "+r.ref,ownerHtml(r),text,v.email,r);ownerOk=true}catch(e){console.error("Owner email failed",e)}
try{await sendMail(v.email,v.fullName,"We have received your information ("+r.ref+")",custHtml(r),custText(r),CFG.email,r);custOk=true}catch(e){console.error("Customer email failed",e)}
}
var saveFail=false;
if(ctx.type!=="Enquiry"){
var rec={id:r.ref,email:user.email,name:user.name,phone:v.phone,notes:r.notes,date:new Date().toISOString().slice(0,10),status:"Pending"};
if(r.items.length){var all=ls("sf_orders",[]);all.push(Object.assign({items:r.items,total:r.total},rec));if(!sv("sf_orders",all))saveFail=true;cart=[];saveCart();$("on").value="";$("op").value="";renderOrders();$("omsg").style.color="var(--mu)";$("omsg").textContent="Order "+r.ref+" placed."}
if(r.gitems.length){var go=ls("sf_gorders",[]);go.push(Object.assign({items:r.gitems,total:r.gtotal},rec));if(!sv("sf_gorders",go))saveFail=true;gcart=[];saveG();$("gon").value="";$("gop").value="";renderGOrders();$("gomsg").style.color="var(--mu)";$("gomsg").textContent="Order "+r.ref+" placed."}
}else{$("cm").value="";$("cp").value="";$("ci").value="";$("cmsg").textContent=""}
ksending=false;$("kgo").disabled=false;$("kgo").textContent="Submit my information";
if(kdlg.open)kdlg.close();
$("toast").classList.remove("show");
if(saveFail)toast("Your order was sent, but this browser could not save it to your past orders.",6000);
var masked=Object.assign({},r,{v:Object.assign({},v,{idNumber:maskId(v)})});
kdone={ref:r.ref,type:r.type,enrolled:enrolled,text:text,copy:recText(masked),ownerOk:ownerOk,custOk:custOk,v:v};
showDone();
}
async function submitKyc(ev){
ev.preventDefault();
if(ksending)return;
var v=validateKyc();if(!v)return;
var ctx=kctx;
ksending=true;$("kgo").disabled=true;$("kgo").textContent=ctx.type==="Profile"?"Saving...":"Submitting...";
saveProfile(v);
if(ctx.type==="Profile"){
var u={ref:"UPD-"+stamp()+"-"+(1000+Math.floor(Math.random()*9000)),type:"Details update",when:new Date(),v:v,enq:null,items:[],total:0,gitems:[],gtotal:0,notes:""};
if(mailReady()){try{await sendMail(CFG.email,"Comtrack Funeral Cover","Customer details updated: "+v.fullName+" "+u.ref,ownerHtml(u),recText(u),v.email,u)}catch(e){console.error("Update email failed",e)}}
ksending=false;$("kgo").disabled=false;kdlg.close();renderSaved();toast("Your details have been updated");return;
}
await complete(ctx,v,true);
}
function showDone(){
var d=kdone,first=d.v.fullName.split(" ")[0],msg;
if(d.ownerOk&&d.custOk)msg="Thank you, "+first+". A confirmation has been emailed to "+d.v.email+" and our team has been notified. We will contact you on "+d.v.phone+".";
else if(d.ownerOk)msg="Thank you, "+first+". Our team has been notified and will contact you on "+d.v.phone+". We could not send the confirmation email to "+d.v.email+", so please keep your reference.";
else msg="Thank you, "+first+". Your information has been captured, but it could not be emailed to our team automatically. Please press \"Email it to us\" so we receive it, or call us on "+CFG.phone+".";
if(d.enrolled&&!user)msg+=" To place orders, log in or register with "+d.v.email+" and you will not be asked for these details again.";
$("st").textContent=d.enrolled?"Your information has been captured":d.type==="Enquiry"?"Your enquiry has been received":"Your order has been received";
$("sm").textContent=msg;
$("sref").textContent="Reference: "+d.ref;
$("smail").hidden=d.ownerOk;
$("smail").onclick=function(){location.href="mailto:"+CFG.email+"?subject="+encodeURIComponent("New customer: "+d.v.fullName+" ("+d.ref+")")+"&body="+encodeURIComponent(d.text)};
$("sdl").onclick=downloadRecord;
sdlg.showModal();$("sok").focus();
}
function closeDone(){sdlg.close()}
sdlg.addEventListener("close",function(){kdone=null});
function downloadRecord(){
if(!kdone)return;
var b=new Blob([kdone.copy.replace(/\n/g,"\r\n")],{type:"text/plain;charset=utf-8"});
var a=document.createElement("a");a.href=URL.createObjectURL(b);a.download="Comtrack-"+kdone.ref+".txt";
document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove()},500);
}

// ===== Saved personal details: asked for once, then reused =====
function profKey(e){return String(e||"").trim().toLowerCase()}
function profiles(){return ls("sf_profiles",{})}
function profileFor(e){var k=profKey(e);return k?(profiles()[k]||null):null}
function saveProfile(v){
var all=profiles(),p=JSON.parse(JSON.stringify(v));
[profKey(v.email),user?profKey(user.email):""].forEach(function(k){if(k)all[k]=p});
sv("sf_profiles",all);renderSaved();
}
function removeSaved(){
if(!user||!confirm("Remove your saved personal details from this device? You will be asked for them again next time."))return;
var all=profiles(),p=all[profKey(user.email)];
Object.keys(all).forEach(function(k){if(k===profKey(user.email)||(p&&k===profKey(p.email)))delete all[k]});
sv("sf_profiles",all);renderSaved();toast("Your saved details were removed");
}
function editProfile(){if(user&&profileFor(user.email))openKyc({type:"Profile"})}
function renderSaved(){
var b=$("savedbox");
if(!user){b.innerHTML='<ion-icon name="lock-closed-outline"></ion-icon><p>Log in to place orders. You will be asked for your personal details <b>once only</b>, with your first order or enquiry.</p>';return}
var p=profileFor(user.email);
b.innerHTML=p?'<ion-icon name="shield-checkmark-outline"></ion-icon><p><b>Your personal details are saved on this device</b> ('+esc(p.fullName)+'). We use them automatically for your orders and enquiries, so you never have to enter them again.</p><div class="row"><button class="ghost" onclick="editProfile()">Update my details</button><button class="ghost" onclick="removeSaved()">Remove saved details</button></div>':'<ion-icon name="information-circle-outline"></ion-icon><p>You will be asked for your personal details <b>once only</b>, with your first order or enquiry. After that, orders and enquiries are sent straight away.</p>';
}

// ===== One combined order: funeral and grocery selections travel together =====
function sumText(){
var nL=cartLines().reduce(function(s,l){return s+l.qty},0),nG=gLines().reduce(function(s,l){return s+l.qty},0),a=[];
if(nL)a.push("funeral order ("+nL+" item"+(nL>1?"s":"")+")");
if(nG)a.push("grocery order ("+nG+" plan"+(nG>1?"s":"")+")");
return a.length?(a.length>1?"Sending together in one order: ":"Sending: ")+a.join(" and "):"";
}
function placeAll(from){
var mo=$("omsg"),mg=$("gomsg"),m=from==="grocery"?mg:mo;
mo.style.color=mg.style.color="var(--err)";mo.textContent=mg.textContent="";
if(!user){window._placeAll=from;openAuth("login");return}
var L=cartLines(),G=gLines();
if(!L.length&&!G.length){m.textContent=from==="grocery"?"Add at least one grocery plan first.":"Add at least one plan or extra first.";return}
var phs=from==="grocery"?[$("gop").value,$("op").value]:[$("op").value,$("gop").value];
var ph=phs.map(function(x){return x.trim()}).filter(function(x){return digits(x).length>=9})[0];
var p=profileFor(user.email);
if(!ph&&p&&digits(p.phone||"").length>=9)ph=p.phone;
if(!ph){m.textContent="Enter a phone number so we can call you.";return}
var notes=[$("on").value.trim(),$("gon").value.trim()].filter(Boolean).join(" | ");
proceed({type:L.length&&G.length?"Order (funeral and grocery)":G.length?"Grocery order":"Order",name:user.name,email:user.email,phone:ph,items:L,total:cartTotal(),gitems:G,gtotal:gTotal(),notes:notes});
}
function placeOrder(){placeAll("funeral")}
function placeGrocery(){placeAll("grocery")}
var omarket="funeral";
function setOrderMarket(m){
if(m===omarket)return;omarket=m;
["funeral","grocery"].forEach(function(k){var t=$("otab-"+k),on=k===m;t.classList.toggle("on",on);t.setAttribute("aria-selected",on)});
function go(){var g=m==="grocery";$("orders").classList.toggle("is-grocery",g);$("opanel-funeral").hidden=g;$("opanel-grocery").hidden=!g;$("opanels").classList.remove("swap")}
if(still)go();else{$("opanels").classList.add("swap");setTimeout(go,220)}
}

// ----- Start -----
cart=ls("sf_cart",[]);
buildPicker();buildGPickers();buildInterest();renderPlans();renderCart();renderGCart();renderAuth();
if(CFG.api)api("GET","/api/catalog").then(function(d){d.items.forEach(function(i){if(CAT[i.id])CAT[i.id].price=i.price});buildPicker();renderPlans();renderCart();layout()}).catch(function(){});

// ----- Sliding plans: arrows, swipe, dots and auto-slide -----
var still=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
var vp=$("planvp"),trk=$("plangrid"),pi=0,GAP=16,hov=false,last=0,sx=null;
function perView(){var w=vp.clientWidth;return w>=900?3:w>=560?2:1}
function planCount(){return market==="grocery"?GL.length:PLANS.length}
function maxIdx(){return Math.max(0,planCount()-perView())}
function goTo(i){
pi=Math.max(0,Math.min(i,maxIdx()));
trk.style.transform="translateX("+(-pi*(trk.firstElementChild.offsetWidth+GAP))+"px)";
[].forEach.call($("plandots").children,function(d,k){d.classList.toggle("on",k===pi)});
}
function layout(){
var pv=perView(),w=(vp.clientWidth-GAP*(pv-1))/pv;
[].forEach.call(trk.children,function(c){c.style.flex="0 0 "+w+"px"});
$("plandots").innerHTML=Array.apply(null,Array(maxIdx()+1)).map(function(_,k){return '<button aria-label="Show plans from number '+(k+1)+'" onclick="goTo('+k+');last=Date.now()"></button>'}).join("");
goTo(pi);
}
function slidePlans(d){var m=maxIdx();pi=d>0?(pi>=m?0:pi+1):(pi<=0?m:pi-1);goTo(pi);last=Date.now()}
layout();
window.addEventListener("resize",layout);
vp.addEventListener("mouseenter",function(){hov=true});
vp.addEventListener("mouseleave",function(){hov=false});
vp.addEventListener("focusin",function(){hov=true});
vp.addEventListener("focusout",function(){hov=false});
vp.addEventListener("pointerdown",function(e){sx=e.clientX});
vp.addEventListener("pointerup",function(e){if(sx!==null&&Math.abs(e.clientX-sx)>40)slidePlans(e.clientX<sx?1:-1);sx=null});
vp.addEventListener("pointercancel",function(){sx=null});
if(!still)setInterval(function(){
if(hov||pdlg.open||document.hidden||Date.now()-last<3500)return;
slidePlans(1);
},4000);

// ----- Hero pictures slide in from the right -----
var sl=document.querySelectorAll(".slide"),si=0,ht,hd=$("hdots");
hd.innerHTML=[].map.call(sl,function(_,k){return '<button aria-label="Show picture '+(k+1)+'" onclick="heroGo('+k+',true)"></button>'}).join("");
function markHero(){[].forEach.call(hd.children,function(d,k){d.classList.toggle("on",k===si)})}
function heroGo(n,manual){
if(n===si)return;
var cur=sl[si],nx=sl[n];
nx.style.transition="none";nx.style.transform="translateX(100%)";nx.offsetWidth;
nx.style.transition="";cur.style.transform="translateX(-100%)";nx.style.transform="translateX(0)";
si=n;markHero();
if(manual)startHero();
}
function startHero(){clearInterval(ht);if(!still&&sl.length>1)ht=setInterval(function(){heroGo((si+1)%sl.length)},5500)}
markHero();startHero();

// ----- Back to top button -----
var tt=$("totop");
function onScroll(){tt.classList.toggle("show",window.scrollY>400)}
window.addEventListener("scroll",onScroll,{passive:true});onScroll();
tt.addEventListener("click",function(){window.scrollTo({top:0,behavior:still?"auto":"smooth"})});


// ----- Highlight the menu link of the section you are viewing -----
var navLinks=[].slice.call(document.querySelectorAll('.menu a[href^="#"]'));
var navSecs=navLinks.map(function(a){return document.querySelector(a.getAttribute("href"))});
function spy(){
var y=window.scrollY+130,cur=-1;
navSecs.forEach(function(s,i){if(s&&s.offsetTop<=y)cur=i});
if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-4)cur=navLinks.length-1;
navLinks.forEach(function(a,i){var on=i===cur;a.classList.toggle("active",on);if(on)a.setAttribute("aria-current","true");else a.removeAttribute("aria-current")});
}
window.addEventListener("scroll",spy,{passive:true});window.addEventListener("resize",spy);spy();
