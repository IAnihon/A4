let allJobCount = getId('all-job-count');
 let interviewCount= getId('Interview-count');
 let rejectedCount= getId('Rejected-count');
 let allJobList=[];
 let interviewList =[];
 let rejectedList =[];
 const main=getId('main');
 let cardContainer = getId('card-section')
const allBtn = getId('all-btn');
const interviewBtn = getId('interview-top-btn');
const rejectBtn = getId('reject-top-btn');
const filterSection = getId('filter-section');
const noJobSection = getId('no-job');
let  currentStatus ='all-btn';


let upCount = getId('up-job-count')
// done 1
function getId(id){
    return document.getElementById(id);
}


// new code

function view(){

 if(currentStatus ==='all-btn'){
  cardContainer.classList.remove('hidden');
  noJobSection.classList.add('hidden');
  filterSection.classList.add('hidden');
 }
 
 else if(currentStatus ==='reject-top-btn'){
  
  if(rejectedList.length == 0){
    cardContainer.classList.add('hidden');
    noJobSection.classList.remove('hidden');
    filterSection.classList.add('hidden')
  }
  else{
    cardContainer.classList.add('hidden');
    filterSection.classList.remove('hidden');
      noJobSection.classList.add('hidden');
  }
  renderReject()

 }
 else if(currentStatus ==='interview-top-btn'){
  if(interviewList.length == 0){
    cardContainer.classList.add('hidden');
    noJobSection.classList.remove('hidden');
    filterSection.classList.add('hidden');
  }
  else{
    cardContainer.classList.add('hidden');
    filterSection.classList.remove('hidden');
     noJobSection.classList.add('hidden');
  }
  renderInterview()
  

 }

}

function toggle(id){
allBtn.classList.remove('bg-blue-500', 'text-white');
interviewBtn.classList.remove('bg-blue-500', 'text-white');
rejectBtn.classList.remove('bg-blue-500', 'text-white');


allBtn.classList.add('bg-white', 'text-[#64748B]');
interviewBtn.classList.add('bg-white', 'text-[#64748B]');
rejectBtn.classList.add('bg-white', 'text-[#64748B]');
 const selected = getId(id);
 currentStatus=id;
 selected.classList.remove('bg-white', 'text-[#64748B]');
 selected.classList.add('bg-blue-500', 'text-white');
 if(id=='all-btn'){
  cardContainer.classList.remove('hidden');
  noJobSection.classList.add('hidden');
  filterSection.classList.add('hidden');
 }
 
 else if(id=='reject-top-btn'){
  
  if(rejectedList.length == 0){
    cardContainer.classList.add('hidden');
    noJobSection.classList.remove('hidden');
    filterSection.classList.add('hidden')
  }
  else{
    cardContainer.classList.add('hidden');
    filterSection.classList.remove('hidden');
      noJobSection.classList.add('hidden');
  }
  renderReject()

 }
 else if(id=='interview-top-btn'){
  if(interviewList.length == 0){
    cardContainer.classList.add('hidden');
    noJobSection.classList.remove('hidden');
    filterSection.classList.add('hidden');
  }
  else{
    cardContainer.classList.add('hidden');
    filterSection.classList.remove('hidden');
     noJobSection.classList.add('hidden');
  }
  renderInterview()
  

 }
 cj();

}








 function calculateCount(){
    allJobCount.innerText = cardContainer.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
    
 }
 calculateCount();





