<?php

namespace App\Traits;

trait HelperTrait
{
    /**
     * if folder does not exists, make it happen!.. have fun ;)
     * @param $path string path to desired folder
     * @return void
     */
    public function _checkIfFolderExists($path)
    {
        if (!is_dir($path)) {
            mkdir($path, 751);
        }
    }
}
