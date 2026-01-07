(async () => {
  try {
    const res = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'alice', password: 'password123' }),
    });

    console.log('STATUS', res.status);
    const body = await res.text();
    try {
      console.log('BODY', JSON.parse(body));
    } catch (e) {
      console.log('BODY (raw)', body);
    }
  } catch (e) {
    console.error(e);
  }
})();