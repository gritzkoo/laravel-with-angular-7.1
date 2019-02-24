<?php

Route::name('site.')->prefix('site')->group(function() {
    Route::get('/test','HomeController@test')->name('test');
});
