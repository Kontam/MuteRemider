<?php
// ツイッターオブジェクトを受け取り、エラーがあるかをチェックする。
// エラーがある場合、エラーメッセージとエラーコードの配列を返す
function TwitterAPIErrorCheck($twitter_object) {
    if (property_exists($twitter_object, "errors")) {
        $errors_array = [];
        foreach ($twitter_object->errors as $error) {
            // エラーコードに応じたエラー配列を取得
            $errors_array[] = checkTwitterErrorCode($error);
        }
        return $errors_array;
    }
    // エラーがない(通常のtwitterObjectの場合)
    return "OK";
}


// エラーコードに応じたエラーメッセージとコードの配列を返却する
// js軽量化のためバックエンドで行う
function checkTwitterErrorCode($twitter_error_obj) {
    switch ($twitter_error_obj->code) {
        // API使用回数制限エラー
        case 88:
            return [
                "message" => "１ユーザーあたりの利用制限回数を超えました。\r\n" .
                    "しばらく時間置いてから再度お試しください。",
                "code" => $twitter_error_obj->code
            ];
        // 予期しないエラーはそのまま原文を返却
        default:
            return [
                "message" => $error->message,
                "code"    => $error->code
            ];
    }
}
