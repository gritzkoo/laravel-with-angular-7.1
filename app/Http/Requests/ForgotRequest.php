<?php

namespace App\Http\Requests;

class ForgotRequest extends BaseRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            self::EMAIL => self::REQUIRED
        ];
    }
}
