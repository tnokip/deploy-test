let tasks = []; // temporary in-memory storage

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ tasks });
  } else if (req.method === "POST") {
    const { task } = req.body;
    if (task) tasks.push(task);
    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
