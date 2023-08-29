const img = [
    {'id': '1', 'url': './img/1.png'},
    {'id': '2', 'url': './img/2.png'},
    {'id': '3', 'url': './img/3.png'},
    {'id': '4', 'url': './img/4.png'}
];

const pai = document.querySelector('.container-items');

for (const imagem of img){
    pai.innerHTML +=  `
    <div class='item'>
        <img src='${imagem.url}'>
    </div>
    `
}

const botao = document.querySelectorAll('.action-button');
let items = document.querySelectorAll('.item')
for(const btn of botao){
    btn.addEventListener('click', function(){

        if(btn.id == 'next'){

            pai.appendChild(items[0]);
            items = document.querySelectorAll('.item');
        }else{
            const lastItem = items[items.length - 1];
            console.log(lastItem)
            pai.insertBefore(lastItem, items[0]);
            items = document.querySelectorAll('.item');

        }
    })
}
