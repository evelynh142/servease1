<!DOCTYPE html>
<html>
<head>
    <!-- Include Firebase SDK -->
    <script src="https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js"></script>
</head>
<body>
    <div id="root"></div>

    <script>
        // Initialize Firebase
        const firebaseConfig = {
            apiKey: "YOUR_API_KEY",
            authDomain: "YOUR_AUTH_DOMAIN",
            projectId: "YOUR_PROJECT_ID",
            messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
            appId: "YOUR_APP_ID"
        };
        firebase.initializeApp(firebaseConfig);

        const database = firebase.database();

        // React component for the sender website
        class SenderApp extends React.Component {
            sendCommand(command) {
                // Send the command to Firebase
                database.ref("command").set(command);
            }

            render() {
                return (
                    <div className="sender-container">
                        <h1>Sender Website</h1>
                        <button onClick={() => this.sendCommand("Water plz")}>Water plz</button>
                        <button onClick={() => this.sendCommand("Fork plz")}>Fork plz</button>
                        <button onClick={() => this.sendCommand("To go box plz")}>To go box plz</button>
                    </div>
                );
            }
        }

        // Render the SenderApp component
        ReactDOM.render(<SenderApp />, document.getElementById("root"));
    </script>

    <style>
        /* CSS styles for the sender website */
        .sender-container {
            text-align: center;
            padding: 20px;
        }

        button {
            margin: 10px;
            padding: 10px 20px;
            font-size: 16px;
            background-color: #007bff;
            color: #fff;
            border: none;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #0056b3;
        }
    </style>
</body>
</html>
