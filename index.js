export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/visual")) {
      url.hostname = "t1.sazumi.moe";
    } else if (url.pathname.startsWith("/2")) {
      url.hostname = "2.sazumi.moe";
    } else if (url.pathname.startsWith("/3")) {
      url.hostname = "3.sazumi.moe";
    } else {
      return new Response("Not Found", { status: 404 });
    }

    return fetch(url, request);
  }
};
