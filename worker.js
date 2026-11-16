
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    const respond = (data, status = 200) =>
      new Response(JSON.stringify(data), {
        status,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json"
        }
      });

    if (url.pathname === "/") {
      return respond({
        status: "online",
        project: "Power Boost Official Backend"
      });
    }

    return respond({ error: "Route not found" }, 404);
  }
};
