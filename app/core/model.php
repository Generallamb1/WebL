<?php
    class TestModel extends TestModel
    {
        function __construct()
        {
            parent::__construct();
            $this -> validator = new ResultVerification();
            $this -> validator -> SetRule('fio', 'IsNotEmpty');
            
        }
    }