//  btn clicking
 main.addEventListener("click",function(id){

if(id.target.classList.contains('interview-btn')){

const parentNode = id.target.parentNode.parentNode;
const jobName = parentNode.querySelector('.job-name').innerText;
const job = parentNode.querySelector('.job').innerText;
const salary = parentNode.querySelector('.salary').innerText;
const info = parentNode.querySelector('.info').innerText;
const status = parentNode.querySelector('.status');
status.innerText = 'Interview';



const cardinfo ={
  jobName,
  job,
  salary,
  info,
  status :"Interview"
}
const jobExist = interviewList.find(item=> item.jobName == cardinfo.jobName);
if(!jobExist){
  interviewList.push(cardinfo);
}
rejectedList=rejectedList.filter(item => item.jobName !== cardinfo.jobName);

if(currentStatus=== 'reject-top-btn'){
  renderReject()

}
view();
cj();
calculateCount();
syncAllCard(jobName, 'Interview');



 }

else if(id.target.classList.contains('reject-btn')){

const parentNode = id.target.parentNode.parentNode;
const jobName = parentNode.querySelector('.job-name').innerText;
const job = parentNode.querySelector('.job').innerText;
const salary = parentNode.querySelector('.salary').innerText;
const info = parentNode.querySelector('.info').innerText;
const status = parentNode.querySelector('.status');
status.innerText = 'Rejected';



const cardinfo ={
  jobName,
  job,
  salary,
  info,
  status :"Rejected"
}
const jobExist = rejectedList.find(item=> item.jobName == cardinfo.jobName);
if(!jobExist){
  rejectedList.push(cardinfo);
}
interviewList=interviewList.filter(item => item.jobName !== cardinfo.jobName);

if(currentStatus=== 'interview-top-btn'){
  renderInterview()

}
cj();
view();
syncAllCard(jobName, 'Rejected');

calculateCount();
 }


}
 )

//  delete button working

main.addEventListener("click",function(id){
  const deletebtn = id.target.closest('.delete-btn')


  if(deletebtn){
 const parentNode = deletebtn.parentNode.parentNode;
  const jobName = parentNode.querySelector('.job-name').innerText;
parentNode.remove();

for(let l of cardContainer.children){
const name= l.querySelector('.job-name').innerText;
if(name === jobName){
  l.remove();
  break;
  cj();

}
}

  allJobList = allJobList.filter(item => item.jobName !== jobName);
  interviewList = interviewList.filter(item => item.jobName !== jobName);
  rejectedList = rejectedList.filter(item => item.jobName !== jobName);
  calculateCount();
  jc();
  toggle(currentStatus);
  }
 
  
 

})


// Interview section update
 function renderInterview(){

filterSection.innerHTML = '';
for(let rest of interviewList){
const div = document.createElement('div');
 div.className ="bg-white  border-l-5 border-green-300 p-6 flex rounded-lg shadow-sm  mb-4 justify-between";
 div.innerHTML =` 
 <div id="" class="space-y-1   ">
                <p class="text-[18px] job-name font-semibold text-[#002C5C]">${rest.jobName}</p>
                <p class="text-[14px] job pb-3 text-[#64748B]">${rest.job}</p>
                <p class="text-[14px] salary text-[#64748B]">${rest.salary}</p>
                <p class="text-[14px]  bg-green-50 text-green-600 font-semibold   px-2 rounded-md py-2 w-[100px] text-center status" >INTERVIEW</p>
                <p class="text-[14px] info text-[#323B49] ">${rest.info}</p>
                <div class="mt-3">
                        <button class="bg-white border font-bold border-green-500 text-green-600 px-4 py-1 rounded-md text-[14px] interview-btn">INTERVIEW</button>
                    <button class="bg-white border font-semibold border-red-500 text-red-500 px-4 py-1 reject-btn rounded-md text-[14px]">REJECTED</button>
                     </div>

   </div>
   <!-- delete button -->
             <div>
                    <button class="bg-white rounded-full delete-btn shadow-sm p-2 opacity-45"> <span><i class="fa-regular fa-trash-can"></i></span></button>
                 </div>
            </div>
 
 `

filterSection.appendChild(div);
}
 
 }


//  reject section 

