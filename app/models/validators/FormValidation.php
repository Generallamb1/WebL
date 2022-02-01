<?php
    class FormValidation
    {
        $Rules = {};
        $Errors = {};

        function isNotEmpty($data)
        {
            if ($data == NULL)
            {
                die();
            }
        }

        function isInteger($data)
        {
        
        }

        function isLess($data, $value)
        {
            
        }

        function isGreater($data, $value)
        {

        }

        function isEmail($data)
        {

        }

        function SetRule($field_name, $validator_name)
        {

        }

        function Validate($post_array)
        {

        }

        function ShowErrors()
        {
            foreach()
            {
                
            }
        }
    }