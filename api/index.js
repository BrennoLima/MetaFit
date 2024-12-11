exports.handler = async (event) => {
  if (event.path === '/health') {
    return {
      statusCode: 200,
      body: JSON.stringify({ status: "UP", timestamp: new Date().toISOString() }),
    };
  }

  return {
    statusCode: 404,
    body: JSON.stringify({ error: "Resource not found" }),
  };
};