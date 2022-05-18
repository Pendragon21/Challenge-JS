function handleEventText(){
    let i = document.createElement('form')
    let text = document.createElement('input');
    text.setAttribute('type', 'text');
    text.setAttribute('id', 'eventtext');
    text.setAttribute('placeholder', 'insert a text');

    i.appendChild(text);
    document.getElementById('InputsWrapper').appendChild(i);

 }

 function handleEventCombo(){
    let i = document.createElement('form')
    let combo = document.createElement('select');
    combo.setAttribute('id','comboBox')
    let options = document.createElement('option');
    combo.setAttribute('class', 'combo');
    options.setAttribute('value', 'select');
    options.innerHTML += "select..."

    i.appendChild(combo);
    combo.appendChild(options);
    document.getElementById('InputsWrapper').appendChild(i);
 }

 function handleEventList(){
    let i = document.createElement('form')
    let unordenedList = document.createElement('ul');
    unordenedList.setAttribute('id', 'unordenedList');
    let list = document.createElement('li');
    list.innerHTML += "simple list"

    i.appendChild(unordenedList);
    unordenedList.appendChild(list);
    document.getElementById('InputsWrapper').appendChild(i);
 }
