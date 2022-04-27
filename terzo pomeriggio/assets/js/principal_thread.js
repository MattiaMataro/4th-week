var app = {
    init: function (){
        window.onpopstate = app.events.popState;
        ///un evento popstate viene inviato a window ogni volta che la voce di cronologia cambia tra due voci
        //se l'oggetto history viene creato con history.pushState() o history.replaceState() lancia l'evento popState
        window.onload = app.events.onload;
        app.eventHandlers
        // associa gli eventi definiti sotto e li ascolta
    },
    eventHandlers: function() {
        //associare al click sui btn con class btn-history l'evento mouseClick
        $(".btn.history").click(app.events.mouseClick);
    },
    events:{
        setPage:function(el) {
        //mette e toglie le classi css
        $("btn-history").addClass("btn-primary").removeClass("btn-success");
        $(el).addClass("btn-success").removeClass("btn-primary");
    },
        mouseClick:function(e) {
        //scrive nella history
        history.pushState({id: e.target.id},"History webpage", "?" + e.target.id);
        app.events.setPage("#" + e.target.id);
    },
        popState:function(event) {
        //setta le pagine con il ciclo each
        $(".btn-history").each(function(index, el){
            app.events.setPage("#", event.target.id);
        })
    },
        onload: function(event) {
        //setta la pagina giusta al caricamento
            var btn = location.href.slice(location.href.indexOf("?")+1, location.href.length);
            app.events.setPage("#" + btn);
    
    },
    }
}

//al caricamento carica l'oggetto app init
$(document).ready(app.init);

/* */