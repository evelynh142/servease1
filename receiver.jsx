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
        // Initialize Firebase (use the same Firebase config as the sender website)
        const firebaseConfig = {
            apiKey: "YOUR_API_KEY",
            authDomain: "YOUR_AUTH_DOMAIN",
            projectId: "YOUR_PROJECT_ID",
            messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
            appId: "YOUR_APP_ID"
        };
        firebase.initializeApp(firebaseConfig);

        const database = firebase.database();

        // React component for the receiver website
        class ReceiverApp extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    command: "No command"
                };
            }

            componentDidMount() {
                // Listen for changes in the "command" node
                database.ref("command").on("value", (snapshot) => {
                    const command = snapshot.val() || "No command";
                    // Update the received command in the component state
                    this.setState({ command });
                });
            }

            render() {
                return (
                    <div className="receiver-container">
                        <h1>Receiver Website</h1>
                        <div className="received-command">Received Command: {this.state.command}</div>
                    </div>
                );
            }
        }

        // Render the ReceiverApp component
        ReactDOM.render(<ReceiverApp />, document.getElementById("root"));
    </script>

    <style>
        /* CSS styles for the receiver website */
        .receiver-container {
            text-align: center;
            padding: 20px;
        }

        .received-command {
            margin-top: 20px;
            font-size: 18px;
        }
    </style>
</body>
</html>
