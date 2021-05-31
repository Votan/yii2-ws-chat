<?php
namespace app\commands;

use yii\console\Controller;
use app\daemons\ChatServer;

class ServerController extends Controller {
    public function actionStart($port = null) {
        $server = new ChatServer();
        if ($port) {
            $server->port = $port;
        }
        $server->start();
    }
}
