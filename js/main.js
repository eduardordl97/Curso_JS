$(document).ready(function(){
    //slider
    if(window.location.href.indexOf('index')> -1){
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            auto: true
            });
        
    }
    
    //Post
    if(window.location.href.indexOf('index')> -1){
        var post = [
            {
                title: 'Prueba de titulo',
                date:  moment().format('MMMM Do YYYY'),
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
            },
            {
                title: 'Prueba de titulo 2',
                date: moment().format('MMMM Do YYYY'),
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
            },
            {
                title: 'Prueba de titulo 3',
                date: moment().format('MMMM Do YYYY'),
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'

            },
            {
                title: 'Prueba de titulo 4',
                date: moment().format('MMMM Do YYYY'),
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'

            }
        ];
        post.forEach((item, index)=>{
            var post = `<article class="post">
                        <h2>${item.title}</h2>
                        <span class="date">${item.date}</span>
                        <p>${item.content}</p>
                        <a href="#" class="button-more">Leer más</a>
                        </article>
                        `
            $('#posts').append(post);
        });
    }

    //Selector de temas
    var theme = $('#theme')  
    
    $('#to-green').click(function(){
        theme.attr('href','css/green.css') 
        if(theme.attr('href','css/green.css')){
            localStorage.setItem('blue mode','false')  
            localStorage.setItem('green mode','true') 
            localStorage.setItem('red mode','false') 
        }else{
            localStorage.setItem('green mode','false')
        } 
    })
    $('#to-blue').click(function(){
        theme.attr('href','css/blue.css') 
        if(theme.attr('href','css/blue.css')){
            localStorage.setItem('blue mode','true')  
            localStorage.setItem('green mode','false') 
            localStorage.setItem('red mode','false') 
        }else{
            localStorage.setItem('blue mode','false')            
        }        
    })
    $('#to-red').click(function(){
        theme.attr('href','css/red.css') 
        if(theme.attr('href','css/red.css')){
            localStorage.setItem('blue mode','false')  
            localStorage.setItem('green mode','false') 
            localStorage.setItem('red mode','true') 
        }else{
            localStorage.setItem('red mode','false')
        } 
    })
    
    if(localStorage.getItem('blue mode')=== 'true'){
        theme.attr('href','css/blue.css') 
        
    }else if(localStorage.getItem('red mode')=== 'true'){
        theme.attr('href','css/red.css')
    }else if((localStorage.getItem('green mode')=== 'true')){
        theme.attr('href','css/green.css')
    }
    //Scroll arriba
    $('.subir').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },500);

        return false;
    })
    //login falso
    $('#login form').submit(function(){
        var form_name = $('#form_name').val();
        localStorage.setItem('form_name', form_name)
    });

    var form_nam = localStorage.getItem('form_name')

    if(form_nam != null && form_nam != 'undefined'){
        var about_p =$('#welcome')
        about_p.html('Bienvenido: '+form_nam)
        about_p.append('<br><a href="#" id="logout">Cerrar sesión</a>')
        $('#login').hide()
        $('#logout').click(function(){
            localStorage.clear();
            location.reload()
            
        })
    }

    //Acordeon
    if(window.location.href.indexOf('about')> -1){
        $('#acordeon').accordion();
    }

    //REloj
    if(window.location.href.indexOf('reloj')> -1){
        setInterval(function(){
            var reloj = moment().format('LTS'); 
            $('#reloj').html(reloj);
        },1000);
        
    }
    //form
    if(window.location.href.indexOf('contact') > -1){
	
		$("form input[name='date']").datepicker({
			dateFormat: 'dd-mm-yyyy'
		});

		$.validate({
		    lang: 'es',
		    errorMessagePosition: 'top',
		    scrollToTopOnError: true
		});

	}
    
})