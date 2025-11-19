import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to get all plots
  app.get("/api/plots", async (req, res) => {
    try {
      const plots = await storage.getAllPlots();
      res.json(plots);
    } catch (error) {
      console.error("Error fetching plots:", error);
      res.status(500).json({ error: "Failed to fetch plots" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
