<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BaseRequest extends FormRequest
{
    const REQUIRED = 'required';
    /**
     * public declaration of inputs to chare with all requests
     */
    const EMAIL = 'email';
    const PASSW = 'password';
    const NAME = 'name';

}
