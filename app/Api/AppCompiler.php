<?php

namespace App\Api;

use Illuminate\Support\Facades\Route;
use App\Traits\HelperTrait;

class AppCompiler
{
    use HelperTrait;
    public function exec()
    {
        return $this->compileRoutes();
    }

    private function compileRoutes()
    {
        $routes = Route::getRoutes();
        $tmpList = [];
        $toCompile = [];
        foreach ($routes as $route) {
            $name = $route->getName();
            $path = $route->uri();
            if (!$name) {
                $name = $this->handleRouteName($path, $tmpList);
            }
            $this->checkArrayKeyColision($name, $tmpList);
            $tmpList[$name] = '/' . $path;
        }
        foreach ($tmpList as $key => $value) {
            $this->insertInArray($toCompile, $key, $value);
        }
        $content = ""
            . "/**\n"
            . " * THIS FILE WAS AUTO GENERATED PLEASE DO NOT EDIT THIS\n"
            . " * - laravel routes was compile with lang files\n"
            . " * @author Gritzko D. Kleiner <gkleiner@luxfacta.com>\n"
            . " */\n"
            . "export const lararoutes = ";
        $content .= json_encode($toCompile, JSON_PRETTY_PRINT) . "\n";
        $content = preg_replace('/:\s+"(.*)"/', ": '$1'", $content);
        $content = preg_replace('/\{.*\}/', "", $content);
        $content = str_replace('\/', "/", $content);
        $content = str_replace('"', "", $content);
        $this->putContentInTypscript($content, 'laravel-routes.ts');
        return $this;
    }
    private function handleRouteName($path)
    {
        $name = $path;
        $name = preg_replace('/\//', '.', $name);
        $name = preg_replace('/(\{|\})/', '', $name);
        return preg_replace('/-/', '_', $name);
    }
    private function checkArrayKeyColision($key, &$array)
    {
        $finder = preg_replace('/\.[a-z0-9_]+$/', '', $key);
        if (array_key_exists($finder, $array)) {
            $tv = $array[$finder];
            unset($array[$finder]);
            $array[$finder . '.index'] = $tv;
        }
    }
    private function putContentInTypscript($content, $filename)
    {
        $ds = DIRECTORY_SEPARATOR;
        $this->_checkIfFolderExists(resource_path('AngularApplication'));
        $this->_checkIfFolderExists(resource_path("AngularApplication{$ds}src"));
        $this->_checkIfFolderExists(resource_path("AngularApplication{$ds}src{$ds}app"));
        $this->_checkIfFolderExists(resource_path("AngularApplication{$ds}src{$ds}app{$ds}Interfaces"));
        file_put_contents(resource_path("AngularApplication{$ds}src{$ds}app{$ds}Interfaces{$ds}{$filename}"), $content);
        return $this;
    }
    private function insertInArray(&$data, $stringKey, $value)
    {
        $parts = explode('.', $stringKey);
        $temp = &$data;
        foreach ($parts as $key) {
            $temp = &$temp[$key];
        }
        $temp = $value ?? 'none';
    }
}
