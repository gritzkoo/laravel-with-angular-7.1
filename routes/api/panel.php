<?php
/**
 * here all functionalities of the administrative panel are centralized
 * and all context here must, first of all, ve authentiqued user with api
 */
Route::middleware('auth:api')->name('panel.')->prefix('panel')->group(function() {
    Route::get('/user','PanelController@user')->name('user');
});
