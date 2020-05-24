let bgColors = ['bgc_red','bgc_blue','bgc_green','bgc_black','bgc_yellow','bgc_pink','bgc_wite','bgc_indigo','bgc_teal'];
let fontColors = ['fc_red','fc_blue','fc_green','fc_black','fc_yellow','fc_pink','fc_wite','fc_indigo','fc_teal'];

let getSel = sel => document.querySelector(sel);
let getSelAll = sel => document.querySelectorAll(sel);

// функціонал кнопки EDIT
getSel('.edit').addEventListener('click', function(){
    getSel('textarea').value = getSel('.screenBox').innerHTML;
    getSel('textarea').classList.remove('hide');
    getSel('.eddsaveButton').classList.remove('hide');
    getSel('.editBox').classList.remove('hide');
    getSel('.styleBox').classList.add('hide');
});

// функціонал кнопки SAVE
getSel('.save').addEventListener('click', function(){
    getSel('.screenBox').innerHTML = getSel('textarea').value;
    getSel('textarea').classList.add('hide');
    getSel('.eddsaveButton').classList.add('hide');
})

// функціонал кнопки STYLE
getSel('.style').addEventListener('click', function(){
    getSel('.editBox').classList.add('hide');
    getSel('.styleBox').classList.remove('hide');
})

// функціонал radio-button FONT SIZE
let fontSizeForm = document.forms['fontSizeForm'];
for(let i = 0; i < fontSizeForm.elements.length; i++){
    fontSizeForm.elements[i].addEventListener('click', function(){
        getSel('.screenBox').style.fontSize = fontSizeForm.elements[i].value;
    })
}

// функціонал list FONT FAMILY
let fontFamilyForm = document.forms['fontFamilyForm'];
fontFamilyForm.fontFamilySelect.addEventListener('change', function(){
    document.querySelector('.screenBox').style.fontFamily = this.value;
})

// функціонал кнопки Color of Text
getSel('.colorOfText').addEventListener('click', function(){
    getSel('.paletteColor').classList.remove('hide');
    for(let i = 0; i < getSelAll('.colorBox').length; i++){
        getSelAll('.colorBox')[i].classList.add(bgColors[i]);
        getSelAll('.colorBox')[i].onclick = function(){
            for(let j = 0; j < fontColors.length; j++){
                getSel('.screenBox').classList.remove(fontColors[j]);
            }
            getSel('.screenBox').classList.add(fontColors[i]);
            getSel('.paletteColor').classList.add('hide');
        }
    }
})

// функціонал кнопки Background color
getSel('.backgroundColor').addEventListener('click', function(){
    getSel('.paletteColor').classList.remove('hide');
    for(let i = 0; i < getSelAll('.colorBox').length; i++){
        getSelAll('.colorBox')[i].classList.add(bgColors[i]);
        getSelAll('.colorBox')[i].onclick = function(){
            for(let j = 0; j < bgColors.length; j++){
                getSel('.screenBox').classList.remove(bgColors[j]);
            }
            getSel('.screenBox').classList.add(bgColors[i]);
            getSel('.paletteColor').classList.add('hide');
        }
    }
})

// функціонал radio-button FONT STYLE
let formStyle = document.forms['formStyle'];
for(let i = 0; i < formStyle.elements.length; i++){
    formStyle.elements[i].addEventListener('click', function(){
        getSel('.screenBox').classList.toggle(formStyle.elements[i].value); 
    })
}

// функціонал кнопки ADD
getSel('.add').addEventListener('click', function(){
    getSel('.mainPage').classList.add('hide');
    getSel('.addPage').classList.remove('hide');
})

// функціонал radio-button TABLE/LIST
let tableVSlist = document.forms['tableVSlist'];
for(let i = 0; i < tableVSlist.elements.length; i++){
    tableVSlist.elements[i].addEventListener('click', function(){
        if (tableVSlist.elements[i].checked && tableVSlist.elements[i].value == 'tableParam'){
            getSel('.tableParam').classList.remove('hide');
            getSel('.listParam').classList.add('hide');
        }
        else if (tableVSlist.elements[i].checked && tableVSlist.elements[i].value == 'listParam'){
            getSel('.listParam').classList.remove('hide');
            getSel('.tableParam').classList.add('hide');
        }
    })
}

// функціонал кнопки Cteate Table
getSel('.CreateTable').addEventListener('click', function(){
    getSel('.addPage').classList.add('hide');
    getSel('.mainPage').classList.remove('hide');

    let countTr = document.forms['tableParam'].Count_TR.value; 
    let countTd = document.forms['tableParam'].Count_TD.value;

    let tdStyle = `style="width: ${document.forms['tableParam'].Width_of_TD.value}px; height:${document.forms['tableParam'].Height_of_TD.value}px; border: ${document.forms['tableParam'].Width_of_border.value}px ${document.forms['tableParam'].Type_of_border.value} ${document.forms['tableParam'].Color_of_border.value}"`;   

    let tagTr = '';
    let tagTd = '';

    for(let i = 0; i < countTd; i++ ){
        tagTd += `<td ${tdStyle}>TD</td>`;
    }
    for(let i = 0; i < countTr; i++ ){
        tagTr += `<tr>${tagTd}</tr>`;
    }
    console.log(tagTr);
    let tableDone = `<table><tbody>${tagTr}</tbody></table>`;

    getSel('.textarea').value = getSel('.screenBox').innerHTML;
    getSel('textarea').value += tableDone;
})

// функціонал кнопки Cteate List
getSel('.createList').addEventListener('click',function(){
    getSel('.addPage').classList.add('hide');
    getSel('.mainPage').classList.remove('hide');

    let countLi = document.forms['liParam'].countLi.value;
    let tegLi = '';
    for(let i = 0; i < countLi; i++){
        tegLi += `<li>Item ${i+1}</li>`;
    }

    let typeLi = `type="${document.forms['liParam'].typeOfMarks.value}"`;
    let ulDone = `<ul ${typeLi}> ${tegLi} </ul>`;
    
    getSel('textarea').value = getSel('.screenBox').innerHTML;
    getSel('textarea').value += ulDone;
})