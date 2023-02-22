const imageList =  document.querySelector('.image-list');
const btns = document.querySelectorAll('.view-options button');
const imageListItems = document.querySelectorAll('.image-list li');
const rangeInput = document.querySelector('input[type="range"]');
const active = 'active';
const listView = 'list-view';
const gridView = 'grid-view';
const dNone = 'd-none';



console.log(btns);
/*
for(let i = 0; i<btns.length;i++){
    btns[i].addEventListener('click',()=>{})
}

btns.forEach((item,idx,all)=>{
    item.addEventListener('click',()=>{})
})
*/
for(let btn of btns){
    btn.addEventListener('click',e=>{
        let parent = e.currentTarget.parentElement;
        document.querySelector('.view-options .active').classList.remove('active');
        parent.classList.add('active');
        
        if(parent.classList.contains('show-list')){
            parent.previousElementSibling.previousElementSibling.classList.add(dNone);
            imageList.className = 'image-list';
            imageList.classList.add(listView);
        }else{
            parent.previousElementSibling.classList.remove(dNone);
            imageList.className = 'image-list';
            imageList.classList.add(gridView);
        }    

    }) //btn 클릭 이벤트
}

rangeInput.addEventListener('change',(e)=>{
    console.log(e.target.value);
    document.documentElement.style.setProperty('--minRangeValue',`${e.target.value}px`);
});

const captions = document.querySelectorAll('.image-list figcaption p:first-child');
const myArray = [];

let counter = 1;
for(let caption of captions){
    myArray.push({
        id:counter++,
        text:caption.innerText
    })
}
console.log(myArray);

const searchInput = document.querySelector('input[type="search"]');
const resultCount = document.querySelector('.counter span');

searchInput.addEventListener('input', keyupHandler);
function keyupHandler(){
    // 리스트 모두 안보이도록 imageListItems
    for(let item of imageListItems){
        item.classList.add(dNone);
    }
    let keywords = this.value;
    
    let filteredArray = myArray.filter(el=>
        el.text.toLowerCase().includes(keywords.toLowerCase())
    );
    console.log(filteredArray);
    // 검색 결과가 있다면 filteredArray.length > 0
    // id:8 imageListItems[7]
    if(filteredArray.length > 0){
        for(let array of filteredArray){
            imageListItems[array.id-1].classList.remove(dNone);
        }
    }
    resultCount.innerText = filteredArray.length;
}


/*
var arr = [3,5,9,20,25];
var arr2 = arr.filter(n => n%5 == 0);
*/

