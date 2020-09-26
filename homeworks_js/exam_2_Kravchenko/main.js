$(function(){
// стилізація тексту
    $(".custom-checkbox").change(function () { 
        let textDecoration;
        if($("#underline").prop("checked") && $("#line-through").prop("checked")) textDecoration = 'underline line-through';
        else if ($("#underline").prop("checked")) textDecoration = 'underline';
        else if ($("#line-through").prop("checked")) textDecoration = 'line-through';
        else textDecoration = '';
        let fontParam = {
            'font-weight': $("#bold").prop("checked")?$("#bold").val(): '',
            'font-style': $("#italic").prop("checked")?$("#italic").val(): '',
            'text-decoration': textDecoration
        }
        $("#textarea").css(fontParam);
    });
// вирівнювання тексту
    $('.custom-rb').click(function () { 
        let lcr = $("input:radio:checked").val();
        $("#textarea").css('text-align', lcr);
    });
// випадаюче меню типів шрифту 
    $(".jqButtonFstyle").click(function () { 
        $(".jqHideFstyle").toggle();
        });
        $(document).mouseup(function (e){
            let div = $(".jqHideFstyle");
            if (!div.is(e.target) && div.has(e.target).length === 0) div.hide();
        });
        $(".fontStyleList > span").click(function () { 
            $(".jqHideFstyle").hide();
            let ff = $(this).html();
            $("#textarea").css('font-family', ff);
        });
// випадаюче меню розміру шрифту     
    $(".jqButtonFsize").click(function () { 
        $(".jqHideFsize").toggle();
        });
        $(document).mouseup(function (e){
            let div = $(".jqHideFsize");
            if (!div.is(e.target) && div.has(e.target).length === 0) div.hide();
        });
        $(".fontSizeList > span").click(function () { 
            $(".jqHideFsize").hide();
            let fs = $(this).html();
            $("#textarea").css('font-size', fs);
        });
// модальне вікно кольору тексту
    $(".jqBtnModTxtClr").click(function () {
        $("#myOverlay").fadeIn(297, function(){
            $(".ModTxtClr").css('display', 'block').animate({opacity: 1}, 198);
        });
    });
    $(".ModTxtClr_close, #myOverlay, .boxColor").click(function () { 
        $(".ModTxtClr").animate({opacity: 0}, 198, function(){
            $(this).css('display', 'none');
            $("#myOverlay").fadeOut(297);
        })
    });
    $(".boxColor").click(function (e) { 
        let color = e.target.style.backgroundColor;
        $("#textarea").css('color', color);
    });
// модальне вікно фону та ін
    //   таби
        $(".jq-tab-trigger").click(function () { 
            let tabName = $(this).attr('data-tab');
            let tab = $('.jq-tab-content[data-tab = "'+tabName+'"]');
            $('.jq-tab-trigger').removeClass('active');
            $(this).addClass('active');
            $('.jq-tab-content').removeClass('active');
            tab.addClass('active');
        });
    // 
    $(".jqBtnModStyle").click(function () {
        $("#myOverlay").fadeIn(297, function(){
            $(".tabs").css('display', 'block').animate({opacity: 1}, 198);
        });
    });
    
    $(".ModTxtClr_close, #myOverlay, .boxColor_tabs, .boxImages_tabs").click(function () { 
        $(".tabs").animate({opacity: 0}, 198, function(){
            $(this).css('display', 'none');
            $("#myOverlay").fadeOut(297);
        })
    });

    function deliteClass(){
        let elem = document.querySelector("#textarea");
        let arr = elem.classList;
        $.each(arr, function(index, value){
            $("#textarea").removeClass(value);
        });
        $("#textarea").css('background-image', '');
    }

    $(".boxColor_tabs").click(function (e) { 
        let color = e.target.style.backgroundColor;
        deliteClass();
        $("#textarea").css('background-color', color);
    });

    $(".boxImages_tabs").click(function (e) { 
        deliteClass();
        $("#textarea").addClass('bg_img_style');
        $('#textarea').addClass(e.target.classList[2])
    });
    
    $("#myfile").change(function () { 
        $(".tabs").animate({opacity: 0}, 198, function(){
            $(this).css('display', 'none');
            $("#myOverlay").fadeOut(297);
        })
        let file = document.getElementById("myfile").files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
            reader.onload = function(e){
                deliteClass();
                $("#textarea").addClass('bg_img_style');
                $('#textarea').css('background-image', 'url("' + reader.result + '")');
            }
    });
    // sign in
    $(".icoLock").click(function () {
        $("#myOverlay").fadeIn(297, function(){
            $(".SignIn").css('display', 'block').animate({opacity: 1}, 198);
        });
    });
    $(".ModTxtClr_close, #myOverlay, .boxColor").click(function () { 
        $(".SignIn").animate({opacity: 0}, 198, function(){
            $(this).css('display', 'none');
            $("#myOverlay").fadeOut(297);
        })
    });

    $(".signIn_btn").click(function (e) { 
        if(($("#SignInForm > input[type='login']").val() === '') || ($("#SignInForm > input[type='password']").val()) === ''){
            $("#SignInForm > input:not([type='button'])").addClass('invalid');
            $("#SignInForm > input[type='password']").after("<p class ='invalidNotice'>Value is empty</p>");
        }
        else if (($("#SignInForm > input[type='login']").val() !== 'admin') || ($("#SignInForm > input[type='password']").val() !== 'admin')){
            $("#SignInForm > input:not([type='button'])").addClass('invalid');
            $(".invalidNotice").remove();
            $("#SignInForm > input[type='password']").after("<p class ='invalidNotice'>Please check your login or password</p>");
        }
        else{
            $("#SignInForm > input:not([type='button'])").removeClass('invalid');
            $(".invalidNotice").remove();
            $(".icoEditor").removeClass('disabled');
            $(".SignIn").animate({opacity: 0}, 198, function(){
                $(this).css('display', 'none');
                $("#myOverlay").fadeOut(297);
            })
        }
        
    });
    // редактор
    $(".icoEditor").click(function () { 
        $(".screen").toggle();
        $(".editor").toggle();
        $('#screentextarea').html($('#textarea').html());
    });

        // save
    $('.jqsave').click(function (e) { 
        $('#textarea').html($('#screentextarea').val());
        $(".screen").toggle();
        $(".editor").toggle();
    });
        // table
        $(".jqtable").click(function () {
            $(".myOverlay").fadeIn(297, function(){
                $(".ModeTable").css('display', 'block').animate({opacity: 1}, 198);
            });
        });
        $(".ModTxtClr_close, #myOverlay, .boxColor").click(function () { 
            $(".ModeTable").animate({opacity: 0}, 198, function(){
                $(this).css('display', 'none');
                $(".myOverlay").fadeOut(297);
            })
        });
        $('.jqcreateTb').click(function (e) { 
            // валідація
            let num = $('#createTable > input[type = "text"]');
            $.each(num, function(key, value){
                if(value.value < 1 || isNaN($(this).val())){
                    $(this).addClass('invalid');
                } 
                else{
                    $(this).removeClass('invalid');
                } 
            })
            let opt = $('#createTable > select');
            $.each(opt, function(key, value){
                if(value.value === 'choose'){
                    $(this).addClass('invalid');
                } 
                else{
                    $(this).removeClass('invalid');
                } 
            })
            if($("#createTable").children().hasClass('invalid')) $('.invalidNoticeTb').removeClass("hide");
            else $('.invalidNoticeTb').addClass("hide");

            // функціонал
            if(!$("#createTable").children().hasClass('invalid')){
                let countTr = $("#createTable #countTR").val(); 
                let countTd = $("#createTable #countTD").val();
                let tdStyle = 'style = "width: '+$("#createTable #WidthofTD").val()+'px; height: '+$("#createTable #HeightofTD").val()+'px; border: '+$("#createTable #WidthofBorder").val()+'px '+$("#createTable #Style_of_border").val()+' '+$("#createTable #Color_of_border").val()+';"';
                let tagTr = '';
                let tagTd = '';
                for(let i = 0; i < countTd; i++ ){
                    tagTd += `<td ${tdStyle}>TD</td>`;
                }
                for(let i = 0; i < countTr; i++ ){
                    tagTr += `<tr>${tagTd}</tr>`;
                }
                let tableDone = `<table><tbody>${tagTr}</tbody></table>`;
                let val = $('#screentextarea').val();
                $('#screentextarea').val(val+tableDone);
            }
        });
        $('.jqresetTb').click(function (e) {
            $.each($("#createTable input[type = 'text']"), function(i,v){
                v.value = '';
            })
            $.each($("#createTable select"), function(i,v){
                v.value = 'choose';
            })    
        });
        // ol
        $(".jqol").click(function () {
            $(".myOverlay").fadeIn(297, function(){
                $(".ModOL").css('display', 'block').animate({opacity: 1}, 198);
            });
        });
        $(".ModTxtClr_close, #myOverlay, .boxColor").click(function () { 
            $(".ModOL").animate({opacity: 0}, 198, function(){
                $(this).css('display', 'none');
                $(".myOverlay").fadeOut(297);
            })
        });
        $("#createol .create").click(function (e) {
                // вілідація
                if($("#createol #countLI").val() < 1 || isNaN($("#createol #countLI").val())) $("#createol #countLI").addClass('invalid');
                else $("#createol #countLI").removeClass('invalid');
                if($("#createol select").val() === 'choose') $("#createol select").addClass('invalid');
                else $("#createol select").removeClass('invalid');
                if($("#createol").children().hasClass('invalid')) $('.invalidNoticeOL').removeClass("hide");
                else $('.invalidNoticeOL').addClass("hide");
                // функціонал
                if(!$("#createol").children().hasClass('invalid')){
                    let countLi = $("#createol #countLI").val();
                    let tegLi = '';
                    for(let i = 0; i < countLi; i++){
                    tegLi += `<li>Item ${i+1}</li>`;
                    }
                    let typeLi = 'type="'+$("#createol #MarkOL").val()+'"';
                    let ulDone = `<ol ${typeLi}> ${tegLi} </ol>`;
                    let val = $('#screentextarea').val();
                    $('#screentextarea').val(val+ulDone);
                }
            });
            $('#createol .reset').click(function (e) {
                $("#createol #countLI").val('');
                $("#createol select").val('choose');
            });

        // ul
        $(".jqul").click(function () {
            $(".myOverlay").fadeIn(297, function(){
                $(".ModUL").css('display', 'block').animate({opacity: 1}, 198);
            });
        });
        $(".ModTxtClr_close, #myOverlay, .boxColor").click(function () { 
            $(".ModUL").animate({opacity: 0}, 198, function(){
                $(this).css('display', 'none');
                $(".myOverlay").fadeOut(297);
            })
        });
        $("#createul .create").click(function (e) {
            // вілідація
            if($("#createul #countLI").val() < 1 || isNaN($("#createul #countLI").val())) $("#createul #countLI").addClass('invalid');
            else $("#createul #countLI").removeClass('invalid');
            if($("#createul select").val() === 'choose') $("#createul select").addClass('invalid');
            else $("#createul select").removeClass('invalid');
            if($("#createul").children().hasClass('invalid')) $('.invalidNoticeUL').removeClass("hide");
            else $('.invalidNoticeUL').addClass("hide");
            // функціонал
            if(!$("#createul").children().hasClass('invalid')){
                let countLi = $("#createul #countLI").val();
                let tegLi = '';
                for(let i = 0; i < countLi; i++){
                tegLi += `<li>Item ${i+1}</li>`;
                }
                let typeLi = 'type="'+$("#createul #MarkOL").val()+'"';
                let ulDone = `<ul ${typeLi}> ${tegLi} </ul>`;
                let val = $('#screentextarea').val();
                $('#screentextarea').val(val+ulDone);
            }
        });
        $('#createul .reset').click(function (e) {
            $("#createul #countLI").val('');
            $("#createul select").val('choose');
        });
// !!!!!!!
})