<?php
include '../smarty/libs/Smarty.class.php';

# Configure el objeto plantilla (Smarty)
$p1 = new Smarty();
$p1->setCompileDir('../compile_comercialApp');	# Requiere permisos +rw
$p1->setCacheDir('../cache');		# Requiere permisos +rw
$p1->setConfigDir('../config_comercialApp');
$p1->setTemplateDir('../tpl_comercialApp');

$p1->caching = false;	# El cache debe estar apagado en tiempo del desarrollo

?>