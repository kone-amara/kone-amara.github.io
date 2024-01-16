<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Le vrai</title>
    <link rel="stylesheet" href="vrai.css">
</head>
<body>
    <div id="messages"></div>

    <div id="sendMsg">
        <textarea id="msgTxt" placeholder="ENTREZ VOTRE MESSAGE..."></textarea>
        <input type="submit" value="send" id="msgBtn" onclick="module.sendMsg()">
    </div>

    <script>
        module = {};
    </script>

    <script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
        import { getDatabase, ref, set, remove, onChildAdded, onChildRemoved } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

        const firebaseConfig = {
        apiKey: "AIzaSyA216eQTA3zN2DF5COYxbko5ZmsjB821bM",
        authDomain: "conversation-e3fd6.firebaseapp.com",
        projectId: "conversation-e3fd6",
        storageBucket: "conversation-e3fd6.appspot.com",
        messagingSenderId: "254390109495",
        appId: "1:254390109495:web:57e85d9748645102c5c6b2"
        };
    
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);

        const msgTxt = document.getElementById('msgTxt');
        const messages = document.getElementById('messages');
        let sender;
        if(sessionStorage.getItem('sender')){
            sender = sessionStorage.getItem('sender');
        }else{
            sender = prompt("PLEASE ENTER YOUR NAME");
            sessionStorage.setItem('sender', sender);
        }

        //POUR ENVOYER LE MESSAGE
        module.sendMsg = function sendMsg(){
            let msg = msgTxt.value;
            let timestamp = new Date().getTime();
            set(ref(db, "messages/" + timestamp), {
                msg: msg,
                sender: sender
            })
            msgTxt.value = "";
        };

        //RECEVOIR LE MESSAGE
        onChildAdded(ref(db, "messages"), (data) => {
            if(data.val().sender == sender){
                messages.innerHTML += "<div style=justify-content:end class=outer id="+ data.key +"><div id=inner class=me>you: "+ data.val().msg +"</div><button id=dltMsg onclick=module.dltMsg("+ data.key+")>EFFACER</button></div>";
            } else{
                messages.innerHTML += "<div class=outer id="+ data.key +"><div id=inner class=notMe>"+data.val().sender+ " : " + data.val().msg +"</div></div>";
            }
            messages.scrollTo(0, messages.scrollHeight);
        })
        //SUPPRIMER MESSAGE
        module.dltMsg = function dltMsg(key){
            remove(ref(db, "messages/"+key));
        }
        
        //LORSQUE LE MESSAGE EST SUPPRIME
        onChildRemoved(ref(db, "messages"), (data) => {
            let msgBox = document.getElementById(data.key);
            // if(data.val().sender == sender){
            //     messages.innerHTML = "<div style=justify-content:end class=outer id="+ data.key +"><div id=inner class=me>you: "+ "Ce message a été supprimé" + "</div></div>";
            // } else{
            //     messages.innerHTML = "<div class=outer id="+ data.key +"><div id=inner class=notMe>"+data.val().sender+ " : " + "Ce message a été supprimé" +"</div></div>";
            // }
            messages.removeChild(msgBox);
        })
        </script>
</body>
</html>