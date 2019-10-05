<?php
$image_path = url()->current()."/img/slides/muter-slide2.jpg";
$title = "あの人は今？チェッカー";
$description = "【登録不要】twitterでミュートしたユーザーを一覧表示　ミュート解除やツイートのチラ見ができるWebアプリ"
?>


<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/websaite#">
<meta property="og:url" content={{ url()->current() }} />
<meta property="og:type" content="website" />
<meta property="og:title" content={{ $title }} />
<meta property="og:description" content="【登録不要】twitterでミュートしたユーザーを一覧表示　ミュート解除やツイートのチラ見ができるWebアプリ" />
<meta property="og:site_name" content={{ $title }} />
<meta property="og:image" content={{ $image_path }} />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@cha-han5656" />
<meta name="twitter:title" content={{ $title }} />
<meta name="twitter:description" content={{ $description }} />
<meta name="twitter:image" content={{ $image_path }} />
