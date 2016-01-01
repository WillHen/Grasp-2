'use strict';

angular.module('Grasp.chat', ['ngRoute'])

.controller('ChatCTRL', function($scope, socket, $window) {
  $scope.ngPopupOption = {
    template:'',
    templateUrl:"chat/chat.html",
    resizable:true,
    draggable: true,
    width: 300,
    height: 291,
    position:{
      top:200,
      left:200
    },
    title : "Chat",
    pinned: true
  }
  $scope.username = $window.localStorage.getItem('username');
  $scope.usernames = [];
  $scope.messages = [];
  socket.on('onMessageAdded', function(data) {
    // $scope.usernames.push(username);
    $scope.messages.push(data);
  }); 

  $scope.addMessage = function(message) {
    var messagez = {
      id: new Date().getTime(), 
      title: 'New Message',
      body: 'Pending'
    }
    var time = moment().format('LT')
    message = $scope.username + " : " + time + " " + message
    $scope.messages.push(message);
    document.getElementById("chatbox").scrollTop = document.getElementById("chatbox").scrollHeight;
    document.getElementById("m").value = "";
    socket.emit('addMessage', message);
  }
});
