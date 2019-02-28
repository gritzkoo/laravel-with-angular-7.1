<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Api\AppCompiler as Compiller;

class AppCompiler extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:compile';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Used to create in angular context all routes in single file to injecteble';

    /**
     * holds an instance of App\Api\AppCompiler
     * @var App\Api\AppCompiler
     * @author Gritzko D. Kleiner <gritzkoo@lhotmail.com> date:2019-02-24
     */
    protected $api;
    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(Compiller $api)
    {
        parent::__construct();
        $this->api = $api;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->info('init...');
        $this->api->exec();
        $this->info('Compilation finish....');
    }
}
