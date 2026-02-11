const BASE_URL = "http://localhost:8080";

export async function login(username, password) {
  const res = await fetch(`${BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) throw new Error("Invalid login");

  return res.json();
}

export async function getEnquiries() {
  const res = await fetch(`${BASE_URL}/api/admin/enquiries`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });

  return res.json();
}
