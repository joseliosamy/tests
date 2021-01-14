$(()=>{
    $('#menu').click(()=>{
        const list = $('nav ul');
        const iconMenu = $('#menu');
        const icon = $('#menu i')
        if(list.attr('class') == 'nav' || list.attr('class') == 'hide'){
            list.addClass('show');
            list.removeClass('nav');
            list.removeClass('hide');
            iconMenu.attr('style', 'color:white;');
            icon.removeClass('bx-caret-left');
            icon.addClass('bx-caret-right');
        }else{
            list.addClass('hide');
            list.removeClass('show');
            iconMenu.attr('style', 'color:black;');
            icon.removeClass('bx-caret-right');
            icon.addClass('bx-caret-left');
        } 
    })
})