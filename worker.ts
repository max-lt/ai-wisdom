addEventListener("fetch", (event: FetchEvent) => {
  event.respondWith(
    handleRequest(event.request).catch(
      (err) => new Response(err.stack, { status: 500 })
    )
  );
});

async function handleRequest(request: Request) {
  return new Response(JSON.stringify("ok"), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
