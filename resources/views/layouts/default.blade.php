<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="css/index.css">
        <title>@yield('title')</title>
    </head>
    <body>
        @yield('body')
        <script>
            var base_path = '{!! url('/') !!}';
        </script>
        <script src="js/vendor.js" charset="utf-8"></script>
        <script src="js/manifest.js" charset="utf-8"></script>
        <script src="js/index.js" charset="utf-8"></script>

    </body>
</html>
