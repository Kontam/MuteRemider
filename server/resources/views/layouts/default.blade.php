<!DOCTYPE html>
<html lang="ja">
    <head>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-131071829-1"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-131071829-1');
        </script>
        <!-- Google ここまで -->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="csrf-token" content={{ csrf_token() }}>
        @yield('head')
        <title>@yield('title')</title>
    </head>
    <body>
        @yield('body')
        <script>
            var base_path = '{!! url('/') !!}';
        </script>
        <script src="js/vendor.js" charset="utf-8"></script>
        <script src="js/manifest.js" charset="utf-8"></script>
        @yield('scripts')
    </body>
</html>
