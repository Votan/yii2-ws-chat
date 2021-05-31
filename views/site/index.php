<?php

/* @var $this yii\web\View */

$this->title = 'My Yii Application';
$this->registerJsFile('@web/js/chat.js');
?>
<div class="site-index">
    Username:<br />
    <input id="username" type="text"><button id="btnSetUsername">Set username</button>

    <div id="chat" style="width:400px; height: 250px; overflow: scroll;"></div>

    Message:<br />
    <input id="message" type="text"><button id="btnSend">Send</button>
    <div id="response" style="color:#D00"></div>
</div>
