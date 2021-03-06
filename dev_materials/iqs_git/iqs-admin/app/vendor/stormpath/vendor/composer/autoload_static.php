<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit42f885515769d3677c55ae6c542e08f3
{
    public static $files = array (
        'decc78cc4436b1292c6c0d151b19445c' => __DIR__ . '/..' . '/phpseclib/phpseclib/phpseclib/bootstrap.php',
    );

    public static $prefixLengthsPsr4 = array (
        'p' => 
        array (
            'phpseclib\\' => 10,
        ),
        'S' => 
        array (
            'Symfony\\Component\\EventDispatcher\\' => 34,
            'Stormpath\\' => 10,
        ),
        'P' => 
        array (
            'Psr\\Cache\\' => 10,
        ),
        'C' => 
        array (
            'Cache\\Taggable\\' => 15,
            'Cache\\Hierarchy\\' => 16,
            'Cache\\Adapter\\Void\\' => 19,
            'Cache\\Adapter\\Redis\\' => 20,
            'Cache\\Adapter\\PHPArray\\' => 23,
            'Cache\\Adapter\\Memcached\\' => 24,
            'Cache\\Adapter\\Common\\' => 21,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'phpseclib\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpseclib/phpseclib/phpseclib',
        ),
        'Symfony\\Component\\EventDispatcher\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/event-dispatcher',
        ),
        'Stormpath\\' => 
        array (
            0 => __DIR__ . '/..' . '/stormpath/sdk/src',
        ),
        'Psr\\Cache\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/cache/src',
        ),
        'Cache\\Taggable\\' => 
        array (
            0 => __DIR__ . '/..' . '/cache/taggable-cache',
        ),
        'Cache\\Hierarchy\\' => 
        array (
            0 => __DIR__ . '/..' . '/cache/hierarchical-cache',
        ),
        'Cache\\Adapter\\Void\\' => 
        array (
            0 => __DIR__ . '/..' . '/cache/void-adapter',
        ),
        'Cache\\Adapter\\Redis\\' => 
        array (
            0 => __DIR__ . '/..' . '/cache/redis-adapter',
        ),
        'Cache\\Adapter\\PHPArray\\' => 
        array (
            0 => __DIR__ . '/..' . '/cache/array-adapter',
        ),
        'Cache\\Adapter\\Memcached\\' => 
        array (
            0 => __DIR__ . '/..' . '/cache/memcached-adapter',
        ),
        'Cache\\Adapter\\Common\\' => 
        array (
            0 => __DIR__ . '/..' . '/cache/adapter-common',
        ),
    );

    public static $prefixesPsr0 = array (
        'P' => 
        array (
            'Psr\\Log\\' => 
            array (
                0 => __DIR__ . '/..' . '/psr/log',
            ),
        ),
        'G' => 
        array (
            'Guzzle\\Tests' => 
            array (
                0 => __DIR__ . '/..' . '/guzzle/guzzle/tests',
            ),
            'Guzzle' => 
            array (
                0 => __DIR__ . '/..' . '/guzzle/guzzle/src',
            ),
        ),
    );

    public static $classMap = array (
        'BeforeValidException' => __DIR__ . '/..' . '/firebase/php-jwt/Exceptions/BeforeValidException.php',
        'ExpiredException' => __DIR__ . '/..' . '/firebase/php-jwt/Exceptions/ExpiredException.php',
        'JWT' => __DIR__ . '/..' . '/firebase/php-jwt/Authentication/JWT.php',
        'SignatureInvalidException' => __DIR__ . '/..' . '/firebase/php-jwt/Exceptions/SignatureInvalidException.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit42f885515769d3677c55ae6c542e08f3::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit42f885515769d3677c55ae6c542e08f3::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInit42f885515769d3677c55ae6c542e08f3::$prefixesPsr0;
            $loader->classMap = ComposerStaticInit42f885515769d3677c55ae6c542e08f3::$classMap;

        }, null, ClassLoader::class);
    }
}
