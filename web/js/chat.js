$(function() {
    var chat = new WebSocket('ws://localhost:8080');
    chat.onmessage = function(e) {
        $('#response').text('');

        var response = JSON.parse(e.data);
        console.log(response);
        if (response.action && response.action == 'chat') {
            $('#chat').append('<div><b>' + response.from + '</b>: ' + response.message + '</div>');
            $('#chat').scrollTop = $('#chat').height;
        } else if (response.message) {
            $('#response').text(response.message);
        }
    };
    chat.onopen = function(e) {
        $('#response').text("Connection established! Please, set your username.");
    };
    $('#btnSend').click(function() {
        if ($('#message').val()) {
            chat.send( JSON.stringify({'action' : 'chat', 'message' : $('#message').val()}) );
        } else {
            alert('Enter the message')
        }
    })

    $('#btnSetUsername').click(function() {
        if ($('#username').val()) {
            chat.send( JSON.stringify({'action' : 'setName', 'name' : $('#username').val()}) );
        } else {
            alert('Enter username')
        }
    })
})