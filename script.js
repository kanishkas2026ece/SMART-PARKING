const lots=[
{id:1,name:"City Centre Parking",place:"Main road · Near shopping district",price:30,free:12,total:20},
{id:2,name:"Metro Station Parking",place:"Metro entrance · Transit hub",price:20,free:8,total:15},
{id:3,name:"College Campus Parking",place:"Campus gate · Student parking",price:15,free:4,total:12}
];
let activeFilter="all",selected=null;
function renderLots(){
 const q=document.getElementById('search').value.toLowerCase();
 const filtered=lots.filter(l=>(l.name+" "+l.place).toLowerCase().includes(q)&&(activeFilter==="all"||(activeFilter==="available"&&l.free>0)||(activeFilter==="low"&&l.price<30)));
 document.getElementById('lots').innerHTML=filtered.length?filtered.map(l=>`<article class="lot"><div class="lot-title"><div><h3>${l.name}</h3><p>⌖ ${l.place}</p></div><span class="status ${l.free===0?'full':l.free<5?'limited':'available'}">${l.free===0?'FULL':l.free<5?'LIMITED':'AVAILABLE'}</span></div><div class="lot-bottom"><div class="spaces"><strong>${l.free}</strong> / ${l.total} spaces free<br><span>₹${l.price} per hour</span></div><button class="book" ${l.free===0?'disabled':''} onclick="openModal(${l.id})">${l.free===0?'Full':'Book slot'}</button></div></article>`).join(''):'<p style="color:#718096">No matching parking locations found.</p>';
 const total=lots.reduce((s,l)=>s+l.free,0);document.getElementById('totalAvailable').textContent=total;
}
document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');activeFilter=b.dataset.filter;renderLots()}));
document.getElementById('search').addEventListener('input',renderLots);
function openModal(id){selected=lots.find(l=>l.id===id);document.getElementById('modalInfo').textContent=`${selected.name} · ₹${selected.price} per hour · ${selected.free} spaces currently free.`;document.getElementById('modal').classList.add('show')}
function closeModal(){document.getElementById('modal').classList.remove('show')}
function confirmBooking(){const vehicle=document.getElementById('vehicle').value.trim().toUpperCase();const duration=Number(document.getElementById('duration').value);if(!vehicle){toast('Please enter your vehicle number.');return}if(!Number.isInteger(duration)||duration<1||duration>24){toast('Enter a duration between 1 and 24 hours.');return}if(!selected||selected.free<1){closeModal();toast('Sorry, this location is full.');return}selected.free--;const amount=selected.price*duration;closeModal();renderLots();toast(`Demo booking confirmed for ${vehicle}. Estimated fee: ₹${amount}.`)}
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3500)}
renderLots();
