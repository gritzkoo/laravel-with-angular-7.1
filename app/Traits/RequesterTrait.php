<?php

namespace App\Traits;

use App\Exceptions\AppException;
use Throwable;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\App;
use Illuminate\Http\Request;


trait RequesterTrait
{
    private $_time;
    private $_className;
    private $_method;
    private $_arguments;

    public function call($class, $method, Request $arguments)
    {
        $this->_time = microtime(true);
        $this->_className = $class;
        $this->_method = $method;
        $this->_arguments = $arguments;
        try {
            $response = response()->json($this->__transaction__(), 200);
        } catch (AppException $e) {
            $response = response()->json($e->getMessage(), 422);
        } catch (Throwable $e) {
            debug([
                'line' => $e->getLine(),
                'code' => $e->getCode(),
                'erro' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            $response = response()->json('Ocorreu um erro no sistema contate o administrador', 500);
        }
        $this->_logTime();
        return $response;
    }
    private function _logTime()
    {
        $time = microtime(true) - $this->_time;
        debug("{$this->_className}@{$this->_method} {$time} ms");
    }
    private function __transaction__()
    {
        $result = null;
        DB::transaction(function () use (&$result) {
            $result = (new $this->_className)->{$this->_method}($this->_arguments);
        });
        debug(['response'=> $result]);
        return $result;
    }
}