function renderReject(){

filterSection.innerHTML = '';
for(let S of rejectedList){
   const div = document.createElement('div');
 div.className ="bg-white  border-l-4 border-red-300 p-5 flex rounded-lg shadow-sm  mb-4 justify-between";
 div.innerHTML =` 
 <div id="" class="space-y-1   ">
                <p class="text-[18px] job-name font-semibold text-[#002C5C]">${S.jobName}</p>
                <p class="text-[14px] job pb-3 text-[#64748B]">${S.job}</p>
                <p class="text-[14px] salary text-[#64748B]">${S.salary}</p>
                <p class="text-[14px]  bg-red-50 text-red-600  font-bold px-1  rounded-md py-1 w-[100px] text-center status" >REJECTED</p>
                <p class="text-[14px] info text-[#323B49] ">${S.info}</p>
                <div class="mt-3">
                        <button class="bg-white border font-semibold border-green-500 text-green-500 px-4 py-1 rounded-md text-[14px] interview-btn">INTERVIEW</button>
                    <button class="bg-white border font-semibold border-red-500 text-red-500 px-4 py-1 rounded-md text-[14px]">REJECTED</button>
                    </div>

   </div>
   <!-- delete button -->
             <div>
                    <button class="bg-white delete-btn rounded-full shadow-sm p-2 opacity-45"> <span><i class="fa-regular fa-trash-can"></i></span></button>
                 </div>
            </div>
 
 `

filterSection.appendChild(div);


 }
}
// push all job in the list
function JobLists (){
const cards = cardContainer.children;
for(let card of cards){
  const jobName= card.querySelector('.job-name').innerText;
  const job = card.querySelector('.job').innerText;
  const salary = card.querySelector('.salary').innerText;
  const info = card.querySelector('.info').innerText;
  allJobList.push({
    jobName,
    job,
    salary,
    status: 'Not Applicable',
    info,
  });

}
jc();



}
JobLists();

function jc(){
  upCount.innerText = cardContainer.children.length;
  
}
const  Cj = document.querySelector('.current-jobs');
const hid = document.querySelector('.hid')
function cj(){

  if(currentStatus === 'all-btn'){
    Cj.classList.add('hidden')
    hid.classList.add('hidden')

  } else if(currentStatus === 'interview-top-btn') {
    Cj.classList.remove('hidden');
    hid.classList.remove('hidden');
    Cj.innerText = interviewList.length;
  } else if(currentStatus === 'reject-top-btn') {
    Cj.classList.remove('hidden');
    hid.classList.remove('hidden');
    Cj.innerText = rejectedList.length;
  }
}
cj();

function syncAllCard(jobName, type) {
  for (const card of cardContainer.children) {
    const name = card.querySelector('.job-name')?.innerText;
    if (name !== jobName) continue;

    const status = card.querySelector('.status');
    status.innerText = type;

    card.classList.remove('border-green-300', 'border-red-300');
    status.classList.remove(
      'bg-[#EEF4FF]', 'text-[#002C5C]', 'font-medium',
      'bg-green-50', 'text-green-400', 'text-green-600',
      'bg-red-50', 'text-red-600',
      'font-semibold', 'font-bold'
    );

    if (type === 'Interview') {
      card.classList.add('border-l-4', 'border-green-300');
      status.classList.add('bg-green-50', 'text-green-600', 'font-bold');
    } else {
      card.classList.add('border-l-4', 'border-red-300');
      status.classList.add('bg-red-50', 'text-red-600', 'font-bold');
    }
    break;
  }
}


// new code

function view(){

 if(currentStatus ==='all-btn'){
  cardContainer.classList.remove('hidden');
  noJobSection.classList.add('hidden');
  filterSection.classList.add('hidden');
 }
 
 else if(currentStatus ==='reject-top-btn'){
  
  if(rejectedList.length == 0){
    cardContainer.classList.add('hidden');
    noJobSection.classList.remove('hidden');
    filterSection.classList.add('hidden')
  }
  else{
    cardContainer.classList.add('hidden');
    filterSection.classList.remove('hidden');
      noJobSection.classList.add('hidden');
  }
  renderReject()

 }
 else if(currentStatus ==='interview-top-btn'){
  if(interviewList.length == 0){
    cardContainer.classList.add('hidden');
    noJobSection.classList.remove('hidden');
    filterSection.classList.add('hidden');
  }
  else{
    cardContainer.classList.add('hidden');
    filterSection.classList.remove('hidden');
     noJobSection.classList.add('hidden');
  }
  renderInterview()
  

 }

}