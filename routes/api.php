<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/**
 * on this project, all scopes are splited in many files in api folder
 * so if any changes must be done, find in api folder de relative
 * context and then change it
 */
foreach(glob(__DIR__.DIRECTORY_SEPARATOR.'api'.DIRECTORY_SEPARATOR.'*') as $file) {
    include($file);
}
