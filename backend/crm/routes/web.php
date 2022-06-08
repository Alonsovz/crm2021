<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//rutas para usuarios
Route::post('validarCredenciales', 'UsuarioController@validarCredenciales');
Route::post('getRoles', 'UsuarioController@getRoles');
Route::get('getUsuarios', 'UsuarioController@getUsuarios');
Route::post('getUsuarioRpt', 'UsuarioController@getUsuarioRpt');
//rutas para clientes
Route::get('getAllClientesEdesal', 'ClientesController@getAllClientesEdesal');
Route::post('getclientesbyname', 'ClientesController@getclientesbyname');
Route::post('listarContactosByCliente', 'ClientesController@listarContactosByCliente');
Route::post('listarSuministrosByCliente', 'ClientesController@listarSuministrosByCliente');
Route::post('getProspectosStakeholders', 'ClientesController@getProspectosStakeholders');
Route::post('getContactosPotenciales', 'ClientesController@getContactosPotenciales');
Route::post('getClientesCompartidos', 'ClientesController@getClientesCompartidos');
Route::post('listarContactosByCliente_potenciales', 'ClientesController@listarContactosByCliente_potenciales');
Route::post('getUsuariosByCliente', 'ClientesController@getUsuariosByCliente');
Route::post('getUsuariosDisponibles', 'ClientesController@getUsuariosDisponibles');
Route::post('guardarUsuario', 'ClientesController@guardarUsuario');
Route::post('eliminarUsuario', 'ClientesController@eliminarUsuario');
Route::post('guardarContacto', 'ClientesController@guardarContacto');
Route::post('eliminarcontacto', 'ClientesController@eliminarcontacto');
Route::post('editarContacto', 'ClientesController@editarContacto');
Route::post('guardarContacto_prospectos', 'ClientesController@guardarContacto_prospectos');
Route::post('eliminarcontacto_prospectos', 'ClientesController@eliminarcontacto_prospectos');
Route::post('guardarInformacion_Clientes', 'ClientesController@guardarInformacion_Clientes');
Route::get('getAllUsuariosDisponibles', 'ClientesController@getAllUsuariosDisponibles');
Route::post('guardarCliente_prospectos', 'ClientesController@guardarCliente_prospectos');
Route::post('guardar_contactos_cliente', 'ClientesController@guardar_contactos_cliente');
Route::post('guardar_usuarios_cliente', 'ClientesController@guardar_usuarios_cliente');
Route::get('getClientesAtenciones', 'ClientesController@getClientesAtenciones');
Route::post('getHistorialCliente', 'ClientesController@getHistorialCliente');


//rutas para atenciones

Route::get('getTiposAtenciones', 'AtencionesController@getTiposAtenciones');
Route::post('mover_archivo', 'AtencionesController@mover_archivo');
Route::post('eliminar_archivo', 'AtencionesController@eliminar_archivo');
Route::post('guardarAtencion', 'AtencionesController@guardarAtencion');
Route::post('guardarArchivosAtn', 'AtencionesController@guardarArchivosAtn');
Route::post('getAllAtenciones', 'AtencionesController@getAllAtenciones');
Route::post('getDetalleAtencion', 'AtencionesController@getDetalleAtencion');
Route::post('getAdjuntosAtencion', 'AtencionesController@getAdjuntosAtencion');
Route::any('descargarArchivo', 'AtencionesController@descargarArchivo');
Route::post('getConteoAtencion', 'AtencionesController@getConteoAtencion');
Route::get('getUsuariosAtenciones', 'AtencionesController@getUsuariosAtenciones');
Route::post('getEventosPendientes', 'AtencionesController@getEventosPendientes');
Route::post('generarRptGlobal', 'AtencionesController@generarRptGlobal');
Route::post('cerrarAtencion', 'AtencionesController@cerrarAtencion');

//rutas para eventos
Route::post('getAllEventos', 'EventosController@getAllEventos');
Route::post('guardarEvento', 'EventosController@guardarEvento');
Route::post('guardarArchivosEvt', 'EventosController@guardarArchivosEvt');
Route::post('getDetalleEvento', 'EventosController@getDetalleEvento');
Route::post('getEventosAsociados', 'EventosController@getEventosAsociados');
Route::post('getAdjuntosEventos', 'EventosController@getAdjuntosEventos');
Route::post('getConteoEvento', 'EventosController@getConteoEvento');
Route::get('getUsuariosEventos', 'EventosController@getUsuariosEventos');
Route::post('getTicketsPendientes', 'EventosController@getTicketsPendientes');
Route::post('guardarResolucion', 'EventosController@guardarResolucion');
Route::post('guardarEventoByAtencion', 'EventosController@guardarEventoByAtencion');

//rutas para tickets
Route::post('getAllTickets', 'TicketController@getAllTickets');
Route::post('guardarTicket', 'TicketController@guardarTicket');
Route::post('guardarTicketOrder', 'TicketController@guardarTicketOrder');
Route::post('getDetalleTicket', 'TicketController@getDetalleTicket');
Route::post('getTicketsAsociados', 'TicketController@getTicketsAsociados');
Route::post('getConteoTickets', 'TicketController@getConteoTickets');
Route::post('notificarUsuarios', 'TicketController@notificarUsuarios');


//rutas para ordenes técnicas
Route::get('getAllOrdenes', 'OrTecnicasController@getAllOrdenes');
Route::post('guardarTicketOrder', 'OrTecnicasController@guardarTicketOrder');
Route::post('aprobarOrdenTecnica', 'OrTecnicasController@aprobarOrdenTecnica');
Route::post('aprobarOrdenVentas', 'OrTecnicasController@aprobarOrdenVentas');
Route::post('denegarOrdenTecnica', 'OrTecnicasController@denegarOrdenTecnica');
Route::post('denegarOrdenVentas', 'OrTecnicasController@denegarOrdenVentas');
Route::post('denegarOrdenGG', 'OrTecnicasController@denegarOrdenGG');
Route::post('aprobarOrdenGG', 'OrTecnicasController@aprobarOrdenGG');


Route::any('imprimirorden','OrTecnicasController@imprimirOrden');
//rutas para suministros
Route::get('getAllSuministrosCorporativa', 'SuministrosController@getAllSuministrosCorporativa');
Route::get('getAllSuministrosComercial', 'SuministrosController@getAllSuministrosComercial');

Route::post('getAtencionesBySuministro', 'SuministrosController@getAtencionesBySuministro');


//rutas para gestiones comerciales
Route::get('getMotivosAtenciones', 'MotivosAtnController@getMotivosAtenciones');
Route::post('save_motivoatn', 'MotivosAtnController@save');
Route::post('delete_motivoatn', 'MotivosAtnController@delete');
Route::post('edit_motivoatn', 'MotivosAtnController@edit');
Route::get('getMotivosAtenciones_GC', 'MotivosAtnController@getMotivosAtenciones_GC');
Route::post('getSistemaMotivoAtn', 'MotivosAtnController@getSistemaMotivoAtn');
Route::post('guardarEventoGC', 'EventosController@guardarEventoGC');
Route::post('getClausulaAclaratoria', 'MotivosAtnController@getClausulaAclaratoria');

Route::post('getAllAtencionesGC', 'AtencionesController@getAllAtencionesGC');

//cartas
Route::post('getDatosbyCarta', 'ClausulasController@getDatosbyCarta');
Route::post('save_parrafo', 'ClausulasController@save_parrafo');
Route::post('edit_parrafo', 'ClausulasController@edit_parrafo');
Route::post('delete_parrafo', 'ClausulasController@delete_parrafo');
