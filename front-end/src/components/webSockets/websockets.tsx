const ws = new WebSocket('ws://localhost:8080/ws?user_id=user123&session_id=session456');
ws.onopen = () => console.log('Connected');
ws.onmessage = (event) => console.log(JSON.parse(event.data));
ws.send(JSON.stringify({ content: 'Hello, Gemini!' }));