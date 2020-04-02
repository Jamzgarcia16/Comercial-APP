function editar(argument,obj) {
    //alert(obj);
    yy=obj.split("-");  // En PHP:   explode
    //alert(yy[1]);
    $("#row_crud").val(yy[1]);
    // $("#row_crud").val(obj);
    $("#subtitulo_modal").text("Edición de registro de Perfil");
    $("#come_info_id").val(argument);
    $("#boton").text("Grabar").removeClass("btn-danger btn-warning").addClass("btn-primary");
    $("#crud").val("u");

    $.post("trae_comercial_info.php",
    {
        come_info_id: argument
    },
    function(data, status) { // Callback
        objson = JSON.parse(data);
        // alert("Data: " + objson.titulo + "\nStatus: " + status);
        $("#come_info_id").val(objson.come_info_id).attr("readonly", true);
        $("#come_info_nombre").val(objson.come_info_nombre).attr("readonly", false);
        $("#come_info_apellido").val(objson.come_info_apellido).attr("readonly", false);
        $("#come_info_eps").val(objson.come_info_eps).attr("readonly", false);
        
    });

 }
 function cargar_reporte() {
    alert("Funciona Mi Hermano!");
 }

 